import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const dataContext = createContext();


export const DataContextProvider = ({children})=> {

  const [activeMenu, setActiveMenu] = useState(true);
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userAccountId, setUserAccountId] = useState();
  const [accountBalance, setAccountBalance] = useState(0);
  const [displaySettingsModal, setDisplaySettingsModal] = useState(false);
  const [displaySupportModal, setDisplaySupportModal] = useState(false);
  const [giftClaimModal, setGiftClaimModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);



  const fetchCryptoData = async ()=> {

    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
      const data = response.data;
      setCryptoData(data);
      setLoading(false);
      
      

    } catch (error) {
      console.error('error fetching data', error)
      setError(error.message);
      setLoading(false);
    }
   
  };


  useEffect(()=> {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 1800000);

    const getAccountDetails = async ()=> {
      if (!userId) return; // Only fetch if userId is defined

      try {
        const response = await axios.get(`http://localhost:8000/users/user-account/${userId}`);
        console.log(response.data);
        const userData = response.data[0].balance;
        setUserEmail(response.data[0].email);
        setUserName(response.data[0].username);
        setUserAccountId(response.data[0].id);
        const userBalance = userData; 
        setAccountBalance(userBalance);
        
      } catch (error) {
        console.error('error fetching account info', error)
        
      }
    }

    getAccountDetails();
    
    return ()=> clearInterval(interval);

  },[userId])

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
  }, [userId]);




    

    const dataValues ={
        activeMenu,
        setActiveMenu,
        cryptoData,
        error,
        loading,
        setUserId,
        userEmail,
        userName,
        accountBalance,
        userAccountId,
        displaySettingsModal, 
        setDisplaySettingsModal,
        displaySupportModal, 
        setDisplaySupportModal,
        giftClaimModal, 
        setGiftClaimModal,
        isRegistered, 
        setIsRegistered
    }





    return(
        <dataContext.Provider value={{dataValues}}>
            {children}
        </dataContext.Provider>
    )
}

