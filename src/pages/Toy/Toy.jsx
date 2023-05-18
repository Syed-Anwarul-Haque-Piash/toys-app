import React from 'react';

const Toy = ({ toy }) => {
    const { image, price, rating, toyname } = toy || {};
    return (
        <div className="card glass ms-4 me-4">
            <figure><img style={{width:"100%",height:"300px"}} src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyname}</h2>
                <p>${price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <button  className="button">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toy;