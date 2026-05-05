import { useState, useEffect } from 'react';
import { getItems } from '../api/items';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSideBar';
import ItemList from '../components/ItemList';


function BrowsePage() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [loading, setLoading] = useState(true);

  // Re-fetch whenever search, category, or sort changes.
  // The 300ms debounce on search avoids a Supabase call on every keystroke.
  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await getItems({ search: searchQuery, category, sortOrder });
        setItems(data);
      } catch (err) {
        console.error('Failed to load items:', err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, category, sortOrder]);

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
      {/* White overlay that fades the image */}
      <div className="absolute inset-0 bg-white/50 pointer-events-none" />

      <div className="relative">
        <div className="sticky top-0 z-20">
          <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
            <div className="md:col-span-1">
              <FilterSidebar
                category={category}
                onCategoryChange={setCategory}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
              />
            </div>
            <div className="md:col-span-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-2">
              {loading ? (
                <div className="text-center text-gray-400 py-12">Loading...</div>
              ) : (
                <ItemList items={items} searchQuery={searchQuery} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;
