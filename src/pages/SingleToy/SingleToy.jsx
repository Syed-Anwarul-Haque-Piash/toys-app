import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    console.log(toy)
    const {image,toyname,sellername,postedBy,category,price,rating,quantity,description}=toy;
    return (
        <div className="card  glass">
        <figure><img src={image} alt="car!"/></figure>
        <div className="card-body ms-10">
          <h2 className="card-title">Name: {toyname}</h2>
          <p>Description: {description}</p>
          <p>{sellername}</p>  
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    );
};

export default SingleToy;