import React from 'react'
import "./detailed.css"
import i from "../i.png"
import close from "./close.png"
import { selectedCard } from '../../provider/contextprovider'




// Title,
// date,
// rating,
// src,
// overview,
// count
let IMGURL = "https://image.tmdb.org/t/p/w220_and_h330_face/"

const TopSection =({onClick,Title})=>(
    <div className='top_section_Detailed'>
        <span>{Title}</span>
         <img src={close} onClick={onClick}/>
    </div>
)
const ImageAndDescription = ({overview,date,src,rating,count})=>{
     
    console.log("IMG AND _____DES")
    console.log(IMGURL)
    return(
<div className='bottom_image_and_description'>
    <img alt="lcft" className="drop_image" src ={IMGURL+src} />
    <div alt="right" className='drop_right'> 
    <span> <span style={{fontWeight:600}}>Release Date </span> :{date}</span>
      <p>
       {overview}
      </p>
      <span> <span style={{fontWeight:600}} >{rating}</span> / 10 ({count} total votes)</span>
    </div>
     </div>)}

export const Detailed = ({onClick}) => {
  let {Title,overview,date,src,rating,count} = selectedCard()
  return (
    <div className='detailed_holder'>
        <div className='detailed_card'>
             <TopSection onClick={onClick} Title={Title} />
             <ImageAndDescription  overview={overview} date={date} src={src} rating={rating} count={count}/>
        </div>
    </div>
  )
}
