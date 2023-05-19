import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
//import { key } from 'localforage';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    const handleDelete=(id)=>{
        //console.log("deleted")
        const proceed=confirm("Are you sure you want to delete");
        if(proceed){
            fetch(`http://localhost:5000/mytoys/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('Deleted successfully');
                const remaining=toys.filter(toy=>toy?._id !== id);
                setToys(remaining);
            }
        })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                    <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy=>
                        
                        <tr>
                        
                        <th>{toy?.postedBy}</th>
                        <td>{toy?.toyname}</td>
                        <td>{toy?.category}</td>
                        <td>{toy?.price}</td>
                        <td>{toy?.quantity}</td>
                        <td>
                        {/* <Link to={`/updatetoys/${toy?._id}`}>
                        
                          <button className="btn btn-info">Update</button></Link> */}
                          <button className="btn btn-info">Update</button>
                        </td>
                        <td>
                        <button onClick={()=>handleDelete(toy?._id)} className="btn btn-error">Delete</button>
                        </td>
                    </tr>)}
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;