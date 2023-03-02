import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CardDetails.css'

export default function CardDetails({ data }) {
    const { id } = useParams()
    const game = data.results.filter((game) => {
        return game.id == id
    })[0]
    console.log('Hi, im ', game)

    return (
        <section className="CardDetails">
            <p>Hi</p>
            {game === null ? "loading..." :
                (<div>
                    <img src={game.background_image} alt="game" />
                    <p className="name"><strong>ESRB Rating: </strong>{game.esrb_rating.id}</p>
                    <p className="rating">Rating: {game.genres.name}</p>
                </div>)}
        </section>
    )
};
