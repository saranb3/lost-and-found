import { useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';

function FilterSidebar({ category, onCategoryChange, sortOrder, onSortChange }) {
  const [itemTypes, setItemTypes] = useState([]);

  useEffect(() => {
    async function fetchItemTypes() {
      const { data, error } = await supabase
        .from('item_types')
        .select('id, name');

      if (error) {
        console.error(error);
      } else {
        setItemTypes(data);
      }
    }

    fetchItemTypes();
  }, []);

  return (
    <aside className="bg-white border border-stone-200 rounded-lg p-4 self-start">
      <h2 className="text-base font-semibold text-illini-blue mb-4">Filter Items</h2>

      <div className="mb-5">
        <h3 className="text-xs font-semibold text-illini-blue uppercase tracking-wide mb-2">
          Item Type
        </h3>

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full text-sm border border-stone-300 rounded-md px-3 py-2 focus:outline-none focus:border-illini-blue"
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {itemTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-illini-blue uppercase tracking-wide mb-2">
          Sort by Date
        </h3>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onSortChange('desc')}
            aria-pressed={sortOrder === 'desc'}
            className={`flex-1 text-xs py-1.5 rounded-md border transition-colors ${
              sortOrder === 'desc'
                ? 'bg-illini-blue text-white border-illini-blue'
                : 'bg-white text-stone-700 border-stone-300 hover:border-illini-blue'
            }`}
          >
            Newest
          </button>

          <button
            type="button"
            onClick={() => onSortChange('asc')}
            aria-pressed={sortOrder === 'asc'}
            className={`flex-1 text-xs py-1.5 rounded-md border transition-colors ${
              sortOrder === 'asc'
                ? 'bg-illini-blue text-white border-illini-blue'
                : 'bg-white text-stone-700 border-stone-300 hover:border-illini-blue'
            }`}
          >
            Oldest
          </button>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
