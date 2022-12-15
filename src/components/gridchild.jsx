import React from 'react'
import "./gridchild.css"
import i from "./i.png"
import { setSelectedCard,selectedCard } from '../provider/contextprovider'
export const Gridchild = ({onClick,Title,src,date,rating,count,overview}) => {
 let IMGURL = "https://image.tmdb.org/t/p/w220_and_h330_face/"
 let setter = setSelectedCard()
 function handleClick(e){
    onClick()
    setter({
        Title,
        date,
        rating,
        src,
        overview,
        count
    })
 }

  return (
    <div className='box' onClick={()=>handleClick()}>
       <span className='rating'>{rating}</span>
      <img className="box_inner_image" src={IMGURL+src} />
     <div className='remaining_name'>
      <span>{Title}</span>
     </div>
    </div>
  )
}
