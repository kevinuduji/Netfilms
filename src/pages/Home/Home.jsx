import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import theboys_banner from '../../assets/theboys_banner.jpg'
import theboys_logo from '../../assets/theboys_logo.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjlhMTRlZjEwNTFiOGYzYjNlNWI0YTY5NjA3Y2FlZSIsIm5iZiI6MTcyMjc3MTU4OS4xMTAyLCJzdWIiOiI2NmFmNjdhZWFmNzhjNmMwZjZjMzdhM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9LJl2wj9Xlu4o4rhihigY6JOQfAJYu2ObvBZ7O81GJk'
    }
  };
  
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/trending/all/day"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  }, [])

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={theboys_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={theboys_logo} alt="" className='caption-img'/>
          <p>"The Boys" is a darkly comedic superhero series where corrupt "Supes" are controlled by a powerful corporation. A vigilante group, The Boys, aims to expose and take down these morally compromised heroes.</p>
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