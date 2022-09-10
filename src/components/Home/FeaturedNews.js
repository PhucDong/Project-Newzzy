import React from 'react';
import FeaturedNewsCard from './FeaturedNewsCard';
import "./FeaturedNews.css";

const FeaturedNews = () => {
  return (
    <section className="featured-news">
        <div className="container featured-news__container">
            <h2>Featured News</h2>

            <div className="featured-news__news-cards">
                <FeaturedNewsCard />
                <FeaturedNewsCard />
            </div>
        </div>
    </section>
  )
}

export default FeaturedNews;