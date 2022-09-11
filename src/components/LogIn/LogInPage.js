import React, {useState} from "react";
import Header from "../Header/Header";
import LogInForm from "./LogInForm";
import SuccessfulLogin from "./SuccessfulLogin";

const LogInPage = () => {
    const adminUser = {
        email: "admin@gmail.com",
        password: "admin123"
    };
    
    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    
    const Login = details => {
        if (details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                email: details.email,
                password: details.password
            })
        } else {
            setError("Incorrect email or password");
        }
    }
    
    // const Logout = () => {
    //     console.log("Logout");
    // }

    return (
        <>
            <Header />
            <div className="container">
                {(user.email !== "" || user.password !== "") ? (
                    <SuccessfulLogin />
                ) : (
                    <LogInForm Login={Login} error={error} />
                )}
            </div>
        </>
    )
}

export default LogInPage;