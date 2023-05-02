import React, { useState } from "react";
import './CardLayout.css'
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
                <div>
                <div className="search">
                <form className="search" onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <button type="submit">Search</button>
                </form>
                </div>
                
                <section  className="grid lg:grid-cols-3">
                
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
                </div>
                )
            }    
        return (
            <div>
            <div className="search">
                <form className="search" onSubmit={onSubmit}>
                    <input type="text" value={searchTerm} onChange={handleChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <section className="grid lg:grid-cols-3">
            {data === null ? "loading..." : data.results.map((game) => {
                return <section>
                        <Link to={`/details/${game.id}`}>
                            <CardList
                                key={game.id}
                                game={game} />
                        </Link>
                    </section>
                })}
            </section>
        </div>
        )
    }
