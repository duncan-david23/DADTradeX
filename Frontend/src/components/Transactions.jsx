import React from 'react'
import { CiWallet } from "react-icons/ci";
import { PiHandWithdrawLight } from "react-icons/pi";
import { CiCoinInsert } from "react-icons/ci";
import './transaction.css'

const Transactions = () => {



    // <CiWallet /> for deposit
  // <PiHandWithdrawLight /> for withdrwal
  // <CiCoinInsert />
  return (
    <div>
        <p className='font-bold text-xl py-[5px]'>Last Transactions</p>
                <hr className='text-gray-700' />
                <div className='mt-[15px]'>

                
                <table >
                    <tr>
                        <th className='pl-[1px]'>Transaction</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className='bg-purple-600 w-[30px] py-[5px]  rounded-full'><CiCoinInsert className='w-[30px] text-white text-xl' /></span> Bought AAPL</td>
                        <td>25-Oct-24  13:35</td>
                        <td className='text-green-400 font-semibold'>Success</td>
                        <td className='font-semibold'>GHC7,800.00</td>
                    </tr>
                    <tr>
                        <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className='bg-purple-600 w-[30px] py-[5px]  rounded-full'><CiCoinInsert className='w-[30px] text-white text-xl' /></span> Bought AAPL</td>
                        <td>25-Oct-24  13:15</td>
                        <td className='text-red-600 font-semibold'>Failed</td>
                        <td className='font-semibold'>GHC7,800.00</td>
                    </tr>
                    <tr>
                        <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className='bg-green-400 w-[30px] py-[5px]  rounded-full'><PiHandWithdrawLight className='w-[30px] text-white text-xl' /></span> Deposite</td>
                        <td>25-Oct-24  18:15</td>
                        <td className='text-gray-600 font-semibold'>Pending</td>
                        <td className='font-semibold'>GHC38,000.00</td>
                    </tr>
                    <tr>
                        <td className='font-semibold flex items-center gap-[10px] pl-[1px]'><span className='bg-blue-400 w-[30px] py-[5px]  rounded-full'><CiCoinInsert className='w-[30px] text-white text-xl' /></span> Sold NKE</td>
                        <td>05-Oct-24  08:15</td>
                        <td className='text-green-400 font-semibold'>Success</td>
                        <td className='font-semibold'>GHC17,800.00</td>
                    </tr>
                    
                </table>
                </div>
    </div>
  )
}

export default Transactions