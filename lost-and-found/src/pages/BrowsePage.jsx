// BrowsePage = main page of the lost & found app.

import { useState, useEffect } from 'react';
import { getItems } from '../api/items';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ItemList from '../components/ItemList';

function BrowsePage() {
  // State: the full list of items fetched from the API.
  // Starts as an empty array -> gets filled in once getItems() resolves.
  const [items, setItems] = useState([]);

  // State: what the user has typed in the search box.
  // Lives here (in the parent) so both Header (which writes it) and ItemList (which reads it via filtering below) can share it.
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect runs after the component renders : fetches data when the page first loads
  useEffect(() => {
    async function loadItems() {
      const data = await getItems();
      setItems(data);
    }
    loadItems();
  }, []);

  // Derived state: filter the items based on the search query.
  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

return (
  <div 
    className="min-h-screen bg-white relative"
    style={{
      backgroundImage: 'url(/uiuc_quad.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}
  >
    {/* White overlay that fades the image — applied via a separate layer */}
    <div className="absolute inset-0 bg-white/50 pointer-events-none" />

    {/* All page content sits on top of the overlay */}
    <div className="relative">
      {/* Hero spans full width — has its own slight cream tint */}
    <div className="sticky top-0 z-20">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      </div>

      {/* Body content lives inside the centered container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
          <div className="md:col-span-1">
            <FilterSidebar />
          </div>
        <div className="md:col-span-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
        <ItemList items={filteredItems} />
        </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default BrowsePage;