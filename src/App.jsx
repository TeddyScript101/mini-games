import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Gachapon from './page/Gachapon';
import SlotMachine from './page/SlotMachine';
import LuckyDraw from './page/LuckyDraw';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gachapon" element={<Gachapon />} />
          <Route path="/luckyDraw" element={<LuckyDraw />} />
          <Route path="/slotMachine" element={<SlotMachine />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
