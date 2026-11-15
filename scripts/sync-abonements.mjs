// Fetches membership (abonement) types for the Altegio chain and saves them to
// src/data/altegio-abonements.json. Run with: npm run sync:abonements
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const API = 'https://api.alteg.io/api/v1';
const PAGE_LIMIT = 250;
const OUT = fileURLToPath(new URL('../src/data/altegio-abonements.json', import.meta.url));

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

async function getPage(chainId, page) {
  const url = new URL(`${API}/chains/${chainId}/loyalty/abonement_types`);
  url.searchParams.set('is_archived', '0');
  url.searchParams.set('limit', String(PAGE_LIMIT));
  url.searchParams.set('page', String(page));

  const res = await fetch(url, { headers: headers() });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.success === false) {
    throw new Error(`Altegio responded ${res.status}: ${body.meta?.message ?? 'unknown error'}`);
  }
  return body;
}

async function main() {
  const chainId = env('ALTEGIO_CHAIN_ID');
  const items = [];

  for (let page = 1; ; page++) {
    const body = await getPage(chainId, page);
    const data = body.data ?? [];
    items.push(...data);
    if (data.length < PAGE_LIMIT) break;
  }

  writeFileSync(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), chainId, items }, null, 2) + '\n');
  console.log(`Saved ${items.length} membership types to ${OUT}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
