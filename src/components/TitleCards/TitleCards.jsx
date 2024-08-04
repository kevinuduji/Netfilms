import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category, medium}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjlhMTRlZjEwNTFiOGYzYjNlNWI0YTY5NjA3Y2FlZSIsIm5iZiI6MTcyMjc3MTU4OS4xMTAyLCJzdWIiOiI2NmFmNjdhZWFmNzhjNmMwZjZjMzdhM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9LJl2wj9Xlu4o4rhihigY6JOQfAJYu2ObvBZ7O81GJk'
    }
  };
  
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

  fetch(`https://api.themoviedb.org/3/${medium?medium:'trending'}/${category?category:"all/day"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [])

  return (
    <div className='title-cards'>
        <h2>{title?title:"Trending on Netfilms"}</h2>
        <div className="card-list" ref={cardsRef}>
            {
                apiData.map((card, index) => {
                    return (
                        <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
                            <p>{medium==='tv'?card.name:card.title}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TitleCards