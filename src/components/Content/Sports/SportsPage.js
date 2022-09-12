import React from 'react';
import FeaturedScience from "./FeaturedSports";
import OtherScience from "./OtherScience";
import Advertisement from "../../Advertisement/Advertisement";

const SciencePage = () => {
    return (
        <>
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