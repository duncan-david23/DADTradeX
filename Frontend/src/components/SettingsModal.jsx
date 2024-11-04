import React, {useContext} from 'react'
import { dataContext } from '../contexts/OtherContexts';










const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    backdropFilter: 'blur(5px)', // Blur effect on background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it appears above other content
  };




const SettingsModal = () => {

    const {dataValues} = useContext(dataContext);
    const {setDisplaySettingsModal, displaySettingsModal} = dataValues;

    const closeModal = ()=> {
    setDisplaySettingsModal(false)
      
    }
    
  return (

    <div> 

    <div style={overlayStyle}>
        <div className='fixed top-28 left-1/3 w-[500px] h-[500px] bg-slate-50 shadow-2xl'>
            <div className='bg-black pt-[2px] rounded-full cursor-pointer w-[30px] h-[30px] text-center font-semibold text-white absolute top-[5px] right-[5px]' onClick={closeModal}>X</div>

            <div> 
                <div className='flex justify-center mt-[20px] text-xl font-bold' >
                    <h1>Settings</h1>
                </div>
                <div className='flex justify-center mt-[200px] text-lg'>
                    <p>Not yet available</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default SettingsModal