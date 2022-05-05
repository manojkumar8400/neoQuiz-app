import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NavBar = () => {

    const { login } = useAuth();

    return (
        <nav className="navigaton-bar flex jstfy-ctnt-spc-between f-size-24 plr-64">
            <Link to="/" className="link">
                <h2 className="nav-header">neoQuiz</h2>
            </Link>
            <section className="auth-section flex-center">
                    <button className="rules-btn p-8">Rules</button>
                <Link to="/login">
                    <button className="auth-btn p-8"> {login ? "Logout" : "Login"}</button>
                </Link>
            </section>
        </nav>
    )
}

export default NavBar