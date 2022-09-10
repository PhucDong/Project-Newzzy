import React from 'react';
import OtherNews1 from "../../assets/othernews1.jpg";
import "./OtherNewsCard.css";

const OtherNewsCard = () => {
  return (
    <div className="other-news-card">
        <div className="other-news-card__image-container">
            <img src={OtherNews1} alt="other news 1" />
        </div>

        <div className="other-news-card__body">
            <div className="other-news-card__text-container">
                <h3>Oracle partners with Microsoft to launch database service for Azure</h3>
                <p>Oracle Database Service for Azure gives Microsoft Azure customers direct access to Oracle databases residing in Oracle Cloud Infrastructure.</p>

                <ul className="other-news__footer">
                    <li>Andrew Colbert</li>
                    <li>10 comments</li>
                    <li>6 September 2022</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OtherNewsCard;