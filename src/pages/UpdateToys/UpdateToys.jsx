import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const update = useLoaderData();
    const { _id } = update;
    console.log(_id);
    console.log(update)
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/alltoys/${_id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            //console.log(data);

    };
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
                          defaultValue={update?.toyname}
                        />
                    </div>

                    <div className="form-control">
                        {/* <input type="text" {...register("Seller Name")} placeholder="Seller Name" name="name" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("sellername", { required: true })}
                            placeholder="Seller Name"
                          defaultValue={update?.sellername}
                        />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" {...register("price")} placeholder="Price" name="price" className="input input-bordered" /> */}
                        <input
                            className="input input-bordered"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="number"
                            defaultValue={update?.price}
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
                            defaultValue={update?.image}
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
                    <input className="button  mx-auto" value="Update Toy" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;