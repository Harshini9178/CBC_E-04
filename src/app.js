// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Case-sensitive import
import MemoryGame from './components/MemoryGame';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/memory-game" element={<MemoryGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;