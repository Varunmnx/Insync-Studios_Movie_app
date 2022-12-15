import React from 'react'
import "./style.css"
import search from "./Union.png"
export const SearchBar = ({handlechange}) => {
  return (
    <div className='innerbarwrapper'>
        <img className='searchIcon'  src={search}/>
        <input placeholder ="Search for a movie" onChange={(e)=>handlechange(e.target.value)}/>

    </div>
  )
}
