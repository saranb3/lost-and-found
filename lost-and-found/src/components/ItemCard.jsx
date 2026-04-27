// React component for each item card 
// will receive data via "Props" 

function ItemCard({ item }) {
  return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Photo on the left, fixed width */}
      <img
        src={item.image_url}
        alt={item.name}
        className="w-36 h-36 object-cover flex-shrink-0"
      />

      {/* Details on the right */}
      <div className="flex-1 min-w-0 py-3 pr-4">
        {/* Top row: name on the left, status badge on the right */}
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-base font-medium text-gray-900">
            {item.name}
          </h3>

          {/* Only show the "Found" badge when status is 'claimed' */}
          {item.status === 'claimed' && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-md whitespace-nowrap">
              Found
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {item.description}
        </p>

        {/* Bottom metadata row: location, spot, date */}
        <div className="flex gap-4 text-xs text-gray-500 flex-wrap">
          <span>{item.location}</span>
          <span>{item.spot}</span>
          <span>{item.date_lost}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;