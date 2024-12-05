import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { Navigation, Mousewheel, Keyboard} from 'swiper/modules'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

function Container(props) {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 1500)
  }, []) 

  return (
    <div className='w-[100%] p-4 h-auto z-10'>
      <h1 className=' text-3xl font-bold mb-8'>{props.name}</h1>
      <Swiper
         breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 6,
            spaceBetween: 15
          },
           1000: {
             slidesPerView: 7,
             spaceBetween: 15
           }
        }}
        cssMode={true}
        navigation={true}
        modules={[Mousewheel,Keyboard, Navigation]}
       className='flex gap-4 flex-wrap items-center h-[20rem]'>{props.movies.map((img)  =>(
        isLoading
        ?
        <div className="inline-block relative rounded-[0.625rem] overflow-hidden m-[0.19rem] cursor-pointer card">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} count={3}/>
            </SkeletonTheme>
        </div>
        :
          <SwiperSlide className='w-[15%] h-[18.75rem] inline-block relative m-[0.19rem] cursor-pointer card' key={img.id}>
             <Link to={`/movie/${img.id}`} style={{textDecoration:"none", color:"white"}}>
            <img className="h-[95%] w-[100%]" src={`https://image.tmdb.org/t/p/original${img?img.poster_path:""}`} />
                <div className="absolute pt-0 pl-4 pr-4 pb-4 bottom-0 h-[290px] flex flex-col w-[85%] justify-end card_overlay text-white">
                    <div className="font-[900] text-lg mb-[0.4rem]">{img?img.original_title:""}</div>
                    <div className="text-[0.75rem] mb-[0.25rem]">
                        {img?img.release_date:""}
                        <span className="float-right">{img?img.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="text-[0.75rem] mb-[0.25rem]">{img ? img.overview.slice(0,118)+"..." : ""}</div>
                </div>
               </Link>
        </SwiperSlide> 
))}
      </Swiper>

    </div>
  )
}

export default Container
