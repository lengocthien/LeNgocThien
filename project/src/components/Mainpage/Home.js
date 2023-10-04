import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

import ShopCart from "../shops/ShopCart"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
          
        </div>
      </section>
    </>
  )
}

export default Home
