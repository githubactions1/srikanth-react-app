import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import {useNavigate } from 'react-router-dom';

export default function Customer_edit() {
    const {CustomerId}=useParams();
    const [data,setData]=useState([])
   // this.setState({data: data.conversations});
   const redirect = useNavigate();

    
  const inputHandler=(e)=>{
    setData((preState)=>{
        return {
            ...preState,
            [e.target.name]:e.target.value
        }
    })
}

 useEffect((e)=>{
    const url=`http://slndegreecollegeatp.com/dev/webservices/apis/cus_my_profile/${CustomerId}`
    Axios.get(url)
    .then((res)=>setData(res.data))
    // console.log(data);
 },[CustomerId])


 const submitHandler=(e)=>{
  e.preventDefault();
  
  const url = `http://slndegreecollegeatp.com/dev/webservices/apis/update_user/${CustomerId}`
  Axios.put(url,data)
  .then(res=>console.log(res))
  console.log(data)
  // setData(null)
  // notyf.success('Updated successfully');
  redirect("/Customers")
}
 
  return (
    <div>
        <h2 className='text-center'>Customer Edit</h2>        
      


        
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
        <input type="text" className="form-control" placeholder="Enter password" name="password" value={data.password} onChange={inputHandler}  required/>
        </div>
        </div>

        <div className="row mt-3 text-center">
        <div className="col">
        <button type="submit" className="btn btn-primary">Submit</button>

        </div>
        </div>
        </form>
    </div>
  )
}
