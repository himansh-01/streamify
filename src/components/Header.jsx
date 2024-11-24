import React from 'react'

function Header(props) {
  return (
    <>
    <div className='w-[100%] flex justify-between pl-10 pr-10 pt-5 pb-5 z-2 shadow-2xl fixed z-40 bg-[#6c34af] rounded-3xl'>
        <div className='text-2xl font-bold'>Streamify</div>
        <div>{props.name}</div>
    </div>
    </>
  )
}

export default Header