import React from 'react';
import Header from "../../Header/Header";
import Advertisement from "../../Advertisement/Advertisement";
import FeaturedScience from "./FeaturedSports";
import OtherScience from "./OtherScience";

const SciencePage = () => {
    return (
        <>
            <Header />
            <Advertisement />
            <section className="main-content">
                <div className="container">
                    <FeaturedScience />
                    <OtherScience />
                </div>
            </section>
        </>
    )
}

export default SciencePage;