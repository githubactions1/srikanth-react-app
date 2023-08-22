import React,{useEffect,useState} from 'react'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import axios from 'axios';
import Subdropdown from './Subdropdown';

export default function Main_cat() {


    const [maindata,setMaindata]=useState([])
    const [mainSelectValue, setMainSelectValue] = useState('');


    const handleMainSelectChange = event => {
        setMainSelectValue(event.target.value);
        // props.onCategoryChange(event.target.value);
    
      };
    
useEffect((e)=>{
    const url=`http://slndegreecollegeatp.com/dev/webservices/apis/main_categories_list`
    axios.get(url)
    .then((res)=>setMaindata(res.data))
    console.log(maindata);
  },[])



  return (
    <div>

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

    </div>
  )
}
