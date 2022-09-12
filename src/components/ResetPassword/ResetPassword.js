import React from 'react';
import "../SignUp/SignUp.css";

const ResetPassword = () => {
  return (
    <>
        <div className="signUpForm logInForm resetPasswordForm">
            <h2>RESET PASSWORD</h2>
            <p>Forgot your password? Enter your email address and we’ll send you a link to create a new one.</p>

            <input 
                type="email"
                placeholder="Enter your email"
            />
        
            <button>Reset Password</button>
        </div>
    </>
  )
}

export default ResetPassword;