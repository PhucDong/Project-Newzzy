import React from "react";
import "../../Home/OtherNews.css";
import Heading from "../../Heading/Heading";
import { otherScience } from "../../../dataScience";


const OtherNews = () => {
  return (
    <section className='othernews'>
      <Heading title='Other News' />
        <div className='content'>
          {otherScience.map((item) => {
            return (
              <div key={item.id} className='items'>
                <div className='box shadow item__container'>
                  <div className='images'>
                    <div className='img'>
                      <img src={item.cover} alt={item.title} />
                    </div>
                    <div className='category category1'>
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className='text'>
                    <h1 className='title'>{item.title}...</h1>
                    <div className='date'>
                      <label>{item.date}</label>
                    </div>
                    <p className='desc'>{item.desc}...</p>

                    <div className='comment'>
                      <span>by {item.authorName}</span>
                      <span> Comment:</span>
                      <label>{item.comments}</label>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default OtherNews;