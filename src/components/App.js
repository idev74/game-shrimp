import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import CardDetails from './CardDetails/CardDetails';
import CardLayout from './CardLayout/CardLayout'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './About/About';
import NavBar from './NavBar/NavBar';

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export default function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null) 

  useEffect(() => {
    async function getStuff() {
      let res = await fetch(`${apiURL}?page_size=40&key=${apiKey}`)
      let json = await res.json()
      console.log(json)
      setData(json)
    }
    getStuff()
  }, []);


  return (
    <main className="flex flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 min-h-screen">
      <Header id="heading" />
      <NavBar class="bg-white" id="nav" />
      <Routes>
        <Route path="/" element={
          <CardLayout
            data={data}
            query={query}
            setQuery={setQuery}
          />} />
        <Route path="/details/:id" element={<CardDetails data={data} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}