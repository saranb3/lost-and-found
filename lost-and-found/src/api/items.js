import { supabase } from './supabaseClient';

const mockItems = [
  {
    id: '1',
    name: 'Blue Hydroflask',
    description: 'Left on 2nd floor study table near the windows. Has a "UIUC Stats" sticker.',
    category: 'Other',
    location: 'Grainger',
    spot: 'Electronics shelf',
    date_lost: '2026-04-14',
    image_url: '',
    status: 'active',
  },
  {
    id: '2',
    name: 'AirPods Pro case',
    description: 'White case with a small scratch on the lid. No AirPods inside, just the case.',
    category: 'Electronics',
    location: 'CIF',
    spot: 'Locker area',
    date_lost: '2026-04-12',
    image_url: '',
    status: 'active',
  },
  {
    id: '3',
    name: 'Black Jansport backpack',
    description: 'Contains a spiral notebook, TI-84 calculator, and a green water bottle.',
    category: 'Backpack / Bag',
    location: 'Main Library',
    spot: 'Room 220',
    date_lost: '2026-04-10',
    image_url: '',
    status: 'active',
  },
  {
    id: '4',
    name: 'iClicker remote',
    description: 'Has a small sticker with initials "JM" on the back. Battery cover is slightly loose.',
    category: 'Electronics',
    location: 'Ikenberry',
    spot: 'Dining hall',
    date_lost: '2026-04-08',
    image_url: '',
    status: 'claimed',
  },
  {
    id: '5',
    name: 'Silver house key',
    description: 'Single key on a small red carabiner. No keychain.',
    category: 'Keys',
    location: 'Union',
    spot: 'Food court',
    date_lost: '2026-04-15',
    image_url: '',
    status: 'active',
  },
  {
    id: '6',
    name: 'Gray UIUC hoodie',
    description: 'Size medium, has a small coffee stain on the right sleeve.',
    category: 'Clothing',
    location: 'ISR',
    spot: 'Lobby',
    date_lost: '2026-04-09',
    image_url: '',
    status: 'active',
  },
];

// Fetches items from Supabase (if configured) or falls back to mock data.
// Accepts search, category, and sortOrder so filtering/sorting happens server-side.
export async function getItems({ search = '', category = '', sortOrder = 'desc' } = {}) {
  if (supabase) {
    let query = supabase
      .from('lost_items')
      .select('*')
      .order('date_lost', { ascending: sortOrder === 'asc' });

      if (search.trim()) {
      const q = search.trim();
      query = query.or(`name.ilike.%${q}%,description.ilike.%${q}%`);
    }

  if (category) {
    query = query.eq('item_type_id', Number(category));
  }

    const { data, error } = await query;
    if (error) throw error;
    
    return data.length > 0 ? data : mockItems;
  }

  // --- mock fallback (used when Supabase env vars are not set) ---
  let results = [...mockItems];

  if (search.trim()) {
    const q = search.toLowerCase();
    results = results.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }

  if (category) {
    results = results.filter((item) => item.category === category);
  }

  results.sort((a, b) => {
    const da = new Date(a.date_lost);
    const db = new Date(b.date_lost);
    return sortOrder === 'asc' ? da - db : db - da;
  });

  return results;
}
