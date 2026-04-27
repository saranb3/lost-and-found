function ReportItemModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Report an Item</h2>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Item name"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
          />

          <textarea
            placeholder="Item description"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
          />

          <select className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm">
            <option value="">Select item type</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="id-card">ID/Card</option>
            <option value="water-bottle">Water Bottle</option>
            <option value="keys">Keys</option>
            <option value="other">Other</option>
          </select>

          <select className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm">
            <option value="">Select location</option>
            <option value="cif">CIF</option>
            <option value="grainger">Grainger</option>
            <option value="union">Union</option>
            <option value="main-library">Main Library</option>
            <option value="isr">ISR</option>
            <option value="ikenberry">Ikenberry</option>
          </select>

          <input
            type="text"
            placeholder="Where was it left? Ex: 2nd floor study room"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
          />

          <input
            type="date"
            className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm"
          />

          <input
            type="file"
            accept="image/*"
            className="w-full text-sm"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}   // ✅ FIXED
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
