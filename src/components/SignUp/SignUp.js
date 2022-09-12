import React from 'react';
import "./SignUp.css";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <>
        <div className="signUpForm">
            <h2>SIGN UP</h2>
            <input 
                type="text"
                placeholder="Enter your username"
            />
            <input 
                type="email"
                placeholder="Enter your email"
            />
            <input 
                type="password"
                placeholder="Enter your password"
                maxLength="8"
            />
            <input 
                type="password"
                placeholder="Confirm your password"
                maxlength="8"
            />
            <button>Sign Up</button>
            
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    </>
  )
}

export default SignUp;