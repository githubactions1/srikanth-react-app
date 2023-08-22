import React,{useState,useEffect} from 'react'
// import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import Footer from './Footer';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte



export default function Register(props) {

  
  const [data,setData]=useState({name:"",mobile:"",email:"",password:""})
  // const [isEdit, setIsEdit] =useState({name:"",mobile:"",email:"",password:""})

  const notyf = new Notyf({
    duration: 3000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'warning',
        background: 'green',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 3000,
        dismissible: true
      }
    ]
  });
  const redirect = useNavigate();
  
  useEffect(()=>{
    setData({
        name:props.edit.name ? props.edit.name : "",
        mobile:props.edit.mobile ? props.edit.mobile : "",
        email:props.edit.email ? props.edit.email : "",
        password:props.edit.password ? props.edit.password : "",
    })
},[props.edit])

  const inputHandler=(e)=>{
    setData((preState)=>{
        return {
            ...preState,
            [e.target.name]:e.target.value
        }
    })
}


// const options = {
//   headers: {
//     //'X-Custom-Header': 'value',
//     "Access-Control-Allow-Headers": "*", // this will allow all   CORS requests
//      "Access-Control-Allow-Methods": 'OPTIONS,POST,GET', // this states the allowed methods
//      "Content-Type": "application/json" // this shows the expected content type
//   }
//  };
  const submitHandler=(e)=>{
    e.preventDefault();

    if(!props.edit.isEdit){
  const header ={"Access-control-Allow-Orgin":"*"};
  // alert(JSON.stringify(data,null,3));
  // const data1=JSON.stringify(data,null,3);
    axios.post(`http://slndegreecollegeatp.com/dev/webservices/apis/insert_user`,{
      name: data.name,
      mobile:  data.mobile,
      email: data.email,
      password: data.password
    },header)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>console.log(err))
    //console.log(data)
    notyf.success('Added successfully');
    redirect("/Users")
        }else{
            // alert(JSON.stringify(data,null,3));

          const url = `http://slndegreecollegeatp.com/dev/webservices/apis/update_user/${props.edit.id}`
            axios.put(url,data)
            .then(res=>console.log(res))
            console.log(data)
            // setData(null)
            notyf.success('Updated successfully');
            redirect("/Users")
        }
  }

  return (
    <div className='mt-5'>
    <div className='container text-center mt-3'>
      <h2>Register Form</h2>

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
    
      <div className="row mt-3">
      <div className="col">
      <button type="submit" className="btn btn-primary">Submit</button>

    </div>
    </div>
  </form>
  </div>

    </div>
  )
}
