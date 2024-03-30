import React from 'react'
import image from '../assets/bannner/@ Macbook Pro.png'

const WayToOrganized = () => {
    return (
        <div id='product' className='max-w-7xl mx-auto lg:py-20 lg:pr-10 py-10'>
            <section className="overflow-hidden flex justify-between lg:flex-row flex-col items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl space-y-8 text-center lg:text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-medium text-white md:text-5xl">
                            Fastest way to <br />organize
                        </h2>

                        <p className="mt-4 hidden lg:block text-white text-lg lg:text-2xl">
                            Most calendars are designed for teams. <br />
                            Slate is designed for freelancers
                        </p>

                        <p className="mt-5 lg:hidden max-w-[250px] text-white mx-auto lg:max-w-full lg:px-0 text-lg">
                            Most calendars are designed for teams.
                        </p>

                        <div className="py-5 lg:pt-5 md:mt-8">
                            <a
                                href="#"
                                className="inline-block text-lg font-bold rounded-full bg-blue-500 px-12 py-3 text-white transition focus:outline-none"
                            >
                                Try For Free
                            </a>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[50%]'>
                    <img
                        alt=""
                        src={image}
                        className="h-full w-full object-cover px-5 mx-auto sm:h-full"
                    />
                </div>
            </section>
        </div>
    )
}

export default WayToOrganized