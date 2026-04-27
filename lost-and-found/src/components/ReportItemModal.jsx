function ReportItemModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Report an Item</h2>

        <form className="space-y-3">
          <input placeholder="Item name" className="w-full border p-2 rounded" />
          <textarea placeholder="Description" className="w-full border p-2 rounded" />
          <input type="file" />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="border px-3 py-1 rounded">
              Cancel
            </button>

            <button type="submit" className="bg-orange-500 text-white px-3 py-1 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportItemModal;
