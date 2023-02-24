import React from "react";
import './header.css'

export default function Header() {
    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/game-shrimp.png`} alt="shrimp logo"/>
        </header>
    )
}