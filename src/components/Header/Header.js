import React from "react";
import './Header.css'

export default function Header() {
    return (
        <header>
            <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp with gaming headset" />
            <p>A hub for information about popular games.</p>
        </header>
    )
}
