import ItemCard from './ItemCard';

function ItemList({ items, searchQuery = '' }) {
  if (items.length === 0) {
    const message = searchQuery.trim()
      ? `No items matched "${searchQuery}". Try a different search.`
      : 'No items found.';

    return (
      <div className="text-center text-gray-500 py-12">{message}</div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
