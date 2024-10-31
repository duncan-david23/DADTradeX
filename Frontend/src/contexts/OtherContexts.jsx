import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const dataContext = createContext();


export const DataContextProvider = ({children})=> {

  const [activeMenu, setActiveMenu] = useState(true);
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchCryptoData = async ()=> {

    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
      const data = response.data;
      console.log(data);
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

    //cleanup the interval on component unmount
    return ()=> clearInterval(interval);



  },[])






    

    const dataValues ={
        activeMenu,
        setActiveMenu,
        cryptoData,
        error,
        loading
    }





    return(
        <dataContext.Provider value={{dataValues}}>
            {children}
        </dataContext.Provider>
    )
}

