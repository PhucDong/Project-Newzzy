import React from 'react';
import {Link} from "react-router-dom";
import "../SignUp/SignUp.css";
import "./SuccessfulLogin.css";

const SuccessfulLogin = () => {
  return (
    <div className="signUpForm successful-login">
        <h2>Your registration is successful</h2>
        <p>We wish you have the best experience of finding the news you need</p>
        <Link to="/">
            Return to Newzzy
        </Link>
    </div>
  )
}

export default SuccessfulLogin;