// Main App component — this is what gets rendered into the page.
// For now it just shows the landing page with our Lost & Found logo.
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight">
          <span className="text-illini-blue">Lost &amp;</span>{' '}
          <span className="text-illini-orange">Found</span>
        </h1>

        {/* Small tagline under the logo so the page isn't just a giant title */}
        <p className="mt-4 text-lg text-gray-600">
          UIUC's campus lost &amp; found, built by students.
        </p>
      </div>
    </div>
  )
}

export default App
