import React from "react";
import './CardLayout.css'
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";


export default function CardLayout({ data, query, setQuery }) {

    return (
        <div>
            <form className="search">
                <input
                    // value={'query'}
                    placeholder="search"
                    onChange={fetch(`https://api.rawg.io/api/games?key=32de51e296df41328d00a906b8ce6b29&search=${query}`)}
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