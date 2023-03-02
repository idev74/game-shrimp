import React from 'react';
import './App.css';
import CardLayout from './components/CardLayout/CardLayout'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <CardLayout />
      <Footer />
    </div>
  );
}
