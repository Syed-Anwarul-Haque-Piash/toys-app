import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (


        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-4 me-4">
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="form-control">
                        {/* <input type="text" {...register("Toy Name")} placeholder="Toy Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("toyname")}
                            placeholder="Toy Name"
                        //   defaultValue="Web developer"
                        />
                    </div>

                    <div className="form-control">
                        {/* <input type="text" {...register("Seller Name")} placeholder="Seller Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("sellername", { required: true })}
                            placeholder="Seller Name"
                        // defaultValue="30k"
                        />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" {...register("price")} placeholder="Price" name="price" className="input input-bordered" /> */}
                        <input
                    className="input input-bordered"
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                />
                    </div>
                    <div className="form-control">
                        <select className="input input-bordered" {...register("category")}>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Truck">Truck</option>
                            <option value="regular Car">Regular Car</option>

                        </select>
                    </div>


                    <div className="form-control">
                        {/* <input type="text" {...register("image")} placeholder="Image" name="image" className="input input-bordered" /> */}
                        <input
                    className="input input-bordered"
                    {...register("image")}
                    placeholder="Image Link"
                    type="url"
                    defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("rating")}
                            placeholder="Rating"
                            type="text"
                        />
                    </div>
                    <div className="form-control">
                        {/* <input type="text-input" {...register("email")} placeholder="Email" type="email" className="input input-bordered" /> */}
                        <input
                    className="input input-bordered"
                       value={user?.email}
                    {...register("postedBy")}
                    placeholder="your email"
                    type="email"
                />
            
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("quantity")}
                            placeholder="Quantity"
                            type="text"
                        />
                    </div>
                    <input
                        className="input input-bordered"
                        {...register("description")}
                        placeholder="description"
                    />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary  mx-auto" value="Add a Toy" type="submit" />
                </div>
            </form>
        </div>




    );
};

export default AddToy;