import React from 'react'
import { CiStar } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import profilePic from '../assets/profilePic.png'


const TopNav = ({userName, userEmail}) => {








  return (
    <div className=' w-full px-[20px] py-[15px] flex justify-between bg-white fixed'>

      

      <div>
        <div className='flex items-center gap-[10px] ml-[80px] w-[150px] md:w-[400px] border border-gray-300 px-[15px] py-[8px] rounded-full md:ml-[200px] lg:ml-[500px]'>
            <CiSearch  className='text-xl'/>
            <input type="text" placeholder='search for news, symbols or companies' className='bg-transparent w-full outline-none ' />
        </div>
      </div>

      <div className='flex gap-[8px] ml-[10px] md:gap-[30px] items-center cursor-pointer'>
        <CiStar className='text-xl'/>
        <CiBellOn className='text-xl'/>
        
        <div className='flex gap-[5px] items-center cursor-pointer'>
            <img src={profilePic} alt=""  className='w-[45px] rounded-full'/>
            <div>
                <h1 className='font-semibold hidden md:block md:text-xm'>{userName}</h1>
                <p className='text-gray-400 hidden md:block md:text-xs'>{userEmail}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default TopNav