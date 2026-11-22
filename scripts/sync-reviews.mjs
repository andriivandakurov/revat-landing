// Fetches location reviews from Altegio for Kulparkivska and writes them into
// the `altegio` block of src/data/reviews.json. Run with: npm run sync:reviews
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const API = 'https://api.alteg.io/api/v1';
const OUT = fileURLToPath(new URL('../src/data/reviews.json', import.meta.url));
const PAGE_COUNT = 500;
// Altegio comment type 0 = review about the location (type 1 = about a trainer)
const LOCATION_REVIEW_TYPE = 0;

const env = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env variable ${name}`);
  return value;
};

const headers = () => ({
  Accept: 'application/vnd.api.v2+json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${env('ALTEGIO_PARTNER_TOKEN')}, User ${env('ALTEGIO_USER_TOKEN')}`,
  // Cloudflare rejects requests without a browser-like User-Agent
  'User-Agent': 'Mozilla/5.0 (revat-landing sync)',
});

async function getComments(locationId) {
  const all = [];
  for (let page = 1; ; page++) {
    const url = new URL(`${API}/comments/${locationId}`);
    url.searchParams.set('count', String(PAGE_COUNT));
    url.searchParams.set('page', String(page));

    const res = await fetch(url, { headers: headers() });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || body.success === false) {
      throw new Error(`Altegio responded ${res.status}: ${body.meta?.message ?? 'unknown error'}`);
    }
    const data = body.data ?? [];
    all.push(...data);
    if (data.length < PAGE_COUNT) break;
  }
  return all;
}

// Reviews are stored per location key in reviews.json, with the Altegio env
// variable that holds its location ID.
const LOCATIONS = [
  { key: 'kulparkivska', envName: 'ALTEGIO_LOCATION_ID_K', googleEnv: 'GOOGLE_PLACE_ID_K' },
  { key: 'zhovkivska', envName: 'ALTEGIO_LOCATION_ID_Z', googleEnv: 'GOOGLE_PLACE_ID_Z' },
];

// Google rating and total review count for a Place, from the Places API (New)
async function getGoogleSummary(placeId) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=uk`, {
    headers: {
      'X-Goog-Api-Key': env('GOOGLE_PLACES_API_KEY'),
      'X-Goog-FieldMask': 'rating,userRatingCount',
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Google Places responded ${res.status}: ${body.error?.message ?? 'unknown error'}`);
  }
  return {
    rating: body.rating,
    total: body.userRatingCount,
    url: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
  };
}

async function syncLocation(data, { key, envName, googleEnv }) {
  const comments = (await getComments(env(envName))).filter((c) => c.type === LOCATION_REVIEW_TYPE);

  const rated = comments.filter((c) => c.rating > 0);
  const average = rated.reduce((sum, c) => sum + c.rating, 0) / rated.length;

  // Keep only what the page shows. Client names, emails and phones are dropped.
  const reviews = comments
    .map((c) => ({
      rating: c.rating,
      text: (c.text ?? '').trim(),
      created_at: c.date.replace(' ', 'T'),
      author_name: 'Клієнт',
    }))
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  data.locations[key].altegio = {
    rating: Math.round(average * 10) / 10,
    reviews,
  };

  const google = await getGoogleSummary(env(googleEnv));
  data.locations[key].google = { ...data.locations[key].google, ...google };
  console.log(`${key}: Google ${google.rating} from ${google.total} reviews`);
  console.log(`${key}: saved ${reviews.length} reviews (average ${Math.round(average * 10) / 10})`);
}

async function main() {
  const data = JSON.parse(readFileSync(OUT, 'utf-8'));
  for (const location of LOCATIONS) {
    await syncLocation(data, location);
  }
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
