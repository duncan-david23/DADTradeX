import React, {useState, useEffect, useContext} from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import axios from 'axios';
import { CiCoinInsert } from "react-icons/ci";
import { dataContext } from '../contexts/OtherContexts'
import { useNavigate } from 'react-router-dom';


const Cryptocurrencies = () => {
  const {dataValues} = useContext(dataContext);
  const {activeMenu, cryptoData, error, loading} = dataValues;
 
  const navigate = useNavigate();
  
  const toDetailsPage = (idx)=> {
      navigate(`/dashboard/${idx}/i-details/${idx}`)
  };
  

  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar/>

        <div className={` flex-1 ${activeMenu ? 'ml-[260px]' : 'ml-[120px]'} mt-[85px]`}>
        <div><p className='font-bold text-xl py-[5px]'>Market Value</p></div>
                <hr className='text-gray-700' />
              
              <div className='mt-[15px]'>
                
              {error ? 
                    <div><h1 className='text-center font-bold mt-[200px] text-2xl'>{`${error}..... Please revisit this page later`}</h1></div>
                      
                    :
                  
              
                <table >
                    <thead>
                    <tr>
                        <th className='pl-[1px] font-semibold text-black text-xs'>Currency Name</th>
                        <th className='font-semibold text-black text-xs'>Price</th>
                        <th className='font-semibold text-black text-xs'>Price Change 24h</th>
                        <th className='font-semibold text-black text-xs'>Price Change 24h %</th>
                        <th className='font-semibold text-black text-xs'>Total Volume</th>
                        <th className='font-semibold text-black text-xs'>Market Cap</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                      
                      {cryptoData.map(item => {
                          const priceChange = parseFloat(item.price_change_24h).toFixed(2);
                          const priceChangePercentage = parseFloat(item.price_change_percentage_24h).toFixed(2);
                          const totalVolume = new Intl.NumberFormat('en-US').format(item.total_volume);
                          const marketCap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.market_cap);
                          const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.low_24h);

                        return (
                        <>
                        
                        <tr key={item.id} onClick={()=> toDetailsPage(item.id)} className='cursor-pointer hover:bg-purple-100'>
                          <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className=' w-[30px] py-[5px] '><img src={item.image} alt="" className='w-[30px] text-white text-xl' /></span> {item.name}</td>
                          <td className='font-semibold'>{price}</td>
                          <td className={`font-semibold ${priceChange <=0 ? 'text-red-600' : 'text-green-600'}`}>{priceChange}</td>
                          <td className={`font-semibold ${priceChangePercentage < 0 ? 'text-red-600' : 'text-green-600'}`}>{priceChangePercentage}</td>
                          <td className='font-semibold'>{totalVolume}</td>
                          <td className='font-semibold'>{marketCap}</td>
                        
                        </tr>
                        </>
                        )
                      })}
                    
                    
                    </tbody>
                </table>
                }
                </div>





        </div>
        
      </div>
    </div>
  )
}

export default  Cryptocurrencies