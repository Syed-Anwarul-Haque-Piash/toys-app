import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { key } from 'localforage';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    const handleDelete=(id)=>{
        console.log("deleted")
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