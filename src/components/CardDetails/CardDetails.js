import React from "react";
import './CardDetails.css'

export default function CardDetails(props) {
    props = props.location.state
    return (
        <section className="CardDetails">
            <img src={props.background_image} alt="game" />
            <p className="name">{props.name}</p>
            <p className="rating">Rating: {props.rating}</p>
        </section>
    )
};