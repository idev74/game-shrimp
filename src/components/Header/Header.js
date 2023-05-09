import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center xl:scale-100 lg:scale-90 md:scale-75 sm:scale-75 xs:scale-75">
            <Link to='/'>
                <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp with gaming headset" />
            </Link>
            <h1 className="italic text-3xl text-white my-5 xs:text-2xl">A hub of information about games large & small!</h1>
        </header>

        
    )
}
