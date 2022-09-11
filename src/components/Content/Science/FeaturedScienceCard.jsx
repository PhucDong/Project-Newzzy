import React from "react";
import { Link } from "react-router-dom";
import "../../Home/FeaturedNewsCard.css";

const FeaturedScienceCard = ({ item }) => {
  return (
    <div className='box'>
      <div className='img'>
        <img src={item.cover} alt='' />
      </div>

      <div className='text'>
        <span className='category'>{item.category}</span>

        <Link to={`/Content/${item.id}`}>
          <h1 className='titleBg'>{item.title}</h1>
        </Link>
        
        <div className='author flex'>
          <span>by {item.authorName}</span>
          <span>{item.time}</span>
          <span>Comments: {item.comments}</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedScienceCard;