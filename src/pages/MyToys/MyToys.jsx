import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const {user}=useContext(AuthContext);
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[user])
    return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
      
      
      
      
      
      
     
    
     
      
    </tbody> 
   
  </table>
</div>
    );
};

export default MyToys;