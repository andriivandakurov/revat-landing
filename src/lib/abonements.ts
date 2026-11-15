// Maps Altegio membership types (src/data/altegio-abonements.json) to the
// price tabs shown on the abonements page.

const PURCHASE_BASE = 'https://o2873.alteg.io/loyalty/subscription';

// Altegio membership type IDs shown with the "НАЙПОПУЛЯРНІШИЙ" badge.
const POPULAR_IDS = [473194]; // Груповий - 12 занять

export type AltegioAbonement = {
  id: number;
  title: string;
  cost: number;
  online_sale_price: number;
  is_online_sale_enabled: boolean;
  is_archived: boolean;
  united_balance_services_count: number;
  period: number;
  period_unit_id: number;
};

export type PriceItem = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  popular: boolean;
  urls: { kulparkivska: string; zhovkivska: string };
};

export type PriceCategory = {
  id: string;
  name: string;
  description: string;
  items: PriceItem[];
};

const CATEGORIES = [
  { id: 'group', name: 'ГРУПОВІ', description: 'Тренування 60 хв у групах 6–12 осіб під наглядом тренера.' },
  { id: 'opengym', name: 'OPENGYM', description: 'Самостійні тренування у вільний час. Можна додати програму від сертифікованого тренера.' },
  { id: 'personal', name: 'ПЕРСОНАЛЬНІ', description: 'Програма під твої цілі. Рекомендації щодо харчування, сну й режиму.' },
  { id: 'classes', name: 'АВТОРСЬКІ КЛАСИ', description: 'Спеціалізовані тренування: важка атлетика, онлайн.' },
  { id: 'sauna', name: 'САУНА', description: 'Розслаблення та відновлення після тренувань.' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

// Order matters: the first matching rule wins.
const TITLE_RULES: { pattern: RegExp; category: CategoryId }[] = [
  { pattern: /open\s*gym/i, category: 'opengym' },
  { pattern: /^сауна/i, category: 'sauna' },
  { pattern: /важка атлетика/i, category: 'classes' },
  { pattern: /персональн|спліт/i, category: 'personal' },
  { pattern: /^груповий|^разове тренування/i, category: 'group' },
];

const categoryOf = (title: string): CategoryId | null =>
  TITLE_RULES.find((rule) => rule.pattern.test(title))?.category ?? null;

// "Персональний - 10 занять (з тренером 2 категорії)"
//   → title "10 занять", subtitle "з тренером 2 категорії"
// "Open Gym - денний (6:00 - 17:00)"
//   → title "денний", subtitle "6:00 - 17:00"
// "Разове тренування" → title "Разове тренування", subtitle "1 заняття"
const splitTitle = (item: AltegioAbonement): { title: string; subtitle: string } => {
  const parenthesis = item.title.match(/\(([^)]*)\)\s*$/);
  const core = item.title.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const withPrefix = core.match(/^(.+?)\s-\s(.+)$/);
  const title = withPrefix ? withPrefix[2] : core;

  let subtitle = parenthesis ? parenthesis[1] : '';
  if (!subtitle) {
    if (item.united_balance_services_count === 1) subtitle = '1 заняття';
    else if (item.period === 1) subtitle = 'на місяць';
    else subtitle = `на ${item.period} міс.`;
  }

  return { title, subtitle };
};

export const buildPriceCategories = (items: AltegioAbonement[]): PriceCategory[] => {
  const sellable = items.filter(
    (item) => item.is_online_sale_enabled && !item.is_archived && item.online_sale_price > 0,
  );

  return CATEGORIES.map((category) => {
    const priceItems = sellable
      .filter((item) => categoryOf(item.title) === category.id)
      .sort((a, b) => a.online_sale_price - b.online_sale_price)
      .map((item) => {
        const { title, subtitle } = splitTitle(item);
        const url = `${PURCHASE_BASE}/${item.id}`;
        return {
          id: String(item.id),
          title,
          subtitle,
          price: item.online_sale_price,
          popular: POPULAR_IDS.includes(item.id),
          // Location attachment isn't in the chain response yet, so every online
          // subscription is linked to Kulparkivska only.
          urls: { kulparkivska: url, zhovkivska: '' },
        };
      });

    return { id: category.id, name: category.name, description: category.description, items: priceItems };
  }).filter((category) => category.items.length > 0);
};
