import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Videobox from '../../components/Videobox/Videobox'
import "./Home.scss"
import { Slide } from '@mui/material'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Videobox/>
      {/* <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/> */}
      
    </div>
  )
}

export default Home