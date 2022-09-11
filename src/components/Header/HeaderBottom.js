import React from "react";
import "./HeaderBottom.css";
import {Link} from "react-router-dom";

const HeaderBottom = () => {
    return (
        <div className="app__header-bottom">
            <nav className="app__header-bottom-navbar">
                <ul className="app__header-bottom-navbar-links">
                    {
                        ["Science", "Technology", "Sports"].map((item) => (
                            <li key={`link-${item}`}>
                                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default HeaderBottom;