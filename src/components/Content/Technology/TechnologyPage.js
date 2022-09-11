import React from 'react';
import Header from "../../Header/Header";
import Advertisement from "../../Advertisement/Advertisement";
import FeaturedTechnology from "./FeaturedTechnology";
import OtherTechnology from "./OtherTechnology";

const TechnologyPage = () => {
    return (
        <>
            <Header />
            <Advertisement />
            <section className="main-content">
                <div className="container">
                    <FeaturedTechnology />
                    <OtherTechnology />
                </div>
            </section>
        </>
    )
}

export default TechnologyPage;