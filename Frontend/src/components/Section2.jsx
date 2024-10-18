import React from 'react'
import stockTrader_ui from '../assets/stocktraderUiDesign2.png'
import { images } from '../assets/data'

const Section2 = () => {
  return (
    <div className='bg-purple-50 '>
        <div className='flex justify-center '>
            <img src={stockTrader_ui} alt="" className='w-[350px] md:w-[850px] rounded-3xl mt-[-100px] md:mt-[-100px]' />
        </div>

        <div className='flex justify-between items-center gap-[10px] py-[30px] mt-[50px] px-[50px] md:mt-[50px] md:px-[100px]'>
              {images.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt="" className='w-[90px]  md:w-[100px] opacity-30 fill-gray-400 cursor-pointer hover:opacity-100' />
                </div>
              ))} 
        </div>
    </div>
  )
}

export default Section2