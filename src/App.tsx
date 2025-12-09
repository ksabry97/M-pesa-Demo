import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, BookingsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App