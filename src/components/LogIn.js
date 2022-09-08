import React from 'react';
import "./SignUp.css";
import "./LogIn.css";

const LogIn = () => {
  return (
    <>
        <div className="signUpForm">
            <h2>LOG IN</h2>
            <input 
                type="text"
                placeholder="Enter your username or email"
            />
            <input 
                type="password"
                placeholder="Enter your password"
                autocomplete="on"
                maxlength="8"
            />
            <button>Log In</button>
            
            <p>
                <a href="#">Forgot your password?</a>
            </p>
        </div>
    </>
  )
}

export default LogIn