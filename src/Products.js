import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import {Link } from "react-router-dom";
// import Select from 'react-select'

export default function Products() {
    
 const [data,setData]=useState([])
 const [searchkey, setSearchkey] = useState('')

 useEffect((e)=>{
    Axios.get("https://fakestoreapi.com/products")
    .then((res)=>setData(res.data))
 },[])


 const searchData = (e)=>{
  let search = e.target.value.toLowerCase();
  setSearchkey(search);
}

let filtereddata = searchkey !== '' ? data.filter((e) =>
//e.title.toLowerCase().includes(searchkey)): data;
e.title.toLowerCase().includes(searchkey)): data;


  return (
    <div>


        
    <div className='container mt-30'>
    <div className='row text-center'>
    <h3  className="float-right shk"><span className="getfree-est"> Our Products </span>  </h3>
    <div className='mb-3'>
              <input type="text" placeholder='search Here' onChange={searchData}/>
        </div>


         {
          filtereddata.map((e)=>(
            <div className='col-md-3 product-grid '>
            <div>
              <Link to={`/Products/${e.id}`} key={e.id}>
                <article className=''>
             <img src={e.image} className="product-img" alt='' />
              <div> <b>{e.title}</b></div>
              <div> <b>{e.price}</b></div>
              <div className='text-center btn-div'>
              <button type="button" class="badge rounded-pill bg-primary bd-d">Read More</button>
              </div>
              </article>
              </Link>
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
