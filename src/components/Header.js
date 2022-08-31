import React from "react";
import ProjectLogo from "../images/project-logo.png";
import MainNavigationBar from "./MainNavigationBar";
import ContentNavigationBar from "./ContentNavigationBar";

const Header = () => {
    return (
        <header>
            <div>
                <img src={ProjectLogo} alt="project logo" />
                <input 
                    type="text" 
                    placeholder="Search for the verified news..." 
                />

                <MainNavigationBar />
                <ContentNavigationBar />
            </div>
        </header>
    );
}

export default Header;