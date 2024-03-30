import React from 'react'

const Pricing = () => {
    return (
        <div className=''>
            <div className="max-w-screen-xl bg-[#252b42] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="text-center w-full pt-10 pb-20">
                    <h2 className="text-3xl font-medium sm:text-5xl text-white">Pricing</h2>

                    <p className="mt-4 text-white text-2xl py-2">
                        Most calendars are designed for teams. <br /> Slate is designed for freelancers
                    </p>
                </div>
                <div className="flex justify-center flex-col lg:flex-row items-center gap-10">
                    <div className="rounded-2xl border lg:h-[600px] bg-white flex flex-col justify-center items-center border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-bold text-black text-center">
                                FREE
                                <span className="sr-only font-medium">Plan</span>
                            </h2>

                            <p className="pt-5 text-black text-center">Organize across all <br /> apps by hand</p>

                            <p className="pt-4 sm:mt-4 flex justify-center items-center gap-1">
                                <h1 className="text-6xl font-bold text-black text-center"> 0 </h1>

                                <div>
                                    <h1 className='text-lg font-bold'>$</h1>
                                    <h1 className='text-base font-medium'>Per Month</h1>
                                </div>
                            </p>
                        </div>
                        <div className="pb-6 sm:px-8">
                            <ul className="mt-2 space-y-2 sm:mt-4 text-center">
                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> 10 users </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> 2GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Community access </span>
                                </li>
                            </ul>
                            <a
                                className="mt-4 block rounded-full border border-indigo-600 bg-indigo-600 px-16 py-3 text-center text-lg font-bold text-white hover:bg-transparent cursor-pointer sm:mt-6 hover:bg-indigo-600"
                            >
                                Get Started
                            </a>
                        </div>

                    </div>

                    <div className="rounded-2xl border lg:h-[650px] bg-[#2091F9] flex flex-col justify-center items-center border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-bold text-white text-center">
                                STANDARD
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-5 text-white text-center">Organize across <br /> all apps by hand</p>

                            <p className="pt-5 sm:mt-4 text-center">
                                <strong className="text-6xl font-bold text-white text-center"> 20$ </strong>

                                <span className="text-sm font-medium text-white text-center">/month</span>
                            </p>
                        </div>
                        <div className="p-6 sm:px-8">
                            <ul className="mt-2 space-y-2 sm:mt-4 text-center">
                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-white text-center"> 10 users </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-white text-center"> 2GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-white text-center"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-white text-center"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-white text-center"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-white text-center"> Community access </span>
                                </li>
                            </ul>
                            <a
                                className="mt-8 block rounded-full border  bg-white text-[#2091F9] px-16 py-3 text-center text-lg font-bold"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                    </div>

                    <div className="rounded-2xl border lg:h-[600px] bg-white flex flex-col justify-center items-center border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-bold text-black text-center">
                                BUSINESS
                                <span className="sr-only font-medium">Plan</span>
                            </h2>

                            <p className="pt-5 text-black text-center">Organize across <br /> all apps by hand</p>

                            <p className="pt-4 sm:mt-4 flex justify-center items-center gap-1">
                                <h1 className="text-6xl font-bold text-black text-center"> 99 </h1>

                                <div>
                                    <h1 className='text-lg font-bold'>$</h1>
                                    <h1 className='text-base font-medium'>Per Month</h1>
                                </div>
                            </p>
                        </div>
                        <div className="pb-6 sm:px-8">
                            <ul className="mt-2 space-y-2 sm:mt-4 text-center">
                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> 10 users </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> 2GB of storage </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-black text-center"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Phone support </span>
                                </li>

                                <li className="flex items-center gap-1 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span className="text-black text-center"> Community access </span>
                                </li>
                            </ul>
                            <a
                                className="mt-4 block rounded-full border border-indigo-600 bg-indigo-600 px-16 py-3 text-center text-lg font-bold text-white hover:bg-transparent cursor-pointer sm:mt-6 hover:bg-indigo-600"
                            >
                                Get Started
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing