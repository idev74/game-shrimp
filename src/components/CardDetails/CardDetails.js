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
        <section className="">
            {game === null ? "loading..." :
                (<main className="text-white flex flex-col justify-center align-center m-10 max-w-[2000px] text-center">
                    <p className="4xl:text-5xl 3xl:text-5xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-2xl m-5">{game.name} Details</p>
                    <img className="rounded shadow-lg shadow-cyan-300/75 outline-double outline-3 outline-offset-2" src={game.background_image} alt={game.name} />
                    <section className="my-7 text-xl">
                        <p className="released"><strong>Released: </strong>{game.released}</p>
                        <p className="rating"><strong>Rating: </strong>{game.rating}</p>
                        <p className="genres"><strong>Genres: </strong>{genreNames}</p>
                        <p className="platforms"><strong>Platforms: </strong>{platformNames}</p>
                    </section>
                </main>)}
        </section>
    )
};
