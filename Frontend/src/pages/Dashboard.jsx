import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { dataContext } from '../contexts/OtherContexts'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import appleLogo from '../assets/appleLogo.png'
import {stockData} from '../assets/data'
import Transactions from '../components/Transactions'
import Chart from '../components/Chart'
import {stockPrices} from '../assets/data';
import axios from 'axios'
import {useParams } from 'react-router-dom'



const Dashboard = () => {
  const {dataValues} = useContext(dataContext);
  const {activeMenu, setUserId, accountBalance, userName, userEmail, displaySettingsModal, displaySupportModal, setDisplaySettingsModal, setGiftClaimModal, isRegistered, setIsRegistered} = dataValues;
  const copyOfStkDta = stockData.slice(0,3);
  const portfolioData = stockData.slice(0,6)

  const portFdata = {
    labels: stockPrices.map(item=> item.time),
    datasets: [
      {
        label: 'Portfolio',
        data: stockPrices.map(item=> item.price),
        fill: true,
        backgroundColor: 'rgba(147, 112, 219, 0.3)',
        borderColor: 'rgba(147, 112, 219, 0.5)',
        tension:0.1
      }
    ]
  };

  const portFoptions = {
    responsive:true,
    plugins: {
      legend: {
        position: "top",
        display: false
      },
      title: {
        display: false,
        text: 'Portfolio Performance'
      },
    },
    scales: { 
      x: { 
        display: false,
        beginAtZero: true,
        grid: {
          display: false
        }
      }, 
      y: { 
        position: 'right',
        grid: {
          display: false // Hides the grid lines for the y-axis
      }
      } 
  }
      
  };


  const {id} = useParams();

  useEffect(()=> {
    setUserId(id);
    if(isRegistered) {
      const timer = setTimeout(()=>{
        setGiftClaimModal(true)
        setIsRegistered(false)
      }, 5000)


      return ()=> clearTimeout(timer);
    }
  },[isRegistered])



 let lAssets = parseFloat(accountBalance);
 let netLiquidAssets = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHC' }).format(lAssets);
  
  

  return (
    <div>
      <TopNav userName={userName} userEmail={userEmail} />
      <div className='flex'>

        <Sidebar/>
        

        <div className={` flex-1 ${activeMenu ? 'ml-[260px]' : 'ml-[120px]'} mt-[85px]`}>
          
          <div>
              <div className='flex justify-between items-center'>
                <div className='w-[250px] h-[155px] shadow-lg rounded-lg bg-gray-50'>
                  <p className='text-xm px-[15px] py-[10px] font-semibold'>Net Liquid Assets</p>
                  <h1 className='font-extrabold text-xl px-[15px]'>{netLiquidAssets}</h1>
                  <div className='px-[15px] text-xs flex justify-between py-[7px] font-semibold mt-[20px]'>
                    <p>Profit/Loss</p>
                    <p className='text-green-600 font-bold'>+ GHC0.00</p>
                  </div>
                  <div className='px-[15px] text-xs flex justify-between py-[7px] font-semibold'>
                    <p>Cash</p>
                    <p className='font-bold'>{accountBalance}</p>
                  </div>
                </div>

                <div>
                  <div>
                  <p className='mb-[15px] font-bold text-gray-400'>Top performing stocks</p>
                  </div>
                <div className='flex gap-[15px] mr-[30px]'>
                  {copyOfStkDta.map(item => {

                      let percentChange = parseFloat(item.change);
                      
                      

                   return ( 
                    <Link to={`s-details/${item.id}`}>
                    <div key={item.id} className='w-[200px] h-[100px] shadow-lg rounded-lg bg-gray-50 px-[15px] py-[10px] cursor-pointer hover:bg-gray-100'>
                    <div className='flex gap-[10px] items-center'>
                      <div className='bg-white p-[7px] rounded-full'>
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
                  </Link>

                  )})}

                
                  

                </div>
                </div>
              </div>

              <div className='flex justify-between mt-[100px] mr-[30px]'>

                <div>
                <p className='text-xm px-[5px] py-[5px]  font-bold mt-[-35px]'>Portfolio Performance</p>
                  <div className={`${activeMenu ? 'w-[730px]' : 'w-[860px]'} h-[430px]  rounded-lg p-[15px]`}>
                      <Chart data={portFdata} options={portFoptions}/>
                  </div>
                </div>

                <div className='w-[300px] h-fit shadow-sm rounded-lg bg-gray-50 px-[15px] py-[10px] cursor-pointer'>
                  <p className='font-bold py-[7px]'>My Portfolio</p>
                  <hr />
                    {portfolioData.map(portfItem => {
                      let percentChange = parseFloat(portfItem.change);

                      return (
                      <div key={portfItem.id} className=' flex justify-between items-center py-[5px]'>
                        
                      <div className='flex gap-[15px] items-center'>
                          <div className=' p-[7px] rounded-full w-[40px]'>
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

              <div className='mt-[100px] mb-[30px]'>
                  <Transactions/>

              </div>

          </div>

        </div>
        
      </div>

      







    </div>
  )
}

export default Dashboard