import React from "react";
import { featuredHome } from "../../dataHome";
import Heading from "../Heading/Heading";
import "./FeaturedNews.css";
import FeaturedNewsCard from "./FeaturedNewsCard";
// import {Link} from "react-router-dom";

const FeaturedNews = () => {
  return (
    <section className='featured-news'>
      <Heading title='Featured News' />
        
      <div className='featured-news__card-container'>
        {featuredHome.map((item) => {
          return (
            // <Link to="/detailed-content">
              <FeaturedNewsCard key={item.id} item={item} />
            // </Link>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedNews;