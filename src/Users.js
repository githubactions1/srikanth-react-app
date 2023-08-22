import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import Footer from './Footer';
// import { v4 as uuidv4 } from 'uuid';
import {useNavigate } from 'react-router-dom';
import Register from './Register';
import { useAuth } from './auth';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

export default function Users() {
    const [data,setData]=useState([])
    const [editData, setEditData] = useState(null);

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
    
  const {user}=useAuth();
    console.log(user);
    const redirect = useNavigate();

   useEffect((e)=>{
    Axios.get("http://slndegreecollegeatp.com/dev/webservices/apis/users_list")
    .then((res)=>setData(res.data))
 },[])

 const deleteHnadler=(e)=>{
  const url=`http://slndegreecollegeatp.com/dev/webservices/apis/users_delete/${e.id}`
  console.log(url)
  Axios.delete(url);
  notyf.success('Deleted successfully');
      redirect("/Users")

}

const editHandler=(data)=>{
  setEditData({...data, isEdit : true})
}
  return (
    <div>

<Register parentState={editData} edit={editData ? editData : ""}/>

        <div className='container text-center'>
            <div>
            <h2>Users List</h2>    
            </div>

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {

  data.map((e)=>(

    <tr>
      <th scope="row">{e.id}</th>
      <td>{e.name}</td>
      <td>{e.mobile}</td>
      <td>{e.email}</td>
      <td>
      <div> <button type="button" className='btn btn-danger btn-sm' onClick={()=>editHandler  (e)}>Edit</button> </div> <br/>
      <div> <button type="button" className='btn btn-danger btn-sm' onClick={()=>deleteHnadler(e)}><i className='material-icons'>&#xe872;</i></button></div>
        </td>
    </tr>
    ))

}
  </tbody>
</table>

        </div>



        <Footer/>

    </div>
  )
}
