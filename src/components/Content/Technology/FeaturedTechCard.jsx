import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Home/FeaturedNewsCard.css";

const FeaturedTechCard = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className='box'
      onClick={() => {
        navigate("/detailed-content")
      }}
    >
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

export default FeaturedTechCard;