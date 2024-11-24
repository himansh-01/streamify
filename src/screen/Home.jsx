import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import Login from '../components/Login'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div>
        <Header name = {<Link to="/signup" element={<Login />}><button className='border rounded-2xl pl-2 pr-2 text-lg w-20'>Sign In</button></Link>}/>
        <Slider />
        <Hero name="Our streaming website has been leading the rankings for months, thanks to its sleek user interface, seamless performance, and responsive design. By prioritizing user experience and implementing cutting-edge web technologies, we've created a platform that stands out in a competitive market. It's fast, intuitive, and designed with users in mind—earning us the top spot consistently." img="https://img.freepik.com/free-vector/first-prize-ribbon-award-vector_53876-66648.jpg?ga=GA1.1.166255932.1719310287&semt=ais_hybrid" name2="Our video streaming platform supports HD resolutions up to 2K for a crisp and immersive viewing experience. Users can seamlessly toggle between resolutions (e.g., 720p, 1080p, and 2K) based on their preference or internet speed. With adaptive streaming, the video quality adjusts automatically to ensure smooth playback without interruptions." img2="https://img.freepik.com/free-vector/2k-quad-1080-full-hd-screen-resolution-pixel-tag-icon_1017-54562.jpg?t=st=1732397756~exp=1732401356~hmac=6e6391d1e7b9d47de7a3bb2f53f343df9b7e221ad68d3c99d2f7adce055165e0&w=900" />
    </div>
  )
}

export default Home