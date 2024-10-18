import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <hr />
        <div className='flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[50px]'>

            <div className='py-[10px] md:py-[40px] pl-[10px]'>
            <h1><span className=' font-bold text-purple-900 cursor-pointer'>DADTradeX</span></h1>
                <br />
                <p className='cursor-pointer hover:text-purple-700'>Ghana, Accra</p>
                <p className='cursor-pointer hover:text-purple-700'>GreenWhite Building, Floor 26</p>
                <p className='cursor-pointer hover:text-purple-700'>GE-2425, Bohye</p>
                <br />
                <p className='cursor-pointer hover:text-purple-700'><ul>contactus@dadtradex.com</ul></p>
            </div>
            <div className='py-[40px] pl-[10px]'>
                <h1 className='font-semibold '>Platform</h1>
                <br />
                <p className='cursor-pointer hover:text-purple-700'>Analytics</p>
                <p className='cursor-pointer hover:text-purple-700'>Planning</p>
                <p className='cursor-pointer hover:text-purple-700'>Collaboration</p>
                <p className='cursor-pointer hover:text-purple-700'>Data Management</p>
                <p className='cursor-pointer hover:text-purple-700'>Integrations</p>
                <p className='cursor-pointer hover:text-purple-700'>Security</p>
                
            </div>
            <div className='py-[40px] pl-[10px]'>
                <h1 className='font-semibold '>Resources</h1>
                <br />
                <p className='cursor-pointer hover:text-purple-700'>Customers</p>
                <p className='cursor-pointer hover:text-purple-700'>Strategic Finance</p>
                <p className='cursor-pointer hover:text-purple-700'>Ebooks & Guides</p>
                <p className='cursor-pointer hover:text-purple-700'>Webinars & Events</p>
                
            </div>
            <div className='py-[40px] pl-[10px]'>
                <h1 className='font-semibold '>Solutions</h1>
                <br />
                <p className='cursor-pointer hover:text-purple-700'>Financial</p>
                <p className='cursor-pointer hover:text-purple-700'>Investor Relations</p>
                <p className='cursor-pointer hover:text-purple-700'>Revenue Operations</p>
                <p className='cursor-pointer hover:text-purple-700'>Sales & Marketing</p>
                <p className='cursor-pointer hover:text-purple-700'>Human Resources</p>
                
            </div>
        </div>

        <div>
            <h1 className='font-semibold bg-black text-gray-400 py-[8px] text-center '>&copy;2024 - DADTradeX</h1>
        </div>

    </div>
  )
}

export default Footer