import React from 'react'
// import Footer from './Footer'
import img from "./images/s2.jpg"
import img1 from "./images/s3.jpg"
import Products from './Products'
import img11 from "./images/s11.png"
import img22 from "./images/s22.png"
import img33 from "./images/s33.png"
import img44 from "./images/s44.png"
import { useAuth } from './auth'

export default function Home() {

  
  const {user}=useAuth();
    console.log(user);


  return (
    <div>
        
<div id="demo" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
  <img src={img1} className="banner" alt=''/>
  </div>
  <div className="carousel-item">
    <img src={img1} className="banner" alt=''/>
  </div>
  <div className="carousel-item">
  <img src={img} className="banner" alt=''/>
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>




    <h2 className='text-center mt-3'>Why Use Us</h2>

      <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <div className=' mr-3'>
        <img src={img11} className="h-img " alt=''/>
        </div>
        </div>
        <div className='col-md-3'>
        <div className=' mr-3'>
        <img src={img22} className="h-img " alt=''/>
        </div>
        </div>
        <div className='col-md-3 '>
        <div className=' mr-3'>
        <img src={img33} className="h-img " alt=''/>
        </div>
        </div>
        <div className='col-md-3'>
        <div className=' mr-3'>
        <img src={img44} className="h-img " alt=''/>
        </div>
        </div>
      </div>
      </div>

    <Products/>

    </div>
  )
}
