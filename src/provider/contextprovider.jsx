import React,{createContext,useContext} from "react"
import { useState,useEffect } from "react"


 const CardContext = createContext()
 const CardMan = createContext()

export function selectedCard(){
  return useContext(CardContext)
}
export function setSelectedCard(){
  return useContext(CardMan)
}

export default function CardContextProvider({children}){


let [card ,setCard] = useState({})
function updateCurrent(current) {
    console.log(current)
    setCard(current)
}

        return(
            <CardContext.Provider value={card}>
                <CardMan.Provider value={updateCurrent} >
                    {children}
                </CardMan.Provider>
            </CardContext.Provider>
            )
}