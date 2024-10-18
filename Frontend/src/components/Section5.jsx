import React from 'react'
import appleLogo from '../assets/appleLogo.png'
import googlePlayLogo from '../assets/googlePlayLogo.png'

const Section5 = () => {
  return (
    <div className=' py-[50px]'>

        <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center py-[10px] px-[15px] bg-white w-fit font-bold shadow-lg rounded-full'>GET THE APP FOR FREE</h1>
                <h1 className='text-center py-[40px] w-[310px] md:w-[710px] text-2xl md:text-4xl font-bold '>Download the application and feel the ease of investing </h1>
                <p className='text-center text-gray-500 text-[14px] md:text-base w-[300px] md:w-[710px]'>You can now download the DADTradeX application in the mobile version. You can get the app in the Appstore or Playstore. Download now and feel the convenience.</p>    
        
                <div className='my-[70px]'>
                    <div className='flex flex-col md:flex-row gap-[15px]'>

                    
                    <div className='flex gap-[5px] border-[3px] border-black py-[5px] px-[30px] cursor-pointer hover:scale-105'>
                        <img src={appleLogo} alt="" className='w-[45px]' />
                        <div>
                            <p className='font-semibold'>Download on the</p>
                            <h1 className='font-bold text-2xl'>App Store</h1>
                        </div>
                    </div>
                    <div className='flex gap-[5px] border-[3px] border-black py-[5px] px-[30px] cursor-pointer hover:scale-105'>
                        <img src={googlePlayLogo} alt="" className='w-[45px]' />
                        <div>
                            <p className='font-semibold'>Get It On</p>
                            <h1 className='font-bold text-2xl'>Google Play</h1>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Section5