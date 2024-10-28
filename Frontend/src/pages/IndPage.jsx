import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { dataContext } from '../contexts/OtherContexts'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import appleLogo from '../assets/appleLogo.png'
import {stockData} from '../assets/data'
import Transactions from '../components/Transactions'
import PortfolioChart from '../components/PortfolioChart'

const IndPage = () => {
  const {dataValues} = useContext(dataContext);
  const {activeMenu} = dataValues;

  const copyOfStkDta = stockData.slice(0,3);
  console.log(copyOfStkDta);
  const portfolioData = stockData.slice(0,6)

  const [buySell, setBuySell] = useState('sell')
  
  

  return (
    <div className='bg-gray-100' >
      <TopNav/>
      <div className='flex'>

        <Sidebar/>
        <div className={` flex-1 ${activeMenu ? 'ml-[260px]' : 'ml-[120px]'} mt-[85px]  py-[20px]`}>
          
            <div className='flex justify-between'>

                <div className='flex-1'>
                  
                    <div className=' bg-white shadow-lg py-[7px] px-[20px] w-[650px] h-[80px] rounded-lg pt-[15px]'>
                      <div className='flex justify-between items-center'>
                        
                        <div className='flex gap-[15px] items-center'>
                            <div className='w-[40px] h-[40px] bg p-[7px] bg-slate-300 rounded-full'>
                                <img src={appleLogo} alt="" className='w-[40px]' />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>AAPL</h1>
                                <p className='text-xs text-gray-500'>Apple Inc</p>
                            </div>
                            <div className='mt-[-20px] cursor-pointer bg-blue-50 py-[2px] px-[5px] text-xs font-bold'>
                                <p className='text-blue-600'>Follow</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold'>GHC8,777.88</h1>
                            <p className='text-xs text-red-600 font-semibold'>-2.77% (GHC507.80)</p>
                        </div>

                      </div>
                    </div>

                    
                    <div className='my-[50px] rounded-lg bg-white shadow-md py-[7px] px-[20px] w-[650px] h-[350px]'>

                    </div>
                  
                </div>

                <div className=' rounded-lg bg-white py-[7px] px-[20px] w-[250px] h-[280px] mr-[30px] mt-[160px]'>
                    <div className='flex'>
                        <h1 onClick={()=> setBuySell('buy')} className={`${buySell=== 'buy' ? 'bg-purple-600 text-white' : 'bg-gray-200'}  w-[120px] p-[8px] text-center font-bold rounded-lg  cursor-pointer`}>Buy</h1>
                        <h1 onClick={()=> setBuySell('sell')} className={`${buySell=== 'sell' ? 'bg-purple-600 text-white' : 'bg-gray-200'}  w-[120px] p-[8px] text-center font-bold rounded-lg ml-[-15px] cursor-pointer`}>Sell</h1>
                    </div>
                    <h1 className='text-xl text-center font-bold mt-[20px] text-gray-500'>GHC8,777.88</h1>
                    <div className='mt-[50px] w-[220px] bg-gray-200 p-[10px] rounded-xl '>
                        <input type="number" className='w-full bg-transparent outline-none border-none' placeholder='Enter Amount' />
                    </div>
                    <button className='mt-[15px] w-[220px] p-[10px] text-center bg-purple-600 text-white font-bold rounded-full'>{buySell==='buy'? 'Buy': 'Sell'}</button>
                </div>

                
            </div>



            
            <div className='w-[650px] py-[15px] px-[20px] bg-white shadow-lg rounded-lg'>
                <h1 className='font-bold mb-[10px]'>Key Data</h1>
                <p className='bg-gray-400 h-[2px]'></p>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Previous Close</p>
                    <h1 className='font-bold text-sm'>GHC8,789.22</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Volume</p>
                    <h1 className='font-bold text-sm'>180,000,000</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Market Cap</p>
                    <h1 className='font-bold text-sm'>GHC23.5T</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>PE Ratio(TTM)</p>
                    <h1 className='font-bold text-sm'>GHC240.02</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>EPS</p>
                    <h1 className='font-bold text-sm'>GHC123.72</h1>
                </div>
            </div>



         </div>
        </div>
    </div>
  )
}

export default IndPage