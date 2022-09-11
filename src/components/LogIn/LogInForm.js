import React, {useState} from 'react';
import "../SignUp/SignUp.css";
import {Link} from "react-router-dom";

const LogInForm = ({Login, error}) => {
    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler} className="signUpForm logInForm">
            <h2>LOG IN</h2>

            {(error !== "") ? (<p className="logInForm__error">{error}</p>) : ""}
            
            <input 
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={e => setDetails({...details, email: e.target.value})}
                value={details.email}
            />
            <input 
                type="password"
                name="password"
                placeholder="Enter your password"
                maxLength="8"
                onChange={e => setDetails({...details, password: e.target.value})}
                value={details.password}
            />

            <input type="submit" value="Log In" />
                
            <p className="login-btn">
                <Link to="/resetpassword">Forgot your password?</Link>
            </p>
        </form>
    )
}

export default LogInForm;