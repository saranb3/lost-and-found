// ItemList renders a vertical stack of ItemCards.
// It receives the full array of items as a prop, then loops through them and renders one ItemCard for each.

import ItemCard from './ItemCard';

function ItemList({items}) { 
    // If there are no items just have a place holder 
    if (items.length == 0) { 
        return (
            <div className = "text-center text-gray-500 py-12"> 
            No items found! 
            </div>
        ); 
    }

        return( 
            <div className="flex flex-col gap-3">
            {items.map((item) => ( // goes through items array a new array --> each call returns a new item card 
                <ItemCard key={item.id} item={item} />
            ))}
            </div>
        );
}

export default ItemList;