import React,{useState} from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from './auth';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

export default function Login() {
  const redirect = useNavigate();

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

  const [data,setData]=useState({username:"",password:""})

  const {login,user}=useAuth();
  if(user != null){
    return <Navigate to="/Home" />
}  
  const inputHandler=(e)=>{
    setData((preState)=>{
        return {
            ...preState,
            [e.target.name]:e.target.value
        }
    })
}

const submitHandler=(e)=>{
  e.preventDefault();
  // alert(JSON.stringify(data, null, 3))
  if(data.username !== 'srikanth')
  {
    notyf.error('Plase Enter Valid username');

  }else if(data.password !== '123456'){
    notyf.error('Plase Enter Valid password');

  }else{
    login(data.username);
    notyf.success('Login successfully');
    redirect('/Users',{replace:true})
  }

}


  return (
    <div>
      
<div className="container mt-5">
  <div className='row text-center  reg-form'>
  <h2>Login form</h2>

  <form onSubmit={submitHandler}>
    <div className="col-md-6 mt-3 mr-250">
      <input type="text" className="form-control" id="email"  placeholder="Enter email" name="username" value={data.username} onChange={inputHandler} required/>
    </div>
    <div className="col-md-6 mt-3 mr-250">
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={data.password} onChange={inputHandler} required/>
    </div>
    <button type="submit" className="btn btn-primary mt-5">Submit</button>
  </form>
</div>
</div>
    <Footer/>
    </div>
  )
}
