import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='bg-purple-800 '>

    
      <div className='flex justify-between items-center px-[20px] py-[10px] md:px-[50px] md:py-[20px]'>

      <div className=' '>
          <h1><span className='text-xs md:text-2xl font-bold text-purple-100'>DADTradeX</span></h1>
      </div>

      

      <div className='flex gap-[20px]'>
        <NavLink to='/login'>
        <button  className='bg-transparent border border-gray-400 rounded-lg text-white px-2 py-[2px] md:px-4 md:py-[5px]  font-semibold hover:bg-purple-100 hover:text-black'>Login</button>
        </NavLink>
        <NavLink to='/register'>
        <button  className='bg-purple-500 text-white px-2 py-[2px] md:px-4 md:py-[5px] rounded-lg font-semibold hover:bg-purple-100 hover:text-black'>Sign Up</button>
        </NavLink>

      </div>

      </div>

    </div>
  )
}

export default Navbar