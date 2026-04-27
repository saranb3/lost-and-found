// FilterSidebar is a placeholder card that will filter items --> located on left hand side of website
// Mighty built empty shell --> Somasi can drop her work logic and touch up to the rest of the page 

function FilterSidebar() {
  return (
    // aside is similar to div but for sidebar
    <aside className="bg-white border border-stone-200 rounded-lg p-4 self-start"> 
      <h2 className="text-base font-semibold text-illini-blue mb-4">
        Filter Items
      </h2>

      {/* Location section — Somasi add checkboxes here */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-illini-blue uppercase tracking-wide mb-2">
          Location Found
        </h3>
        <p className="text-sm text-gray-400 italic">
          Coming soon
        </p>
      </div>

      {/* Item type section — Somasi add checkboxes here */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-illini-blue uppercase tracking-wide mb-2">
          Item type
        </h3>
        <p className="text-sm text-gray-400 italic">
          Coming soon
        </p>
      </div>

      {/* Date lost section — Somasi add date buttons here */}
      <div>
        <h3 className="text-xs font-semibold text-illini-blue uppercase tracking-wide mb-2">
          Date lost
        </h3>
        <p className="text-sm text-gray-400 italic">
          Coming soon
        </p>
      </div>
    </aside>
  );
}

export default FilterSidebar;