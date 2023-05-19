import React from 'react';

const Delivery = () => {
    return (
        <div className='bg-green-500 grid grid-cols-1 grid-cols-4 mt-4'>
            <div className='m-6 p-6 text-white'>
                <h1 className='text-4xl font-bold hover:text-sky-700'>Fast Delivery</h1>
                <p className='font-bold mt-2'>Find tracking information and order details from Your Orders.</p>
            </div>
            <div  className='m-6 p-6 text-white'>
                <h1 className='text-4xl font-bold hover:text-sky-700'>Save Money</h1>
                <p className='font-bold mt-2'>Save $5 every year compared to the monthly plan by paying yearly.</p>
            </div>
            <div  className='m-6 p-6 text-white'>
                <h1 className='text-4xl font-bold hover:text-sky-700'>Fast Returns</h1>
                <p className='font-bold mt-2'>Money back. If the item didn’t suit you</p>
            </div>
            <div  className='m-6 p-6 text-white'>
                <h1 className='text-4xl font-bold hover:text-sky-700'>Online Supports</h1>
                <p className='font-bold mt-2'>Use our 24/7 customer hotline so you’re not alone if you have a question</p>
            </div>
        </div>
    );
};

export default Delivery;