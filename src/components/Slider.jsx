import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { Pagination, Mousewheel, Keyboard} from 'swiper/modules'
import { ServiceData } from '../Card'

function Slider(props) {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#854CCA] lg:pt-20'>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 15
          }
        }}

        cssMode={true}
        pagination={{
          clickable:true
        }}
        modules={[Mousewheel,Keyboard, Pagination]}

        className='max-w-[90%] lg:max-w-[80%]'
      >
        {ServiceData.map((item) => (
           <SwiperSlide key={item.title} className='2-[320px]'>
            <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[600px] overflow-hidden'>
              <div className='absolute inset-0 bg-cover bg bg-center' style={{backgroundImage: `url(${item.backgroundImage})`}} />
              <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-50' />
          
              <div className=' z-10 absolute bottom-10 left-10 flex justify-between w-[80%]'>
                <div className='relative flex flex-col gap-3'>
                  <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                  <p className='lg:text-[18px]'>{item.content}</p>
                </div>
                <div className='self-center'>{props.name}</div>
              </div>
            </div>
           </SwiperSlide>
        ))}
      </Swiper>  
    </div>
  )
}

export default Slider