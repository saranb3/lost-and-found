import { useState } from 'react';

function Header({ searchQuery, onSearchChange }) {
   const [showPopup, setShowPopup] = useState(false);
  
  return (
     <>
    <header className=" py-10 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Left side: wordmark + subtitle */}
          <div className="max-w-md">
            <h1 className="text-5xl font-bold tracking-tight mb-2">
              <span className="text-illini-blue">Lost &amp;</span>{' '}
              <span className="text-illini-orange">Found</span>
            </h1>
            <p className="text-sm text-stone-600 leading-relaxed">
              Browse verified lost &amp; found items submitted by students and campus staff across UIUC.
            </p>
          </div>

          {/* Right side: search input + report button */}
          <div className="flex gap-3 items-center flex-1">
            <input
              type="text"
              placeholder="Search items (e.g. AirPods, wallet, water bottle)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:border-illini-blue"
            />
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="bg-orange-500 hover:bg-orange-300 text-white text-sm font-semibold px-5 py-2.5 rounded-md whitespace-nowrap"
            >
              + Report an Item
            </button>
          </div>
        </div>
      </div>
    </header>

{showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Report an Item</h2>

            <p className="text-sm text-stone-600 mb-4">
              This feature is coming soon. Later, this popup will let users upload lost item details and a photo.
            </p>

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="bg-illini-blue text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  
  );
}

export default Header;
