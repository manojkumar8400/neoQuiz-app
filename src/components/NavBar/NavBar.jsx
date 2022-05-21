import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

const NavBar = () => {

    const { login } = useAuth();
    const { theme, setTheme } = useTheme();

    return (
        <nav className="navigaton-bar flex jstfy-ctnt-spc-between f-size-24 plr-64">
            <Link to="/" className="link">
                <h2 className="nav-header">neoQuiz</h2>
            </Link>
            <section className="auth-section flex-center">
                <button onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }} className="rules-btn themeBtn p-8">
                    {theme === 'light' ? <img className="theme-mode moon-logo" src="./Assest/moon.webp" alt="night mode" /> : <img className="theme-mode sun-logo" src="./Assest/sunny.svg" alt="night mode" />}
                </button>
                <Link to="/login">
                    <button className="auth-btn p-8"> {login ? "Logout" : "Login"}</button>
                </Link>
            </section>
        </nav>
    )
}

export { NavBar }