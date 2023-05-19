import React from 'react';

const Free = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 bg-sky-900 ms-4 me-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl h-36 mt-2 mb-2 ms-2 me-2">
                <figure><img src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/1-2.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">FREE SHIPPING</h2>
                    <p>Don’t worry! The orders always arrive on time.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl h-36 mt-2 mb-2 ms-2 me-2">
                <figure><img src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/2-3.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">FREE RETURNS</h2>
                    <p>All returns are subject to verification of original sale.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl h-36 mt-2 mb-2 ms-2 me-2">
                <figure><img src="https://whiterabbit.axiomthemes.com/wp-content/uploads/2016/04/3-2.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">GIFT CARDS</h2>
                    <p>The perfect gift for everyone, it is a gift card.</p>

                </div>
            </div>
        </div>
    );
};

export default Free;