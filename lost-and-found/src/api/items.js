//Mock data for lost item cards --> will be replaced with supabase queries 
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
    category: 'Bags',
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
    category: 'Keys / ID',
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

// Async function that returns the items.
// We use async even though we don't need to right now —
// when we swap to Supabase later, the call WILL be async,
// and any code that uses getItems() will already be set up to await it.
export async function getItems() {
  return mockItems;
}

// When we're ready for Supabase:

// import { supabase } from './supabaseClient';
//
// export async function getItems() {
//   const { data, error } = await supabase
//     .from('items')
//     .select('*')
//     .order('date_lost', { ascending: false });
//   if (error) throw error;
//   return data;
// }