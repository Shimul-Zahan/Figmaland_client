import React from 'react'
import icon1 from '../assets/bannner/tw.png'
import icon2 from '../assets/bannner/fb.png'
import icon3 from '../assets/bannner/ld.png'
import icon4 from '../assets/bannner/lc.png'
import icon5 from '../assets/bannner/phn.png'
import icon6 from '../assets/bannner/msg.png'

const Contactus = () => {
    return (
        <div id='contact' className='bg-[#2091F9]'>
            <div className="py-24 bg-[#252b42] max-w-7xl mx-auto">
                <h1 className="text-center text-5xl font-medium text-white">Contact us</h1>
                <p className="mt-4 hidden lg:block text-center text-white text-lg lg:text-2xl">
                    Most calendars are designed for teams. <br />
                    Slate is designed for freelancers
                </p>

                <p className="mt-5 lg:hidden max-w-[250px] text-center text-white  mx-auto lg:max-w-full lg:px-0 text-lg">
                    Most calendars are designed for teams.
                </p>

                <div className="flex lg:hidden gap-3 pt-10">
                    <ul className='flex justify-center lg:justify-start items-center w-full gap-5'>
                        <img src={icon1} alt="" className='h-6 w-6' />
                        <img src={icon2} alt="" className='h-6 w-6' />
                        <img src={icon3} alt="" className='h-6 w-6' />
                    </ul>
                </div>
                <div className="lg:hidden flex gap-5 py-10">
                    <div className='w-full'>
                        <ul className='flex justify-start flex-col items-start px-16 lg:flex-row w-full lg:items-start text-white gap-10'>
                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                <img src={icon4} alt="" className='h-8 w-6' />
                                <h1 className='text-base'>6386 Spring St undefined Anchorage, <br /> Georgia 12473 United States</h1>
                            </li>
                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                <img src={icon5} alt="" className='h-7 w-6' />
                                <h1 className='text-base'>(239) 555-0108</h1>
                            </li>
                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                <img src={icon6} alt="" className='h-6 w-6' />
                                <h1 className='text-base'>(239) 555-0108</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center w-full'>
                        <div className="grid md:grid-cols-2 gap-16 lg:justify-between items-center relative overflow-hidden w-full justify-center lg:p-10  rounded-3xl max-w-7xl mx-auto my-6 ">
                            <div className="p-4 py-6 rounded-lg bg-white w-[400px] lg:w-full dark:bg-gray-800 md:p-8 shadow-lg">
                                <form>
                                    <div className="mt-4">

                                        <input
                                            type="email"
                                            placeholder="Your Name"
                                            className="block w-full px-5 rounded-full py-2.5 mt-2 text-black placeholder-gray-400 border border-gray-200 bg-gray-50"
                                        />
                                    </div>

                                    <div className="mt-6">

                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="block w-full px-5 rounded-full py-2.5 mt-2 text-black placeholder-gray-400 border border-gray-200 bg-gray-50"
                                        />
                                    </div>

                                    <div className="w-full mt-6">
                                        <textarea
                                            className="block w-full h-52 lg:h-48 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 bg-gray-50 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>

                                    <button className=" px-12 py-3 mt-4 text-lg  font-bold tracking-wide text-white rounded-full bg-blue-400">
                                        Send
                                    </button>
                                </form>
                            </div>


                            <div className="relative h-full max-md:min-h-[350px] w-full">

                                {/* contract information */}
                                <div className="hidden lg:flex gap-5">
                                    <div className='w-full'>
                                        <ul className='flex justify-center flex-col items-center lg:flex-row w-full lg:items-start text-white gap-10'>
                                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                                <img src={icon4} alt="" className='h-8 w-6' />
                                                <h1 className='text-center text-xs'>6386 Spring St undefined Anchorage, <br /> Georgia 12473 United States</h1>
                                            </li>
                                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                                <img src={icon5} alt="" className='h-7 w-6' />
                                                <h1 className='text-center text-xs'>(239) 555-0108</h1>
                                            </li>
                                            <li className='flex lg:justify-center flex-row lg:flex-col items-center gap-3'>
                                                <img src={icon6} alt="" className='h-6 w-6' />
                                                <h1 className='text-center text-xs'>(239) 555-0108</h1>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* this is map /} {/ Google Map  */}
                                <div className="py-10 w-full">
                                    <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="left-0 top-0 h-[300px] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        allowfullscreen></iframe>

                                </div>

                                {/* social icon  */}
                                <div className="hidden lg:flex gap-3">
                                    <ul className='flex justify-center lg:justify-start items-center w-full gap-5'>
                                        <img src={icon1} alt="" className='h-6 w-6' />
                                        <img src={icon2} alt="" className='h-6 w-6' />
                                        <img src={icon3} alt="" className='h-6 w-6' />
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus