import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Auth.css";

const Login = () => {

    const { login, setLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="log-container flex-column jstfy-ctnt-center align-itm-center">
            <div className="login-container">
                <h2 className="login-heading text-align">Login</h2>
                <section className="flex-column">
                    <label htmlFor="/">Email address</label>
                    <input className="mail-input" type="email" placeholder="abc@gmail.com" defaultValue={value ? "adarshbalika@gmail.com" : ""} />
                    <label htmlFor="/">Password</label>
                    <section className="relative">
                        <input className="pass-input" type={showPassword ? "text" : "password"} placeholder="*************" defaultValue={value ? "123@adarsh" : ""} />
                        {
                            showPassword ? <img onClick={() => { setShowPassword(showPassword ? false : true) }} className="eye-style absolute" src="./Assest/eye-on.svg" alt="show password" /> : <img onClick={() => { setShowPassword(showPassword ? false : true) }} className="eye-style absolute" src="./Assest/eye-off.svg" alt="show password" />

                        }
                    </section>
                </section>
                <section className="flex jstfy-ctnt-spc-between">
                    <label htmlFor="/">
                        <input className="checkbox-inpt" type="checkbox" />
                        Remember me</label>
                    <Link to="/Forget" className="color forget-pass-link">Forget Password?</Link>
                </section>
                <button className="w-100 mt-8 ptb-8" onClick={() => {
                    setLogin(value ? !login : "");
                    navigate(location.state.from.pathname);
                }}>Login</button><br />

                <button onClick={() => setValue(true)} className="w-100 mtb-16 ptb-8">
                    Login as a Guest
                </button>
                <Link className="color block text-align f-size-16" to="/signup">Create New Account</Link>
            </div>
        </div>
    )
}

export { Login }  