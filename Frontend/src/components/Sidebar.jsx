import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { RiBarChart2Line } from "react-icons/ri";
import { RiExchange2Line } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from '../contexts/AuthContext';
import { dataContext } from '../contexts/OtherContexts';
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";





const Sidebar = () => {
    
    const {dataValues} = useContext(dataContext)
    const {activeMenu, setActiveMenu} = dataValues;
    
        

  return (
    <div className={`${activeMenu ? 'w-60':'w-30' } transition-all overflow-y-auto min-h-screen flex flex-col justify-between px-[10px] py-[15px] fixed top-0 left-0 bg-purple-50` } style={{zIndex:'1000'}}>
      <div className=' flex gap-[8px] items-center justify-between'>
        <Link to='/dashboard/1'>
          <h1><span className='text-xs md:text-xl font-bold text-purple-800 cursor-pointer'>{`${activeMenu ? 'DADTradeX' : 'DTX'}`}</span> </h1>
          </Link>
          {
            activeMenu ? 
            <div className=' p-[5px] cursor-pointer ' onClick={()=> setActiveMenu(!true)}>
            <RiArrowLeftDoubleLine className='text-xl ' />
            </div>

            : <div className=' p-[5px] cursor-pointer' onClick={()=> setActiveMenu(true)}> <RiArrowRightDoubleLine className='text-xl' /> </div>
          }
          
          
      </div>
        <div >
            <p className={`${activeMenu ? 'ml-[20px]' : 'ml-[10px]'}  text-xs opacity-40 font-semibold`}>MENU </p>
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[15px] '>
                
                <NavLink to='/dashboard/1' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RxDashboard className='text-lg '/>
                {activeMenu ? 
                <p>Dashboard</p>
                : '' 
                }
                </NavLink>

            </div>
            
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  '>
                <NavLink to='/market' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RiBarChart2Line className='text-lg'/>
                {activeMenu ? 
                <p>Market</p>
                : '' 
                }
                </NavLink>
            </div>
            
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  '>
                <NavLink to='/cryptocurrencies' className={({isActive})=> ` flex gap-[15px] items-center ${isActive ? 'activeBg': ''} `}>
                <RiExchange2Line className='text-lg'/>
                {activeMenu ? 
                <p>Cryptocurrencies</p>
                : '' 
                }
                </NavLink>
            </div>
            
            

        </div>


        <div>
            <p className={`${activeMenu ? 'ml-[20px]' : 'ml-[10px]'}  text-xs opacity-40 font-semibold`}>OTHERS</p>
            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  cursor-pointer flex gap-[15px] items-center '>
                <RiUserSettingsLine className='text-lg'/>
                {activeMenu ? 
                <p>Settings</p>
                : '' 
                }
            </div>

            <div className='py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px]  cursor-pointer flex gap-[15px] items-center '>
                <BiSupport className='text-lg'/>
                {activeMenu ? 
                <p>Support</p>
                : '' 
                }
            </div>
            
        </div>
        
        <div >
            <hr />
            <div  className=' py-[10px] px-[15px] font-semibold hover:text-purple-700 mt-[8px] flex gap-[15px] items-center cursor-pointer '>
            <IoIosLogOut className='text-lg'/>
            {activeMenu ? 
                <p>Logout</p>
                : '' 
                }
            </div>
            
        </div>

        
      </div>

    
  )
}

export default Sidebar