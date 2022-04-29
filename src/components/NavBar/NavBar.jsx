import React from "react";


import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navigaton-bar flex jstfy-ctnt-spc-between f-size-24 plr-64">
            <Link to="/" className="link">
                <h2 className="nav-header">neoQuiz</h2>
            </Link>
            <section className="auth-section flex-center">
                <Link to="/rule">
                    <button className="rules-btn p-8">Rules</button>
                </Link>
                <Link to="/">
                    <button className="auth-btn p-8"> Signup</button>
                </Link>
            </section>
        </nav>
    )
}

export default NavBar