import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { MdDelete } from "react-icons/md";
import { deleteUser } from '../store/Reducer';
import { ServiceData } from '../Card';

function Watch() {

    const [currentMovieDetail, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
        window.scrollTo(0,0)
    }, [])

    // useEffect(() =>{
    //     fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    //     .then(res => res.json())
    //     .then(data => setRecommendMovies(data.results))
    //   },[])

    // const [recommendMovies, setRecommendMovies] = useState([])

    const comment = useSelector((state) => state.comment)
    const dispatch = useDispatch()
    
    const handleDelete = (id) => {
      dispatch(deleteUser({id: id}))
  }


  return (
    <>
    <Header name=""/>
    <div className="flex" style={{ height: "92.5vh" }}>
      <div className="flex gap-y-10 gap-x-5 p-7 mr-0 mt-12">
        <div style={{ maxWidth: "1000px" }}>
          <div className='border border-white'>
            <img
              className='h-[550px] w-[100%]'
              src={`https://image.tmdb.org/t/p/original/${currentMovieDetail?currentMovieDetail.poster_path:""}`}
            ></img>
          </div>
          <div className="movie__detailRightTop bg-[#6C34AF] mt-8 rounded-xl p-8 pt-2 mb-4">
                <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                <div className="movie__detailRightBottom">
                    <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                </div>
          </div>
          <div className='p-4 bg-[#6C34AF] rounded-xl'>
            <h1 className='text-2xl'>Comments</h1>
            <input type='comment' placeholder='Add comment' className='bg-transparent focus:outline-none'></input>
            <div className='border border-white w-full mt-1'></div>
            <div>{comment.map((com) =>
              <div key={com.id}>
                <div className='flex justify-between'>
                  <h1>{com.person}</h1>
                  <MdDelete onClick={handleDelete} />
                </div>
                <p>{com.message}</p>
              </div>
            )}</div>
          </div>
        </div>
      </div>
      <div className='mt-[4.5rem] mr-[1rem] bg-[#6C34AF] w-[40%] h-[160vh] pl-8 pt-4'>
        <h1 className='text-2xl font-bold mb-4'>Recommended</h1>
        <div className='flex flex-col gap-4'>{ServiceData.map((img) =>  
            <div className='border border-black bg-cover bg-no-repeat h-[10rem] w-[15rem]' key={img.title} style={{backgroundImage: `URL(${img.backgroundImage})`}}>
            </div>
        )}</div>
      </div>
    </div>
    </>
  )
}

export default Watch
