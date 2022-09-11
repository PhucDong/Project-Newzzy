import React from "react";
import {featuredTechnology} from "../../../dataTechnology";
import Heading from "../../Heading/Heading";
import "../../Home/FeaturedNews.css";
import FeaturedTechCard from "./FeaturedTechCard";

const FeaturedTechnology = () => {
  return (
    <section className='featured-news'>
      <Heading title='Featured News' />
        
      <div className='featured-news__card-container'>
        {featuredTechnology.map((item) => {
          return (
            <FeaturedTechCard key={item.id} item={item} />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedTechnology;