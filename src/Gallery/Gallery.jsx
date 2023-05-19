import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-6xl mt-4 mb-4'>Our Gallery</h1>
            <div className="avatar grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
                <div className="w-96 mask mask-hexagon">
                    <img src="https://media.istockphoto.com/id/1162019476/photo/boy-and-dog-in-toy-racing-car.jpg?s=612x612&w=0&k=20&c=q4VZNxBRnpl9gHv3om30YhAKGOyKmTzPV0eSoHGCfGo="/>
                </div>
                <div className="w-96 mask mask-hexagon">
                    <img src="https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4="/>
                </div>
                <div className="w-96 mask mask-hexagon">
                    <img src="https://media.istockphoto.com/id/1266251640/photo/cute-baby-girl-in-electric-toy-car.jpg?s=612x612&w=0&k=20&c=qd4V0DCVckWcob5vz9GxDiMBCS-ekZD7qLXxSbV_Ixw="/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;