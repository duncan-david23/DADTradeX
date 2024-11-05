import React, {useContext} from 'react'
import { dataContext } from '../contexts/OtherContexts';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';










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





const GiftClaimModal = () => {

    const {dataValues} = useContext(dataContext);
    const {displaySupportModal, setDisplaySupportModal, setGiftClaimModal} = dataValues;

    const closeModal = ()=> {
        setDisplaySupportModal(false)
      
    }

const notify = (notification) => toast.success('Gift Claimed Successfully');

const giftAmount = 120;
const userId = localStorage.getItem('userId')

const handleClaimGift = async (e)=> {

    try {
        const response = await axios.put('http://localhost:8000/users/user-account', {userId: userId, amount: giftAmount});
        console.log(response.data);



    } catch (error) {
        console.error('an error occurred updating user balance', error.stack)
    }




    setGiftClaimModal(false);
    notify()
}
    
  return (

    <div> 

    <div style={overlayStyle}>
        <div className='fixed top-28 left-1/3 w-[500px] h-[230px] bg-slate-50 shadow-2xl'>
            <form >
            <div> 
                <div className='flex justify-center mt-[20px] text-xl font-bold' >
                    <h1>Hi, Welcome to DADTradeX </h1>
                </div>
                <div className=' ml-[20px] text-center mt-[20px] text-sm'>
                    <p className='font-semibold pb-[10px]'>You’re just in time to claim your exclusive welcome gift of <span className='font-extrabold'>GHC {giftAmount}!</span></p>
                    <p className='font-bold'>Hit "Claim Now" to enjoy your gift and start trading.</p>
                </div>
                <button onClick={handleClaimGift} className='bg-purple-700 px-[7px] py-[7px] rounded-lg w-[150px] mt-[30px] text-center text-white font-semibold ml-[180px] '>Claim</button>
            </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default GiftClaimModal