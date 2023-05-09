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
  const [page, setPage] = useState(1)
  const totalPages = 9
  
  useEffect(() => {
    async function getStuff(page) {
      const res = await fetch(`${apiURL}?page=${page}&page_size=40&key=${apiKey}`)
      const json = await res.json()
      setData(json.results)
    }
    getStuff(page)
  }, [page]);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const increasePage = () => {
    page < pageNumbers.length ? setPage(page + 1) : setPage(page);
  };

  const decreasePage = () => {
    setPage(page - 1);
  };

  return (
    <main className="flex flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 min-h-screen">
      <Header id="heading" />
      <NavBar id="nav" />
      <section id="pages" className="inline-flex justify-center my-5" aria-label="Pagination">
        <button
          onClick={decreasePage}
          disabled={page === 1}
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>
        {pageNumbers.map(num => {
          return (
            <button className="text-white mx-3" onClick={() => setPage(num)} aria-current={num === page ? 'page' : undefined} key={num}>
              {num}
            </button>
          )
        })}
        <p className="text-white">...</p>
        <button
          onClick={increasePage}
          aria-label="Next Page"
        >
          <svg onClick={increasePage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </section>
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