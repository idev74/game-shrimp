import React from "react";
import './CardLayout.css'
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";


// const apiURL = process.env.REACT_APP_API_URL
// const apiKey = process.env.REACT_APP_API_KEY

export default function CardLayout() {
    return(
        // <Link to={`/details/${CardList.game.id}`}>
            <section className="CardLayout" alt="temp">
            <CardList/>
        </section>
        // </Link>
    )
}