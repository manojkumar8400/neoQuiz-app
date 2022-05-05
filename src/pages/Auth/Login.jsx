import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Auth.css";

const Login = () => {

    const { login, setLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(false);

    return (
        <div className="flex-column jstfy-ctnt-center align-itm-center">
            <div className="login-container">
                <h2 className="login-heading text-align">Login</h2>
                <section className="flex-column">
                    <label for="/">Email address</label>
                    <input className="mail-input" type="email" placeholder="abc@gmail.com" value={value ? "adarshbalika@gmail.com" : ""} />
                    <label for="/">Password</label>
                    <input className="pass-input" type="password" placeholder="*************" value={value ? "12345678" : ""} />
                </section>
                <section className="flex jstfy-ctnt-spc-between">
                    <label for="/">
                        <input className="checkbox-inpt" type="checkbox" />
                        Remember me</label>
                    <Link to="/Forget" className="color forget-pass-link">Forget Password?</Link>
                </section>
                <button className="w-100 mt-8 ptb-8" onClick={() => {
                    setLogin(value ? !login : "");
                    navigate(location.state.from.pathname);
                }}>Login</button><br />

                <button onClick={()=>setValue(true)} className="w-100 mtb-16 ptb-8">
                    Login as a Guest
                </button>
                <Link className="color block text-align f-size-16" to="/signup">Create New Account</Link>
            </div>
        </div>
    )
}

export default Login 