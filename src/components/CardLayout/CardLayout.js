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
                <form className="flex justify-center items-center" onSubmit={onSubmit}>
                    <input className="w-1/2 rounded-md rounded-r-none p-3" type="text" value={searchTerm} onChange={handleChange} />
                    <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-3 rounded-r-md" type="submit">Search</button>
                </form>
                <section className="grid xl:grid-cols-4 lg:grid-cols-3">
                    {gameResults === [] ? "loading..." : gameResults.map((game) => {
                        return <section>
                            <Link to={`/details/${game.id}`}>
                                <CardList
                                    key={game.id}
                                    game={game} />
                            </Link>
                        </section>
                    })}
                </section>
            </section>
        )
    }
    return (
        <section className="flex-grow">
            <form className="flex justify-center items-center" onSubmit={onSubmit}>
                <input className="w-1/2 rounded-md rounded-r-none p-3" type="text" value={searchTerm} onChange={handleChange} />
                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-3 rounded-r-md" type="submit">Search</button>
            </form>
            <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {data === null ? "loading..." : data.results.map((game) => {
                    return <section className="">
                        <Link to={`/details/${game.id}`}>
                            <CardList
                                key={game.id}
                                game={game} />
                        </Link>
                    </section>
                })}
            </section>
        </section>
    )
}
