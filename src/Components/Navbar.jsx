import React, { useState } from 'react';
import icon1 from '../assets/bannner/Vector.png'
import icon2 from '../assets/bannner/Vector (1).png'
import icon3 from '../assets/bannner/Vector (2).png'
import logo from '../assets/bannner/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const menus = [
        { path: '/', route: 'home' },
        { path: '/product', route: 'product' },
        { path: '/pricing', route: 'pricing' },
        { path: '/about', route: 'about' },
        { path: '/contact', route: 'contact' },
    ]

    return (
        <div className='fixed left-0 right-0 mx-auto lg:w-[1210px] h-[100px] text-white flex justify-center items-center'>
            <div className='flex justify-between items-center w-full'>
                <ul className='hidden lg:flex justify-between items-center gap-10 text-lg capitalize'>
                    {
                        menus.map((menu, idx) =>
                            <li>{menu.route}</li>
                        )
                    }
                    <img src={logo} alt="" />
                </ul>
                <ul className='hidden lg:flex justify-center items-center gap-10'>
                    <img src={icon1} alt="" className='h-5 w-5' />
                    <img src={icon2} alt="" className='h-5 w-5' />
                    <img src={icon3} alt="" className='h-5 w-5' />
                </ul>
                <div className='flex justify-between items-center md:hidden w-full px-4'>
                    <img src={logo} alt="" />
                    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden cursor-pointer'>
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
            </div>

            {/* mobile view */}

            <ul className={`lg:hidden py-10 absolute text-white w-full h-screen space-y-5 bottom-0 top-20 left-0 pl-4
                duration-700 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                <div className=" flex justify-center items-center gap-10 flex-col">
                    <ul className='lg:hidden flex flex-col justify-between items-center gap-5 text-lg capitalize'>
                        {
                            menus.map((menu, idx) =>
                                <li>{menu.route}</li>
                            )
                        }
                    </ul>
                    <ul className='lg:hidden flex justify-center items-center gap-10'>
                        <img src={icon1} alt="" className='h-5 w-5' />
                        <img src={icon2} alt="" className='h-5 w-5' />
                        <img src={icon3} alt="" className='h-5 w-5' />
                    </ul>

                </div>
            </ul>

        </div>
    );
};

export default Navbar;
