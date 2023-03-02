import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import CardDetails from './components/CardDetails/CardDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
      {/* <Route path=`details/${CardList.game.id}` element={<CardDetails />} /> */}
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
