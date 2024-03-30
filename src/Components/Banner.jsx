import React from 'react';
import banner from '../assets/bannner/banner.png';
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className='w-full min-h-screen lg:min-h-[1000px]' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <Navbar />
            <div className="mx-auto max-w-2xl min-h-screen flex flex-col text-white justify-center items-center text-center">
                <h1 className="text-3xl font-extrabold sm:text-6xl leading-10">
                    The best products start with Figma
                </h1>

                <p className="mt-5 sm:text-2xl">
                    Most calendars are designed for teams. Slate is designed <br /> for freelancers
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        className="block w-full px-16 py-3 bg-white rounded-full text-lg font-medium text-[#2091F9] shadow focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                        href="#"
                    >
                        Try For Free
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
