import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id,image, price, rating, toyname } = toy || {};
    return (
        <div className="card glass ms-4 me-4">
            <figure><img style={{ width: "100%", height: "300px" }} src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyname}</h2>
                <p>${price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`singleToy/${_id}`}>
                        <button className="button">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;