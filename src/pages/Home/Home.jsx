import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url('https://www.sparkadmissions.com/wp-content/uploads/2016/11/sports.jpg')` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sports Fan!!!</h1>
            <p className="mb-5">Welcome to Legend, where imagination comes to life! Explore our vast collection of toys that will spark joy and ignite the creativity of children of all ages. From classic favorites to the latest trends, we have something for every little dreamer.</p>
            <button className="btn btn-primary button">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;