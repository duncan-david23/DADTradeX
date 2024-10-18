import React, { createContext } from 'react';


export const dataContext = createContext();


export const DataContextProvider = ({children})=> {


        const text1 = 'hello there'

    const dataValues ={
        text1,
    }





    return(
        <dataContext.Provider value={{dataValues}}>
            {children}
        </dataContext.Provider>
    )
}

