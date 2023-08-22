
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";

export default function Images() {
  const [data,setData]=useState([])

  
 useEffect((e)=>{
  Axios.get("https://jsonplaceholder.typicode.com/photos")
  .then((res)=>setData(res.data))
},[])


  return (
    <div className=''>
    <div className='container'>
  


    <h2 className='text-center'>Images</h2>
    
    <div className='row'>


         {
          data.map((e)=>(
            <div className='col-md-3 product-grid'>
            <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
             <Link to={e.thumbnailUrl} target='_blank'><img src={e.thumbnailUrl} className="product-img" alt=''/></Link>             
               </div>
            <div class="flip-box-back">
            <h2>Paris</h2>
            <p>{e.title}</p>
            </div>
            </div>
            </div>
            </div>
          ))
        }


</div> 



 </div>
    <Footer/>
    </div>
  )
}
