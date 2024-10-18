import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { dataContext } from '../contexts/OtherContexts'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'

const Dashboard = () => {
  const {logout} = useAuth();
  const {dataValues} = useContext(dataContext)
  const {text1} = dataValues


  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar/>
        <div className='ml-[299px] mt-[75px]'>
            <h1>Dashboard</h1>
        </div>
        
      </div>

      







    </div>
  )
}

export default Dashboard