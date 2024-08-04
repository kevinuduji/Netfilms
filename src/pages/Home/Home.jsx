import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Former elite operative Jack Harper is back in action to stop a covert organization from unleashing global chaos. Racing against time, he must use his combat skills and wits to thwart an apocalyptic plot. Buckle up for a relentless, high-stakes thrill ride!</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>  
      </div>
      <div className="more-cards">
        <TitleCards title={"Most Popular Movies"} category={"popular"} medium={"movie"} />
        <TitleCards title={"Most Popular TV Series"} category={"airing_today"} medium={"tv"}/>
        <TitleCards title={"Only on Netfilms"} category={"top_rated"} medium={"movie"} />
        <TitleCards title={"Your Top Picks"} category={"popular"} medium={"tv"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"} medium={"movie"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home