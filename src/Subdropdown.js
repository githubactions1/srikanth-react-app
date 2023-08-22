import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subdropdown = ({main_category_id}) => {
  console.log(2);
  console.log({main_category_id});
  const [data, setData] = useState([]);

  
  useEffect((e)=>{
    
    const header ={"Access-control-Allow-Orgin":"*"};
    // alert(main_category_id);
    // const data1=JSON.stringify(data,null,3);
    //const mainSelectValue=2;
      axios.post(`http://slndegreecollegeatp.com/dev/webservices/apis/sub_categories_list`,{
        "main_category_id":main_category_id
      },header)
      .then((res)=>setData(res.data))
      .catch(err=>console.log(err))
     })
    

  return (
    <select name="cars" id="cars" className="form-control" >
    <option value="">select</option>
    {data.map((es)=>(
                <option key={es.id} value={es.id}>{es.sub_category_name}</option>
            ))
          }    
    </select>
    
  );
};

export default Subdropdown;
