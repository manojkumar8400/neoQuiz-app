import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {

    return (
        <>
            <form className="log-container grid-center">
                <div className="signup-container flex-column">
                    <h2 className="text-align">Signup</h2>
                    <label className="txt">Email address</label>
                    <input className="email-input input" type="email" placeholder="abc@gmail.com" />
                    <div className="flex gap-1">
                        <section>
                            <label className="txt">First name</label>
                            <input className="email-input input width" type="text" placeholder="Enter First Name" />
                        </section>
                        <section>
                            <label className="txt">Last name</label>
                            <input className="email-input input width" type="text" placeholder="Enter Last Name" />
                        </section>
                    </div>
                    <div className="flex gap-1">
                        <section>
                            <label className="txt">Password</label>
                            <input className="input width" type="password" placeholder="Enter Password" />
                        </section>
                        <section>
                            <label className="txt">Confirm Password</label>
                            <input className="input width" type="password" placeholder="Confirm Password" /><br />
                        </section>
                    </div>
                    <div>
                        <input className="checkbox-input" type="checkbox" />
                        <label className="txt">I accept all Terms & Conditions</label><br />
                    </div>
                    <button className="mtb-16 w-100 ptb-8">
                        Create New Account
                    </button>
                    <label className="text-align">Already a member?
                        <Link to="/login" className="color"><strong> Login</strong></Link>
                    </label>
                </div>
            </form>
        </>
    )
}

export { Signup }