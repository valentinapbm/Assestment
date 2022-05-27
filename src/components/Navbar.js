import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png"

const Navbar =()=>{
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"></img>
            <ul className="nav-links">
                <Link to="/" ><li>Home</li></Link>
                <Link to="/about" ><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;