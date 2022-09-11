import React from "react";
import {featuredScience} from "../../../dataScience";
import Heading from "../../Heading/Heading";
import "../../Home/FeaturedNews.css";
import FeaturedScienceCard from "./FeaturedScienceCard";

const FeaturedScience = () => {
  return (
    <section className='featured-news'>
      <Heading title='Featured News' />
        
      <div className='featured-news__card-container'>
        {featuredScience.map((item) => {
          return (
            <FeaturedScienceCard key={item.id} item={item} />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedScience;