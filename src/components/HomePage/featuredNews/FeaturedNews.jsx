import React, { useState } from "react"
import { featured } from "../../../data"
import Heading from "../../common/heading/Heading"
import "./FeaturedNews.css"
import Cards from "./Cards"

const FeaturedNews = () => {
  const [items, setItems] = useState(featured)

  return (
    <>
      <section className='featured'>
      <Heading title='Featured News' />
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Cards key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default FeaturedNews