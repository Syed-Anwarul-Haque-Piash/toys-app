import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    // const allToys = useLoaderData();
    // console.log(allToys);
    const [searchValue,setSearchvalue]=useState('');
    const [allData,setAllData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllData(data)
        })
    },[])
    const handleSearch=()=>{
       fetch(`http://localhost:5000/search/${searchValue}`)
       .then(res=>res.json())
       .then(data=>{
        setAllData(data)
        console.log(data)
       })
    }

    //const {postedBy,toyname,category,price,quantity}=allToys;
    return (

        <div className="overflow-x-auto container flex flex-col justify-center mx-auto">
            <div className="form-control flex justify-center mx-auto">
                <div className="input-group  mt-4 mb-4">
                    <input type="text" onChange={(e)=>setSearchvalue(e.target.value)} placeholder="Search…" className="input input-bordered" />
                    <button onClick={()=>handleSearch()} className="btn btn-square bg-sky-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <table className="table table-compact w-full ms-4">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {allData.map(toy =>
                        <tr key={toy?._id}>
                            <th>{toy?.sellername}</th>
                            <td>{toy?.toyname}</td>
                            <td>{toy?.category}</td>
                            <td>{toy?.price}</td>
                            <td>{toy?.quantity}</td>
                            <td>{console.log(toy._id)}
                                <Link to={`/singleToy/${toy._id}`}>
                                    <button className="button">View Details</button>
                                </Link>
                            </td>

                        </tr>)}

                </tbody>

            </table>
        </div>
    );
};

export default AllToys;