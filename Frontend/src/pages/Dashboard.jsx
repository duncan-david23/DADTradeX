import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { dataContext } from '../contexts/OtherContexts'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import appleLogo from '../assets/appleLogo.png'
import {stockData} from '../assets/data'

const Dashboard = () => {
  const {dataValues} = useContext(dataContext);
  const {activeMenu} = dataValues;

  const copyOfStkDta = stockData.slice(0,3);
  console.log(copyOfStkDta);
  const portfolioData = stockData.slice(0,6)
  

  

  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar/>
        <div className={` flex-1 ${activeMenu ? 'ml-[260px]' : 'ml-[120px]'} mt-[85px]`}>
          
          <div>
              <div className='flex justify-between items-center'>
                <div className='w-[250px] h-[140px] shadow-lg rounded-lg bg-gray-50'>
                  <p className='text-xm px-[15px] py-[10px] font-semibold'>Portfolio value</p>
                  <h1 className='font-extrabold text-xl px-[15px]'>GHC57,872.89</h1>
                  <div className='px-[15px] text-xs flex justify-between py-[7px] font-semibold mt-[20px]'>
                    <p>Profit/Loss</p>
                    <p className='text-green-600 font-bold'>+ GHC15,010.82</p>
                  </div>
                </div>

                <div>
                  <div>
                  <p className='mb-[15px] font-bold text-gray-400'>My Top performing stocks</p>
                  </div>
                <div className='flex gap-[15px] mr-[30px]'>
                  {copyOfStkDta.map(item => {

                      let percentChange = parseFloat(item.change);
                      console.log(percentChange);
                      

                   return ( 
                      
                    
                    <div key={item.id} className='w-[200px] h-[100px] shadow-lg rounded-lg bg-gray-50 px-[15px] py-[10px] cursor-pointer hover:bg-gray-100'>
                    <div className='flex gap-[10px] items-center'>
                      <div className='bg-gray-200 p-[7px] rounded-full'>
                      <img src={item.img} alt="" className='w-[30px]' />
                      </div>
                      <div>
                        <p className='font-bold'>{item.symbol}</p>
                        <p className='text-xs text-gray-500'>{item.name}</p>
                      </div>
                      
                    </div>
                    <div className=' flex justify-between items-center px-[10px] mt-[15px] text-xs'>
                      <p className='font-bold'>GHC{item.price} </p>  
                      <p className={`${percentChange < 5 ? 'text-red-700' : 'text-green-400'} font-bold`}>{percentChange}%</p>  
                    </div>

                  </div>

                  )})}

                
                  

                </div>
                </div>
              </div>

              <div className='flex justify-between mt-[100px] mr-[30px]'>

                <div>
                  <p>Chart</p>
                </div>

                <div className='w-[300px] h-fit shadow-sm rounded-lg bg-gray-50 px-[15px] py-[10px] cursor-pointer'>
                  <p className='font-bold py-[7px]'>My Portfolio</p>
                  <hr />
                    {portfolioData.map(portfItem => {
                      let percentChange = parseFloat(portfItem.change);

                      return (
                      <div key={portfItem.id} className=' flex justify-between items-center py-[5px]'>
                        
                      <div className='flex gap-[15px] items-center'>
                          <div className='bg-gray-200 p-[7px] rounded-full w-[40px]'>
                            <img src={portfItem.img} alt="" className='w-[30px]' />
                          </div>
                        <div>
                        <p className='font-bold text-sm'>{portfItem.symbol}</p>
                        <p className='text-xs text-gray-500'>{portfItem.name}</p>
                        </div>
                      </div>
                     <div className=' flex flex-col items-center px-[10px] mt-[15px] text-xs'>
                      <p className='font-bold'>GHC{portfItem.price}</p>  
                      <p className={`${percentChange< 5 ? 'text-red-700' : 'text-green-400'} font-bold`}>{percentChange}%</p>  
                    </div>
                  </div>
                      )
                    })}

                  

                  

                </div>


              </div>

          </div>

        </div>
        
      </div>

      







    </div>
  )
}

export default Dashboard