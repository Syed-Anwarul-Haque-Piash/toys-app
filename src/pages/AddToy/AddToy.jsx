import React from 'react';

const AddToy = () => {
    return (
        <div>

            <form  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy" placeholder='Toy Name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller" placeholder='Seller' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder='Quantity' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <div className="input-group">
                            <select className="select select-bordered">
                                <option disabled selected>Sports car</option>
                                <option>Truck</option>
                                <option>Regilar Car</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Images</span>
                        </label>
                        <input type="text" name='image' placeholder='Image' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder='Price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder='Rating' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder='Description' className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddToy;