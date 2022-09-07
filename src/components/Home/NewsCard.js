import React from 'react';
import FeaturedNews1 from "../../assets/featurednews1.jpg";
import "./NewsCard.css";

const NewsCard = () => {
  return (
    <div className="featured-news__news-card">
        <div className="featured-news__image-container">
            <img src={FeaturedNews1} alt="featured news 1" />
        </div>

        <div className="featured-news__body">
            <div className="featured-news__text-container">
                <h3>Martinez trains as Reds prepare for La Real</h3>
                <p>Find out who was in the group spotted training at Carrington ahead of our Group E opener.</p>

                <ul className="featured-news__footer">
                    <li>Leo Samanchez</li>
                    <li>15 comments</li>
                    <li>8 September 2022</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NewsCard;