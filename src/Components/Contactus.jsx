import React from 'react'
import icon1 from '../assets/bannner/Vector.png'
import icon2 from '../assets/bannner/Vector (1).png'
import icon3 from '../assets/bannner/Vector (2).png'

const Contactus = () => {
    return (
        <div className='bg-[#2091F9]'>
            <div className="py-24 bg-[#252b42] max-w-7xl mx-auto">

                <h1 className="text-center text-2xl font-semibold text-white">Contact us</h1>
                <p className='text-center text-white'>Heres Details</p>
                <div className="grid md:grid-cols-2 gap-16 justify-between items-center relative overflow-hidden p-10  rounded-3xl max-w-7xl mx-auto my-6 ">
                    <div className="p-4 py-6 rounded-lg bg-white dark:bg-gray-800 md:p-8 shadow-lg">
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
                                    className="block w-full h-16 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 bg-gray-50 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button className=" px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white rounded-full bg-blue-400">
                                Send
                            </button>
                        </form>
                    </div>


                    <div className="relative h-full max-md:min-h-[350px] w-full">

                        {/* contract information */}
                        <div className="flex gap-5">
                            <div>
                                <ul className='flex justify-center w-full items-start lg:items-start text-white gap-10'>
                                    <li className='flex lg:justify-center flex-col items-center gap-3'>
                                        <img src={icon1} alt="" className='h-5 w-5' />
                                        <h1 className='text-center'>6386 Spring St undefined Anchorage, <br /> Georgia 12473 United States</h1>
                                    </li>
                                    <li className='flex lg:justify-center flex-col items-center gap-3'>
                                        <img src={icon2} alt="" className='h-5 w-5' />
                                        <h1>(239) 555-0108</h1>
                                    </li>
                                    <li className='flex lg:justify-center flex-col items-center gap-3'>
                                        <img src={icon1} alt="" className='h-5 w-5' />
                                        <h1>(239) 555-0108</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* this is map /} {/ Google Map  */}
                        <div className="p-10"> <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="left-0 top-0 h-[300px] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                            allowfullscreen></iframe>

                        </div>

                        {/* social icon  */}
                        <div className="flex gap-3">
                            <ul className='flex justify-center items-center gap-5'>
                                <img src={icon1} alt="" className='h-5 w-5' />
                                <img src={icon2} alt="" className='h-5 w-5' />
                                <img src={icon3} alt="" className='h-5 w-5' />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus