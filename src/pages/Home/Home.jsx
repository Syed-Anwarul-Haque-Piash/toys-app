import React from 'react';
import './Home.css';
import Toys from '../Toys/Toys';
import Gallery from '../../Gallery/Gallery';

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url('https://www.sparkadmissions.com/wp-content/uploads/2016/11/sports.jpg')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sports Fan!!!</h1>
          <p className="mb-5">Welcome to Legend, where imagination comes to life! Explore our vast collection of toys that will spark joy and ignite the creativity of children of all ages. From classic favorites to the latest trends, we have something for every little dreamer.</p>
          <button className=" button">Get Started</button>
        </div>
      </div>
    </div>
    <Gallery></Gallery>
    <Toys></Toys>
    </div>
  );
};

export default Home;