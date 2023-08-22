import React, { useEffect,useState } from 'react'
import Axios from 'axios';
// import Footer from './Footer';
// import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer';



export default function Customers() {
  const [data,setData]=useState([])
    // const [editData, setEditData] = useState(null);
    // const redirect = useNavigate();

  useEffect((e)=>{
    Axios.get("http://slndegreecollegeatp.com/dev/webservices/apis/users_list")
    .then((res)=>setData(res.data))
 },[])

 
 const deleteHnadler=(e)=>{
  const url=`http://slndegreecollegeatp.com/dev/webservices/apis/users_delete/${e.id}`
  console.log(url)
  Axios.delete(url);
  
  Axios.get("http://slndegreecollegeatp.com/dev/webservices/apis/users_list")
  .then((res)=>setData(res.data))
}

// const editHandler=(data)=>{
//   setEditData({...data, isEdit : true})
// }

  return (
    <div>

<div className='container text-center'>
            <div>
            <h2>Customers List</h2>
            <Link to='/Master' className='btn btn-primary'>Add</Link>
    
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
      <div>
      <Link to={`/Customers/${e.id}`} key={e.id}>
         <button type="button" className='btn btn-danger btn-sm'>Edit</button> 
        </Link>
         </div> <br/>
      <div> <button type="button" className='btn btn-danger btn-sm' onClick={()=>deleteHnadler(e)}><i className='material-icons'>&#xe872;</i></button></div>
        </td>
    </tr>
    ))

}
  </tbody>
</table>

        </div>



  <MapContainer/>
    </div>
  )
}
