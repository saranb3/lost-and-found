// ItemCard renders ONE lost item as a horizontal card.
// Photo on the left, details on the right.

function ItemCard({ item }) {
  return (
    <div className="flex gap-0 bg-white border border-stone-200 rounded-lg overflow-hidden hover:border-stone-300 transition-colors">
      
      {/* Photo space — shows the real image if one exists, otherwise a soft cream blank */}
        {item.image_url ? (
        <img
            src={item.image_url}
            alt={item.name}
            className="w-48 self-stretch object-cover flex-shrink-0"
        />
        ) : (
        <div className="w-48 self-stretch bg-stone-100 flex-shrink-0" />
        )}

      {/* Details on the right */}
      <div className="flex-1 min-w-0 flex flex-col p-4">
        
        {/* Top row: name on the left, status badge on the right */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-lg font-Cause font-bold text-illini-blue">
            {item.name}
          </h3>
        </div>

        {/* Description of item*/}
        <p className="text-sm text-stone-700 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Bottom metadata: each piece of info has its own label */}
        <div className="flex flex-col gap-1 text-xs text-stone-600 mt-auto">
          <div>
            <span className="font-semibold text-stone-800">Found at: </span>
            <span>{item.location}</span>
          </div>
          <div>
            <span className="font-semibold text-stone-800">Pick up at: </span>
            <span>{item.spot}</span>
          </div>
          <div>
            <span className="font-semibold text-stone-800">Date found: </span>
            <span>{item.date_lost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;