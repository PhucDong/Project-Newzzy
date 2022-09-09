import React from 'react';
import Header from "./Header";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
        <Header />
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
                autocomplete="on"
                maxlength="8"
            />
            <input 
                type="password"
                placeholder="Confirm your password"
                autocomplete="on"
                maxlength="8"
            />
            <button>Sign Up</button>
            
            <p>Already have an account? <a href="#">Log In</a></p>
        </div>
    </>
  )
}

export default SignUp;