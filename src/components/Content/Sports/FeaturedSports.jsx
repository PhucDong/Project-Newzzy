import React from "react";
import {featuredSports} from "../../../dataSports";
import Heading from "../../Heading/Heading";
import "../../Home/FeaturedNews.css";
import FeaturedSportsCard from "./FeaturedSportsCard";

const FeaturedSports = () => {
  return (
    <section className='featured-news'>
      <Heading title='Featured News' />
        
      <div className='featured-news__card-container'>
        {featuredSports.map((item) => {
          return (
            <FeaturedSportsCard key={item.id} item={item} />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedSports;