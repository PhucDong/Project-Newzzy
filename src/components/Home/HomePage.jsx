import React from "react";
import FeaturedNews from "./FeaturedNews";
import OtherNews from "./OtherNews";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="main-content">
      <div className="container">
        <FeaturedNews />
        <OtherNews />
      </div>
    </main>
  )
}

export default HomePage;