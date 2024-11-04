import React, {useContext} from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import { dataContext } from '../contexts/OtherContexts'
import { useNavigate } from 'react-router-dom';
import {stockData} from '../assets/data';

const Market = () => {

  const {dataValues} = useContext(dataContext);
  const {activeMenu, cryptoData, error, loading, userName, userEmail} = dataValues;

  const navigate = useNavigate();

  const toDetailsPage = (idx)=> {
    navigate(`/dashboard/${idx}/s-details/${idx}`)
};


  return (
    <div>
      <TopNav  userName={userName} userEmail={userEmail}/>
      <div className='flex'>

        <Sidebar/>
        <div className={`${activeMenu ? 'ml-[250px]' : 'ml-[120px]'} mt-[75px]`}>
          
        <div><p className='font-bold text-xl py-[5px]'>Stock Market</p></div>
                <hr className='text-gray-700' />
              
              <div className='mt-[15px]'>
                      
                  
                <table >
                    <thead>
                    <tr>
                        <th className='pl-[1px] font-bold text-black text-sm'>Stock Name</th>
                        <th className='font-bold text-black text-sm'>Price</th>
                        <th className='font-bold text-black text-sm'>Price Change 24h %</th>
                        <th className='font-bold text-black text-sm'>Total Volume</th>
                        <th className='font-bold text-black text-sm'>Market Cap</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                      
                      {stockData.map(item => {
                          const priceChange = parseFloat(item.price_change_24h).toFixed(2);
                          const priceChangePercentage = parseFloat(item.change).toFixed(2);
                          const totalVolume = new Intl.NumberFormat('en-US').format(item.volume);
                          const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHC' }).format(item.price);
                          const marketCap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHC' }).format(item.marketCap);

                        return (
                        <>
                        
                        <tr key={item.id} onClick={()=> toDetailsPage(item.id)} className='cursor-pointer hover:bg-purple-100'>
                          <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className=' w-[30px] py-[5px] '><img src={item.img} alt="" className='w-[30px] text-white text-xl' /></span> {item.name}</td>
                          <td className='font-semibold'>{price}</td>
                          <td className={`font-semibold ${priceChangePercentage <= 0 ? 'text-red-600' : 'text-green-600'}`}>{priceChangePercentage}</td>
                          <td className='font-semibold'>{totalVolume}</td>
                          <td className='font-semibold'>{marketCap}</td>
                        
                        </tr>
                        </>
                        )
                      })}
                    
                    
                    </tbody>
                </table>
                
                </div>









        </div>
      </div>
    </div>
  )
}

export default Market