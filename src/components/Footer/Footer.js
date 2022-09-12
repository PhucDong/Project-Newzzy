import React from 'react';
import {Link} from "react-router-dom";
import {BsTwitter, BsFacebook, BsLinkedin} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__top">
                <Link to="/">Home</Link>
                <ul className="footer__category">
                    <li>
                        <Link to="/science">Science</Link>
                    </li>
                    <li>
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                        <Link to="/sports">Sports</Link>
                    </li>
                </ul>

                <div className="footer__contact">
                    <div className="footer__hotline">
                        <h3>Contact Us</h3>
                        <p>Hotline: (+84) 083.675.1235</p>
                    </div>
                    <div className="footer__social-media">
                        <h3>Follow Us</h3>
                        <BsFacebook />
                        <BsLinkedin />
                        <BsTwitter />
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; 2022 Newzzy. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;