import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './CardDetails.css'

export default function CardDetails({ data }) {
    const { id } = useParams()
    const apiURL = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY
    const genreURL = process.env.REACT_APP_GENRE_URL
    const platformURL = process.env.REACT_APP_PLATFORM_URL
    const storeURL = process.env.REACT_APP_STORE_URL
    const publisherURL = process.env.REACT_APP_PUBLISHER_URL
    const developerURL = process.env.REACT_APP_DEVELOPER_URL
    const tagURL = process.env.REACT_APP_TAG_URL


    const game = data.results.filter((game) => {
        return game.id == id
    })[0]

    Promise.all([
        fetch(`${apiURL}?key=${apiKey}`),

    ])

    // useEffect(() => {
    //     async function getStuff() {
    //       let res = await fetch(`${apiURL}/lists/main?key=${apiKey}`)
    //       let json = await res.json()
    //       setData(json)
    //     }
    //     getStuff()
    //   }, []);

    return (
        <section className="CardDetails">
            {game === null ? "loading..." :
                (<div>
                    <p className="title">{game.name} Details</p>
                    <img src={game.background_image} alt="game" />
                    <section className="CardDetails">
                        <a href="https://store.steampowered.com/">
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670382.png" alt="steam" />
                        </a>

                        <a href="https://www.playstation.com/en-us/">
                            <img src="https://cdn-icons-png.flaticon.com/512/1241/1241001.png" alt="ps" />
                        </a>

                        <a href="https://www.xbox.com/en-us/">
                            <img src="https://cdn-icons-png.flaticon.com/512/250/250562.png" alt="xbox" />
                        </a>
                    </section>
                </div>)}
        </section>
    )
};
