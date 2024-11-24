import React from 'react'

function Hero(props) {
  return (
    <div className='w-[80%] p-8 grid justify-self-center shadow-2xl bg-[#6c34af] mb-4'>
        <div className='flex flex-wrap'>
           <div className='w-[30%] flex'><img src={props.img} className='w-[15rem] h-[15rem]'/></div>
           <div className='w-[70%] text-xl self-center'>{props.name}</div>
        </div>
        <div className='flex'>
           <div className='w-[70%] text-xl self-center'>{props.name2}</div>
           <div className='w-[30%]'><img src={props.img2} className='w-[15rem] h-[15rem]'/></div>
        </div>   
    </div>
  )
}

export default Hero