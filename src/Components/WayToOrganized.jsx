import React from 'react'
import image from '../assets/bannner/@ Macbook Pro.png'

const WayToOrganized = () => {
    return (
        <div className='max-w-7xl mx-auto lg:py-20 pr-10'>
            <section className="overflow-hidden flex justify-between lg:flex-row flex-col items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl space-y-8 text-center lg:text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-medium text-white md:text-5xl">
                            Fastest way to <br />organize
                        </h2>

                        <p className="text-white md:mt-4 md:block text-2xl">
                            Most calendars are designed for teams. <br />Slate is designed for freelancers
                        </p>

                        <div className="pt-5 md:mt-8">
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
                        className="h-32 lg:w-full object-cover sm:h-full"
                    />
                </div>
            </section>
        </div>
    )
}

export default WayToOrganized