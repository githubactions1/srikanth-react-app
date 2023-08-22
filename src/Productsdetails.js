import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import Footer from './Footer';

export default function ProductsDetails() {
    const [data,setData]=useState([])
    const {productId}=useParams();

   
 useEffect((e)=>{
    const url=`https://fakestoreapi.com/products/${productId}`
    Axios.get(url)
    .then((res)=>setData(res.data))
 })
  return (
    <div>
        
        
    <div className='container mt-30'>
    <div className='row text-center'>
    <h3  className="float-right shk"><span className="getfree-est"> ProductsDetails </span>  </h3>
        

         <div className='col-md-6  product-details-grid'>
         <div>
         <img src={data.image} className="product-img" alt=''/>
         </div>
         </div>

         <div className='col-md-6 '>
         <div>
         <div> <b>{data.title}</b></div>
         <div className='mt-5'>
         <h5 className='float-left'>Description :</h5>
         <p>{data.description}</p>
            
            </div>
         </div>
         <div  className=" shk"><span className="getfree-est mt-5">
            
         <del> {data.price}</del> : 
             {data.price}
             
             
             
              </span>  </div>
         </div>
        
        </div>
        </div>


        <Footer/>

        </div>
  )
}
