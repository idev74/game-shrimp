import { useParams } from "react-router-dom";
import React from 'react';

export default function CardDetails({ data }) {
    const { id } = useParams()

    const game = data.results.filter((game) => {
        // eslint-disable-next-line eqeqeq
        return game.id == id
    })[0]

    const genreNames = game.genres.map((genre) => {
        return genre.name
      }).join(', ')

    const platformNames = game.platforms.map((platform) => {
        return platform.platform.name
    }).join(', ')
    
    return (
        <section className="CardDetails">
            {game === null ? "loading..." :
                (<div>
                    <p className="title">{game.name} Details</p>
                    <img src={game.background_image} alt="game" />
                    <p className="description">{game.description_raw}</p>
                    <p className="released"><strong>Released: </strong>{game.released}</p>
                    <p className="rating"><strong>Rating: </strong>{game.rating}</p>
                    <p className="genres"><strong>Genres: </strong>{genreNames}</p>
                    <p className="platforms"><strong>Platforms: </strong>{platformNames}</p>
                </div>)}
        </section>
    )
};
