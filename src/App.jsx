import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HomePage, Gachapon, NotFound } from './page'
import HomePage from './page/HomePage';
import Gachapon from './page/Gachapon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gachapon" element={<Gachapon />} />
      </Routes>
    </Router>
  );
}

export default App;
