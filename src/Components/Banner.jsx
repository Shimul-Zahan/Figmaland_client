import React from 'react';
import banner from '../assets/bannner/banner.png';
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className='w-full min-h-screen lg:min-h-[1000px]' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <Navbar />
        </div>
    );
};

export default Banner;
