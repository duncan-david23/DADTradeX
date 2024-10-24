import React, {useContext} from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import { dataContext } from '../contexts/OtherContexts'

const Market = () => {

  const {dataValues} = useContext(dataContext);
  const {activeMenu} = dataValues;

  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar/>
        <div className={`${activeMenu ? 'ml-[250px]' : 'ml-[120px]'} mt-[75px]`}>
            <h1>Market</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Market