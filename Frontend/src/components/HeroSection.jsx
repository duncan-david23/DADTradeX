import React from 'react'
import { Link } from 'react-router-dom'
import vectorAbImage from '../assets/vectorAbstractimage.png'

const HeroSection = () => {
  return (
    <div className="w-full h-[85vh] md:h-[50.2vh] lg:h-[80.2vh] bg-gradient-to-t from-purple-950 to-purple-800 pt-[50px] px-[130px]">
        <div className='flex h-[50vh] justify-center items-center '>
            <div>
                <h1 className='text-2xl md:text-5xl text-purple-100 font-semibold text-center pt-[10px] md:pt-[50px]'>Easily invest in stocks and crypto in one <span className='text-cyan-200'>DADTradeX </span>platform </h1>
                <p className='text-xs md:text-base text-center text-purple-300 pt-[10px] md:pt-[30px] px-[10px] md:px-[200px]'>Get all conveniences of investing in stocks or cryptocurrencies in one DADTradeX platform. Join the millions of traders and investors making millions of dollars each day. </p>
                
            <div className='flex flex-col md:flex-row gap-[20px] pt-[40px] items-center justify-center text-center'>
            <Link to='/register'><button className='text-xm md:text-base py-[10px] w-[300px] md:w-[200px] px-[50px] md:py-[12px] md:px-[15px] border border-gray-200 rounded-full text-white font-semibold hover:bg-purple-100 hover:text-black'>Get Started</button></Link>
             <button className='text-xm md:text-base py-[10px] w-[300px] md:w-[200px] px-[50px] md:py-[12px] md:px-[15px] bg-purple-100 rounded-full text-black font-semibold hover:bg-purple-300 '>Get App Now</button> 
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection