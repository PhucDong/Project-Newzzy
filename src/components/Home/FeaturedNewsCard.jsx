import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./FeaturedNewsCard.css";

const FeaturedNewsCard = ({ item }) => {
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

        {/* <Link to={`/Content/${item.id}`}> */}
          <h1 className='titleBg'>{item.title}</h1>
        {/* </Link> */}
        
        <div className='author flex'>
          <span>by {item.authorName}</span>
          <span>{item.time}</span>
          <span>Comments: {item.comments}</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNewsCard;