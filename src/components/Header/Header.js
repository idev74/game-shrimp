import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center">
            <Link to='/'>
                <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp with gaming headset" />
            </Link>
            <h1 className="italic text-3xl text-white my-5">A hub of information about games large and small!</h1>
        </header>

        
    )
}
