import React from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'


const BlognNews = () => {
  return (
    <div>
      <TopNav/>
      <div className='flex'>

        <Sidebar />
        <div className='ml-[250px] mt-[75px]'>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, itaque error id nulla officia reprehenderit ducimus autem consequuntur modi doloribus eum totam nihil reiciendis earum, mollitia voluptates commodi eligendi blanditiis excepturi qui omnis exercitationem delectus vel! Voluptatibus illo id quaerat enim qui explicabo saepe totam tempore possimus quas? Modi blanditiis repellat a reiciendis ea quos ullam aliquid minima fugiat culpa.</h1>
        </div>
        
      </div>
    </div>
  )
}

export default BlognNews