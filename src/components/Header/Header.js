import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center">
            <Link to='/'>
                <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp with gaming headset" />
            </Link>
            <h2>A hub for information about popular games!</h2>
            <div className="nav">
                <NavLink
                    className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                    to="/">List</NavLink>
                <NavLink
                    className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                    to="/about">About</NavLink>
            </div>
        </header>
    )
}
