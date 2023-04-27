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
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getStuff(page) {   
      const res = await fetch(`${apiURL}?page=${page}&page_size=40&key=${apiKey}`)
      const json = await res.json()
      // console.log(json)
      setData(json.results)
    }
    getStuff(page)
  }, [page]);

  return (
    <div className="App">
      <Header />
      <div>
        {[1, 2, 3, 4, 5].map(num => {
          return (
            <button onClick={() => setPage(num)}>
              {num}
            </button>
          )
        })}
      </div>
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
