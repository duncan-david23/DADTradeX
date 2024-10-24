import React, { createContext, useState } from 'react';


export const dataContext = createContext();


export const DataContextProvider = ({children})=> {

    const [activeMenu, setActiveMenu] = useState(false)
    

    const dataValues ={
        activeMenu,
        setActiveMenu
    }





    return(
        <dataContext.Provider value={{dataValues}}>
            {children}
        </dataContext.Provider>
    )
}

