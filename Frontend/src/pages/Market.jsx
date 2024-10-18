import React from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'

const Market = () => {
  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar/>
        <div className='ml-[299px] mt-[75px]'>
            <h1>Market</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Market