import React from 'react';
import './App.css';
import CardLayout from './components/CardLayout/CardLayout'
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <header className='top'> 
      <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp logo"/>
      <p>A hub for information about popular games.</p>
        </header>
      <CardLayout />
      <Footer />
      
    </div>
  );
}
