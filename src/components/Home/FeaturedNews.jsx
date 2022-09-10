import React from "react";
import { featured } from "../../data";
import Heading from "../Heading/Heading";
import "./FeaturedNews.css";
import FeaturedNewsCard from "./FeaturedNewsCard";

const FeaturedNews = () => {
  return (
    <section className='featured-news'>
      <Heading title='Featured News' />
        
      <div className='featured-news__card-container'>
        {featured.map((item) => {
          return (
            <FeaturedNewsCard key={item.id} item={item} />
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedNews;