import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { dataContext } from '../contexts/OtherContexts'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import appleLogo from '../assets/appleLogo.png'
import {stockData, singleStockPrices} from '../assets/data'
import Transactions from '../components/Transactions'
import Chart from '../components/Chart'



const IndPage = () => {
  const {dataValues} = useContext(dataContext);
  const {activeMenu, cryptoData, error, loading} = dataValues;

  const copyOfStkDta = stockData.slice(0,3);
  const portfolioData = stockData.slice(0,6)

  const [buySell, setBuySell] = useState('sell')
  const [quantityValue, setQuantityValue] = useState()
  const [priceValue, setPriceValue] = useState()
  const [price, setPrice] = useState()


const handleQuantityValue = (e) => {
    const newQuantity = e.target.value;
    setQuantityValue(newQuantity);
    if (newQuantity) {
        setPriceValue((parseFloat(newQuantity) * stockPrice).toFixed(2));
    } else {
        setPriceValue('');
    }
};

const handlePriceValue = (e) => {
    const newPrice = e.target.value;
    setPriceValue(newPrice);
    if (newPrice) {
        setQuantityValue((parseFloat(newPrice) / price).toFixed(2));
    } else {
        setQuantityValue('');
    }
};


  const singleStockdata = {
    labels: singleStockPrices.map(item=> item.time),
    datasets: [
      {
        label: 'AAPL',
        data: singleStockPrices.map(item=> item.price),
        fill: true,
        backgroundColor: 'rgba(147, 112, 219, 0.3)',
        borderColor: 'rgba(147, 112, 219, 0.5)',
        tension:0.1
      }
    ]
  };

  const singleStockoptions = {
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
  const commodity = cryptoData.find(item => item.id === id);
  console.log(commodity.name);
  const cPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(commodity.low_24h);
  const priceChange = parseFloat(commodity.price_change_24h).toFixed(2);
  const priceChangePercentage = parseFloat(commodity.price_change_percentage_24h).toFixed(2);
  const totalVolume = new Intl.NumberFormat('en-US').format(commodity.total_volume);
  const marketCap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(commodity.market_cap);
  const previousClose = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(commodity.ath);

  

  useEffect(()=> {
      setPrice(cPrice)
  }, [])

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
                                <img src={commodity.image} alt="" className='w-[40px]' />
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>{commodity.symbol}</h1>
                                <p className='text-xs text-gray-500'>{commodity.name}</p>
                            </div>
                            <div className='mt-[-20px] cursor-pointer bg-blue-50 py-[2px] px-[5px] text-xs font-bold'>
                                <p className='text-blue-600'>Follow</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold'>{price}</h1>
                            <p className={`font-semibold ${priceChangePercentage <=0 ? 'text-red-600' : 'text-green-600'}`}>{priceChangePercentage} <span className={`font-semibold ${priceChange < 0 ? 'text-red-600' : 'text-green-600'}`}>(${priceChange})</span> </p>
                        </div>

                      </div>
                    </div>

                    
                    <div className='my-[50px] rounded-lg bg-white shadow-md py-[7px] px-[20px] w-[650px] h-[350px]'>
                            <Chart data={singleStockdata} options={singleStockoptions}/>
                    </div>
                  
                </div>

                <div className=' rounded-lg bg-white py-[15px] px-[20px] w-[280px] h-[425px] mr-[30px] mt-[100px] shadow-lg'>
                    <div className='flex'>
                        <h1 onClick={()=> setBuySell('buy')} className={`${buySell=== 'buy' ? 'bg-purple-600 text-white' : 'bg-gray-200'}  w-[120px] p-[8px] text-center font-bold rounded-lg  cursor-pointer`}>Buy</h1>
                        <h1 onClick={()=> setBuySell('sell')} className={`${buySell=== 'sell' ? 'bg-purple-600 text-white' : 'bg-gray-200'}  w-[120px] p-[8px] text-center font-bold rounded-lg ml-[-15px] cursor-pointer`}>Sell</h1>
                    </div>
                    
                    <form>

                    <div className='px-[10px] py-[20px] mt-[20px] rounded-lg'>
                        <h1 className='text-sm font-bold text-gray-500 pb-[10px]'>Buy Order</h1>
                        <label htmlFor="" className='text-xs mt-[5px] font-semibold'>Quantity</label>
                        <div className='mt-[5px] w-[220px] bg-gray-200 p-[5px] rounded-lg '>
                            <input type="number" className='w-full bg-transparent outline-none border-none' onChange={handleQuantityValue} value={quantityValue} placeholder='Quantity' />
                        </div>
                        <div className='flex justify-between mt-[10px] mb-[15px]'>
                            <p className='bg-gray-300 px-[8px] py-[5px] rounded-lg cursor-pointer w-[70px]'>Limit</p>
                            <p className='bg-gray-300 px-[8px] py-[5px] rounded-lg cursor-pointer w-[70px]'>Market</p>
                            <p className='bg-gray-300 px-[8px] py-[5px] rounded-lg cursor-pointer w-[70px]'>Stop</p>
                        </div>
                        <label htmlFor="" className='text-xs  font-semibold'>Price</label>
                        <div className='mt-[5px] w-[220px] bg-gray-200 p-[5px] rounded-lg '>
                            <input type="number" className='w-full bg-transparent outline-none border-none' onChange={handlePriceValue} value={priceValue} placeholder='Price' />
                        </div>

                        <div className='flex justify-between items-center mt-[15px]'>
                            <p className='text-sm'>Estimated Total <span className='font-bold'>(GHC)</span></p>
                            <p className='font-bold'>{priceValue ? priceValue : '0.00'}</p>
                        </div>
                        <button className='mt-[15px] w-[220px] p-[10px] text-center bg-purple-600 text-white font-bold rounded-lg'>{buySell==='buy'? 'Submit Buy Order': 'Submit Sell Order'}</button>
                    </div>

                    </form>

                </div>

                
            </div>



            
            <div className='w-[650px] py-[15px] px-[20px] bg-white shadow-lg rounded-lg'>
                <h1 className='font-bold mb-[10px]'>Key Data</h1>
                <p className='bg-gray-400 h-[2px]'></p>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Previous Close</p>
                    <h1 className='font-bold text-sm'>{previousClose}</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Volume</p>
                    <h1 className='font-bold text-sm'>{totalVolume}</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>Market Cap</p>
                    <h1 className='font-bold text-sm'>{marketCap}</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>PE Ratio(TTM)</p>
                    <h1 className='font-bold text-sm'>-</h1>
                </div>
                <div className='flex justify-between px-[10px] py-[5px] items-center'>
                    <p className='font-semibold text-sm text-gray-500'>EPS</p>
                    <h1 className='font-bold text-sm'>-</h1>
                </div>
            </div>



         </div>
        </div>
    </div>
  )
}

export default IndPage