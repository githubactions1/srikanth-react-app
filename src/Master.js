import React,{useEffect,useState} from 'react'
// import Leftmenu from './Leftmenu'
// import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import Subdropdown from './Subdropdown';

export default function Master(props) {
  const [data,setData]=useState({name:"",mobile:"",email:"",password:"",main_category_id:""})
  const [maindata,setMaindata]=useState([])
  const [mainSelectValue, setMainSelectValue] = useState('');
  const [file, setFile] = useState();

  const redirect = useNavigate();


  const handleMainSelectChange = event => {
    setMainSelectValue(event.target.value);
    // props.onCategoryChange(event.target.value);

  };
  
  const inputHandler=(e)=>{
    setData((preState)=>{
        return {
            ...preState,
            [e.target.name]:e.target.value
        }
    })
}


function handleChange(e) {
  console.log(e.target.files);
  setFile(URL.createObjectURL(e.target.files[0]));
}


useEffect((e)=>{
  const url=`http://slndegreecollegeatp.com/dev/webservices/apis/main_categories_list`
  axios.get(url)
  .then((res)=>setMaindata(res.data))
  // console.log(data);
},[])

const submitHandler=(e)=>{
  e.preventDefault();
const header ={"Access-control-Allow-Orgin":"*"};
 alert(JSON.stringify(data,null,3));
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
  redirect("/Customers")
      
}

  return (
    <div>
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
        <div className="col">
            
        <select name="main_category_id"   value={mainSelectValue} className="form-control" id="main_category_id"  onChange={handleMainSelectChange}>
          
        <option value="">select</option>
        {maindata.map((es)=>(
                <option value={es.id}>{es.main_category_name}</option>
            ))
          }
        </select>
        </div>
        <div className="col">
            
            {mainSelectValue && <Subdropdown main_category_id={mainSelectValue} />}

            </div>
       
        
          <input type='hidden' name="main_category_value"  value={mainSelectValue} />
          <input type='hidden' name="sub_category_value"  value={mainSelectValue} />

          <div className="col"> 
          <input type="file" name="image" onChange={handleChange} />
          
            <img src={file}  className='inp-img' alt=''/>
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
