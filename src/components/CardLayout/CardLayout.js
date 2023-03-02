import React from "react";
import './CardLayout.css'
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";


export default function CardLayout({ data, query, setQuery }) {

    return (
        <div>
            <form className="search">
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <section className="CardLayout">
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