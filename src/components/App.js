import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import CardDetails from './CardDetails/CardDetails';
import CardLayout from './CardLayout/CardLayout'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './About/About';

const apiURL = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export default function App() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getStuff() {
      let res = await fetch(`${apiURL}/lists/main?key=${apiKey}`)
      let json = await res.json()
      // res = await fetch(`${apiURL}?page=${2}&page_size=40&key=${apiKey}`)
      // let update = await res.json()
      // json.results.push(...update.results)
      // res = await fetch(`${apiURL}?page=${3}&page_size=40&key=${apiKey}`)
      // update = await res.json()
      // json.results.push(...update.results)
      // res = await fetch(`${apiURL}?page=${4}&page_size=40&key=${apiKey}`)
      // update = await res.json()
      // json.results.push(...update.results)
      // res = await fetch(`${apiURL}?page=${5}&page_size=40&key=${apiKey}`)
      // update = await res.json()
      // json.results.push(...update.results)
      // res = await fetch(`${apiURL}?page=${6}&page_size=40&key=${apiKey}`)
      // update = await res.json()
      // json.results.push(...update.results)
      // res = await fetch(`${apiURL}?page=${7}&page_size=40&key=${apiKey}`)
      // update = await res.json()
      // json.results.push(...update.results)
      setData(json)
    }
    getStuff()
  }, []);

  return (
    <div className="App">
      <Header />
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
    </div>
  );
}
