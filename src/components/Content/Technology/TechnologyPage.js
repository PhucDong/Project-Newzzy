import React from 'react';
import FeaturedTechnology from "./FeaturedTechnology";
import OtherTechnology from "./OtherTechnology";
import Advertisement from "../../Advertisement/Advertisement";

const TechnologyPage = () => {
    return (
        <>
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