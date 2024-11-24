import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

function Page() {

  const [popularmovies, setPopularmovies] = useState([])
  const [upcomingmovies, setUpcomingmovies] = useState([])
  const [toprated, setToprated] = useState([])

  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setUpcomingmovies(data.results))
  },[])

  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setPopularmovies(data.results))
  },[])

  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setToprated(data.results))
  },[])

  const [data, setData] = useState('')

  const handleIn = (event) => {
    const search = event.target.value
    setData(search)
  }
  
  return (
    <div>
      <Header name = {<input className='rounded-2xl w-[10rem] pl-2 pr-2 text-lg text-black' type='text' placeholder='Search' name='search' value={data} onChange={handleIn}></input>} />
      <Slider name = {<button className='border border-white bg-white w-[4rem] rounded-xl'>Play</button>} />
      <Container name="Popular Movies" movies={popularmovies}/>
      <Container name="Upcoming Movies" movies={upcomingmovies} />
      <Container name="Top Rated" movies={toprated} />
      <Container name="Trending" movies={popularmovies}/>
      <Container name="Famous in India" movies={toprated} />
      <Container name="Best of Hollywood" movies={upcomingmovies} />
      <Footer/>
    </div>
  )
}

export default Page
