import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const Toys = () => {
    const [toys,setToys]=useState([]);
    const [active,setActive]=useState("Sports Car");
    useEffect(()=>{
        fetch('https://toy-market-server-sepia.vercel.app/alltoys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    console.log(active);
    return (
        <div >
            <h1 className='text-center text-7xl mt-4 mb-5'>Our Toys</h1>
            <div className='ms-7'>
            <button onClick={()=>setActive("Sports Car")} className='button mb-4 me-3'>Sports Car</button>
            <button onClick={()=>setActive("Truck")} className='button mb-4 me-3'>Truck</button>
            <button onClick={()=>setActive("regular Car")} className='button mb-4'>Regular Car</button>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {toys.map(toy=> toy.category === active && <Toy key={toy._id} toy={toy}></Toy>)}
            </div>
            
        </div>
    );
};

export default Toys;