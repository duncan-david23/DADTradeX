import React from 'react'
import TSsizeImage from '../assets/TradeImageUi2SmallSize.jpg';

const Section4 = () => {
  return (
    <div className='bg-purple-50 py-[50px]'>
        <div className='mt-[30px] '>
            <h1 className='text-2xl text-center md:text-5xl font-bold w-[360px] md:w-[800px] ml-[15px] md:ml-[100px]'>Find the most suitable stock for you to buy now</h1>
        </div>
        <div className='mt-[30px] ml-[15px] md:ml-[100px]'>
            <img src={TSsizeImage} alt="" className='w-[320px] md:w-[820px]' />
        </div>
    </div>
  )
}

export default Section4