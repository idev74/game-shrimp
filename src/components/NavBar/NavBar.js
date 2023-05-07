import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    let [stroke, setStroke] = React.useState("transparent");
    const nav = document.getElementById("nav");
    
    window.onscroll = function () {
        if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
            nav.classList.add("bg-yellow-400", "bg-opacity-90", "shadow-lg");
            nav.classList.remove("bg-transparent");
            setStroke("teal");
        } else {
            nav.classList.add("bg-transparent");
            nav.classList.remove("bg-yellow-400", "bg-opacity-90", "shadow-lg");
            setStroke("transparent");
        }
    };
    
    return (
        <section className="my-7 sticky top-0">
            <nav id="nav" className="flex flex-row p-3 mt-auto mb-auto justify-center">
                <NavLink
                    className="inline-block rounded py-2 px-4 bg-cyan-500 hover:bg-cyan-500 text-white outline-double outline-3 active:outline-offset-4 mx-5 shadow-lg shadow-cyan-300/75"
                    to="/">Home</NavLink>
                <NavLink
                    className="inline-block rounded py-2 px-4 bg-cyan-500 hover:bg-purple-700 text-white outline-double outline-3 active:outline-offset-4 mx-5 shadow-lg shadow-cyan-300/75"
                    to="/about">About</NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className="w-10 h-10 ml-auto mr-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                </svg>
            </nav>
        </section>
    )
}