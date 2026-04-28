import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BrowsePage from './pages/BrowsePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
