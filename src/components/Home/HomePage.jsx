import React from "react";
import FeaturedNews from "./FeaturedNews";
import OtherNews from "./OtherNews";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="main-content">
      <div className="container">
        <FeaturedNews />
        <OtherNews />
      </div>
    </section>
  )
}

export default HomePage;