import React, { useEffect,useState } from 'react'
import Axios from 'axios';
// import {useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import about_img from './images/about.avif'
import Footer from './Footer';

export default function Contact() {
    
  // const redirect = useNavigate();
  const [data,setData]=useState({name:"",mobile:"",email:"",password:""})

  const inputHandler=(e)=>{
    setData((preState)=>{
        return {
            ...preState,
            [e.target.name]:e.target.value
        }
    })
}
   useEffect((e)=>{
      Axios.get("https://slndegreecollegeatp.com/dev/webservices/apis/main_categories_list")
      .then((res)=>setData(res.data))

   })
   const submitHandler=(e)=>{
    }
  return (
    <div className=''>
    <div className='container mt-5'>
        <h3 className='text-center'>Contact Us</h3>
        <div className='row'>
        <div className='col-md-6 '>
          <h4 className='text-center mt-5'>Send Your Query</h4>
        <form  onSubmit={submitHandler}>
    <div className="row mt-3">
      <div className="col">
        <input type="text" className="form-control" placeholder="Enter Name" name="name" value={data.name} onChange={inputHandler} required/>
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Enter Mobile" name="mobile" value={data.mobile} onChange={inputHandler} required/>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <input type="email" className="form-control" placeholder="Enter email" name="email" value={data.email} onChange={inputHandler} required/>
      </div>
      <div className="col">
        <input type="password" className="form-control" placeholder="Enter password" name="password" value={data.password} onChange={inputHandler}  required/>
      </div>
      </div>
    
      <div className="row mt-3">
      <div className="col text-center ">
      <button type="submit" className="btn btn-primary">Submit</button>

    </div>
    </div>
  </form>
        </div>
        <div className='col-md-6 bestbus-121'>
          <div className='card11'>
          <img src={about_img}  alt=''/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
