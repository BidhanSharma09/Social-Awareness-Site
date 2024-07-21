import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from '../../components/HeroSection'
import Article from '../../components/Article'
import ReviewBoard from '../../components/ReviewBoard'


const Home = () => {

  return (

    <div>

        <Navbar/>
        <HeroSection/>
        <Article/>
        <ReviewBoard/>
        <Footer/>

    </div>
  )
}

export default Home