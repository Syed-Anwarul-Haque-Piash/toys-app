import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys);

    //const {postedBy,toyname,category,price,quantity}=allToys;
    return (
        <div className="overflow-x-auto container">
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
                    {allToys.map(toy =>
                        <tr>
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