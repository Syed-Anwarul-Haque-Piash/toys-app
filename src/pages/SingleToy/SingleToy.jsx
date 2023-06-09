import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {
  const toy = useLoaderData();
  useTitle('View Details');
  console.log(toy)
  const { image, toyname, sellername, postedBy, category, price, rating, quantity, description } = toy;
  return (
    <div className="card  glass">
      <figure><img style={{ width: "700px", height: "500px" }} src={image} alt="car!" /></figure>
      <div className="card-body ms-10">
        <h2 className="card-title">Name: {toyname}</h2>
        <p>Description: {description}</p>
        <p>Seller Name:{sellername}</p>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
        {/* <p>Rating: {rating}</p> */}
        <Rating
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar></FaRegStar>}
          placeholderSymbol={
            <FaStar className="text-warning"></FaStar>
          }
          fullSymbol={<FaStar></FaStar>}
        ></Rating>
        <p>Posted By : {postedBy}</p>
        <p>Quantity: {quantity}</p>
        {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div> */}
      </div>
    </div>
  );
};

export default SingleToy;