import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { RiBarChart2Line } from "react-icons/ri";
import { RiExchange2Line } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from '../contexts/AuthContext';
const Sidebar = () => {

    


  return (
    <div className=' w-72 min-h-screen flex flex-col justify-between px-[10px] py-[15px] fixed top-0 left-0 bg-purple-50' style={{zIndex:'1000'}}>

      <div className=' '>
          <h1><span className='text-xs md:text-xl font-bold text-purple-800'>DADTradeX</span></h1>
      </div>
        <div >
            <p className='ml-[20px] text-xs opacity-40 font-semibold'>MAIN MENU</p>
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[15px]'>
                
                
                <NavLink to='/dashboard' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RxDashboard className='text-lg '/>
                <p>Dashboard</p> 
                </NavLink>
            </div>
            
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px] '>
                <NavLink to='/market' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RiBarChart2Line className='text-lg'/>
                <p>Market</p> 
                </NavLink>
            </div>
            
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px] '>
                <NavLink to='/exchange' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RiExchange2Line className='text-lg'/>
                <p>Exchange</p> 
                </NavLink>
            </div>
            
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px] '>
                <NavLink to='/blog' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <HiOutlineNewspaper className='text-lg'/>
                <p>Blog & News</p> 
                </NavLink>
            </div>
            

        </div>


        <div>
            <p className='ml-[20px] text-xs opacity-40 font-semibold'>OTHERS</p>
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  cursor-pointer flex gap-[15px] items-center'>
                <RiUserSettingsLine className='text-lg'/>
                <p>Settings</p>
            </div>

            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  cursor-pointer flex gap-[15px] items-center'>
                <BiSupport className='text-lg'/>
                <p>Support</p>
            </div>
            
        </div>
        
        <div >
            <hr />
            <div  className=' py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px] flex gap-[15px] items-center cursor-pointer'>
            <IoIosLogOut className='text-lg'/>
            <p>Logout</p>
            </div>
            
        </div>

        
      </div>

    
  )
}

export default Sidebar