import React from 'react'
import mobileAppImage from '../assets/tradingMobileapp.png';

const Section3 = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row justify-center items-center '>
          <div className='my-[15px] md:my-[30px] p-[20px] md:p-[50px]   '>
              <img src={mobileAppImage} alt="" className='w-[280px] h-[300px] md:w-[480px] md:h-[500px] rounded-2xl ' />
          </div>
          <div className='ml-[1px] md:ml-[-35px] mt-[-25px] md:mt-[20px] py-[50px] px-[20px] md:px-[50px] w-full md:w-1/2  '>
              <p className='py-[8px] w-full md:w-fit px-[5px] md:px-[30px] mb-[20px] text-center rounded-full font-semibold shadow-lg '>GET A LOT OF INVESTMENT EASY</p>
              <h1 className=' text-2xl md:text-3xl font-bold'>Trade Seamlessly on <span className='text-2xl md:text-3xl font-bold text-purple-700'>DADTradeX</span> Mobile App</h1>
              <h3 className='text-xm font-semibold my-[20px] md:my-[10px]'>Join the Future of Stock Trading with Just a Tap!</h3>
              <p className='text-xm md:text-base  md:px-[5px]'>Discover the power of stock trading right at your fingertips. With the DADTradeX app, you can easily buy and sell stocks in real time, access valuable market insights, and manage your investments on the go. Designed for both seasoned investors and beginners, DADTradeX offers a user-friendly interface, advanced trading tools, and secure transactions, ensuring you have everything you need to make informed decisions. Download the app today and take the first step towards financial empowerment!</p>
              <button className='py-[10px] px-[15px] mt-[15px] bg-purple-950 text-white hover:bg-purple-800 rounded-lg'>DOWNLOAD APP</button>
          </div>
      </div>

    </div>
  )
}

export default Section3