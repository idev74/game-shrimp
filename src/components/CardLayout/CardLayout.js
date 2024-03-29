import React, { useState } from "react";
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";

export default function CardLayout({ data, query, setQuery }) {
    const apiURL = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY
    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState(null)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()

        setGameResults([])
        fetch(`${apiURL}?search=${slug}&key=${apiKey}`)
            .then(res => res.json())
            .then(({ results }) => {
                results === null ? alert('no games found') : setGameResults(results)
            })
        setSearchTerm("")
    }

    if (gameResults !== null) {
        return (
            <section>
                <form className="flex justify-center items-center mb-5" onSubmit={onSubmit}>
                    <input className="w-1/2 rounded-md rounded-r-none p-3 shadow-lg shadow-cyan-300/60" type="text" aria-labelledby="searchbutton" value={searchTerm} onChange={handleChange} />
                    <button className="bg-indigo-900 text-white px-6 text-lg font-semibold py-3 rounded-r-md shadow-lg shadow-pink-300/60 hover:scale-105" id="searchbutton" type="submit">Search</button>
                </form>
                <main className="grid xl:grid-cols-4 lg:grid-cols-3">
                    {gameResults === [] ? <section className="text-xl justify"><p>Loading...</p></section> : gameResults.map((game) => {
                        return <section>
                            <Link to={`/details/${game.id}`}>
                                <CardList
                                    key={game.id}
                                    game={game} />
                            </Link>
                        </section>
                    })}
                </main>
            </section>
        )
    }
    return (
        <section className="flex-grow">
            <form className="flex justify-center items-center mb-5" onSubmit={onSubmit}>
                <input className="w-1/2 rounded-md rounded-r-none p-3 shadow-lg shadow-lime-400/75" type="text" aria-label="Search" aria-labelledby="searchbutton" value={searchTerm} onChange={handleChange} />
                <button className="bg-indigo-800 text-white px-5 text-lg font-semibold py-2 rounded-r-md shadow-lg shadow-cyan-300/75 hover:scale-110 outline outline-offset-2 outline-1" id="searchbutton" type="submit">Search</button>
            </form>
            <main className="grid 4xl:grid-cols-6 3xl:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {data === null ? <p className="text-2xl">Loading...</p> : data.map((game) => {
                    return <section>
                        <Link to={`/details/${game.id}`}>
                            <CardList
                                key={game.id}
                                game={game} />
                        </Link>
                    </section>
                })}
            </main>
        </section>
    )
}
