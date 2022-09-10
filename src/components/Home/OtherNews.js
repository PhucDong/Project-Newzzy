import React from 'react';
import OtherNewsCard from './OtherNewsCard';
import "./OtherNews.css";

const OtherNews = () => {
  return (
    <section className="other-news">
        <div className="container">
            <div className="other-news__container">
                <h2>Other News</h2>

                <div className="other-news-cards">
                    <OtherNewsCard />
                    <OtherNewsCard />
                    <OtherNewsCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OtherNews;