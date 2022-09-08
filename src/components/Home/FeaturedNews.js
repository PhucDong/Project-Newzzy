import React from 'react';
import NewsCard from './NewsCard';
import "./FeaturedNews.css";

const FeaturedNews = () => {
  return (
    <section>
        <div className="container featured-news__container">
            <h2>Featured News</h2>

            <div className="featured-news__news-cards">
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </section>
  )
}

export default FeaturedNews;