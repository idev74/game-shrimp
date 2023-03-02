import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
           <Link to='/'>
            <img id="logo" src={`${process.env.PUBLIC_URL}/game-shrimp-fulls.png`} alt="shrimp with gaming headset" />
            </Link>
            <h2>A hub for information about popular games!</h2>
            <div className="nav">
            <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/">List</NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            to="/about">About</NavLink>
            </div>
        </header>
    )
}
