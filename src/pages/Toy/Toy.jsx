import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Toy = ({ toy }) => {
    const { _id,image, price, rating, toyname } = toy || {};
    const {user}=useContext(AuthContext)
    const handlealert=()=>{
       if(!user){
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'You have to log in first to view details!',
          })
    }
    }
    
    return (
        <div className="card glass ms-4 me-4" >
            <figure><img  style={{ width: "100%", height: "300px" }} src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyname}</h2>
                <p>${price}</p>
                {/* <p>{rating}</p> */}
                <Rating
                      placeholderRating={rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                <div className="card-actions justify-end">
                    <Link to={`singleToy/${_id}`}>
                        <button onClick={()=>handlealert()} className="button">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;