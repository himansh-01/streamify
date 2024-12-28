import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirm_password:""
  })

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData((prev) =>{
      return { ...prev, [name] : value}
    })
  }

    const showErr = (e) => {
    if(formData.name == "" || formData.email == "" || formData.password == ""){
      e.preventDefault()
      alert("fill all the required fields")
    }
    else if(formData.password != formData.confirm_password ){
      e.preventDefault()
      alert("password do not match")
    }
  }

  return (
    <div className='w-[100%] h-screen flex items-center justify-center bg-[url(https://img.freepik.com/free-vector/cinema-time-background_23-2147593530.jpg?ga=GA1.1.166255932.1719310287&semt=ais_hybrid)]'>
        <div className=' rounded-xl w-[40%] h-[35rem] shadow-2xl pt-12 pb-12 pl-20 pr-20 bg-[#854CCA]'>
          <div className='flex justify-between items-center mb-12'>
          <h1 className='text-[3rem]'>Register</h1>
          </div>
        <div className='pl-8'>
          <label htmlFor="name" className='text-2xl mr-11'>Name</label>
          <input className='h-[2rem] text-xl rounded-2xl pl-4 pr-4 mb-4 focus:outline-none text-black' type='text' placeholder='Name' id='name' name='name' value={formData.name} onChange={handleInput} required></input><br/>
          <label htmlFor='email' className='text-2xl mr-12'>Email</label>
          <input className='h-[2rem] text-xl rounded-2xl pl-4 pr-4 mb-4 focus:outline-none text-black' type='text' placeholder='Email' id='email' name='email' value={formData.email} onChange={handleInput} required></input><br/>
          <label htmlFor='password' className='text-2xl mr-2'>Password</label>
          <input className='h-[2rem] text-xl rounded-2xl pl-4 pr-4 mb-4 focus:outline-none text-black' type='password' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleInput} required></input>
          <label htmlFor='password' className='text-2xl mr-5'>Confirm</label>
          <input className='h-[2rem] text-xl rounded-2xl pl-4 pr-4 mb-4 focus:outline-none text-black' type='password' placeholder='Confirm-password' id='confirm-password' name='confirm_password' value={formData.confirm_password} onChange={handleInput} required></input>
        </div>
      <div className='flex pl-8 justify-between w-[90%] items-center mt-8'>
        <Link to="/home" onClick={showErr}><button className='rounded-2xl px-2 bg-white h-[2rem] text-xl text-black'>Sign up</button></Link>
        <Link to="/"><button className='rounded-2xl px-2 bg-white h-[2rem] text-xl text-black'>Back</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Login
