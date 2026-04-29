import { supabase } from '../api/supabaseClient';
import { useState, useEffect } from 'react';

function ReportItemModal({ isOpen, onClose }) {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [itemTypeId, setItemTypeId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [specificLocation, setSpecificLocation] = useState('');
  const [dateLost, setDateLost] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [itemTypes, setItemTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
  async function fetchFormOptions() {
    const { data: itemTypeData, error: itemTypeError } = await supabase
      .from('item_types')
      .select('id, name');

    const { data: locationData, error: locationError } = await supabase
      .from('locations')
      .select('id, name');

    if (itemTypeError) {
      console.error(itemTypeError);
    } else {
      setItemTypes(itemTypeData);
    }

    if (locationError) {
      console.error(locationError);
    } else {
      setLocations(locationData);
    }
  }

  if (isOpen) {
    fetchFormOptions();
  }
}, [isOpen]);
  async function handleSubmit(e) {
    e.preventDefault();
  
    const { error } = await supabase.from('lost_items').insert([
  {
    name,
    description,
    item_type_id: itemTypeId,
    location_id: locationId,
    specific_location: specificLocation,
    date_lost: dateLost,
    image_url: imageUrl,
    status: 'active',
  },
]);
  
    if (error) {
      console.error(error);
      return;
    }
  
    onClose();
  }

   if (!isOpen) return null;
 
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Report an Item</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Item name"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Item description"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={itemTypeId}
            onChange={(e) => setItemTypeId(e.target.value)}
          >
            <option value="">Select item type</option>
            {itemTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>

          <select 
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            >  
            <option value="">Select location</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
          </select>

          <input
            type="text"
            placeholder="Where was it left? Ex: 4th floor study room"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={specificLocation}
            onChange={(e) => setSpecificLocation(e.target.value)}
          />

          <input
            type="date"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
            value={dateLost}
            onChange={(e) => setDateLost(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full text-sm"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}  
              className="px-4 py-2 border border-stone-300 rounded-md text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportItemModal;
