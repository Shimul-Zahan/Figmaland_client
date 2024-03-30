import image from '../assets/bannner/undraw_newsletter_vovu.png'

const Lightning = () => {
    return (
        <div className='max-w-7xl mx-auto lg:py-20 lg:pr-10 py-16'>
            <section className="overflow-hidden flex justify-between lg:flex-row-reverse flex-col items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl space-y-4 text-center lg:text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-white font-bold md:text-lg">
                            At your fingertips
                        </h2>

                        <p className="text-white hidden md:block text-5xl pb-4">
                            Lightning fast <br /> prototyping
                        </p>
                        <p className="text-white md:hidden text-4xl pb-4">
                            Newsletter
                        </p>

                        <div className='hidden lg:block'>
                            <p className="text-white font-bold md:block text-lg">
                                Subscribe to our Newsletter
                            </p>
                            <p className="text-white md:block font-thin text-base">
                                Available exclusivery on Figmaland
                            </p>
                        </div>
                        <p className="mt-5 lg:hidden max-w-[250px] text-white mx-auto lg:max-w-full lg:px-0 text-lg">
                            Most calendars are designed for teams.
                        </p>

                        <div className="pt-5 hidden lg:flex justify-start lg:flex-row flex-col items-center gap-5">
                            <input type="email" className="inline-block text-black text-base placeholder:text-black rounded-full bg-white px-8 py-3 font-medium transition focus:outline-none" placeholder='Your Email' />
                            <a
                                href="#"
                                className="inline-block w-full rounded-full bg-blue-500 px-8 py-3 text-lg font-bold text-white transition focus:outline-none"
                            >
                                Try For Free
                            </a>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[50%] px-5 lg:px-0'>
                    <img
                        alt=""
                        src={image}
                        className="h-full w-full"
                    />
                </div>
                <div className='block pt-16 lg:hidden'>
                    <p className="text-white font-bold md:block text-lg">
                        Subscribe to our Newsletter
                    </p>
                    <p className="text-white md:block font-thin text-base">
                        Available exclusivery on Figmaland
                    </p>
                </div>
                <div className="pt-8 lg:hidden flex justify-start lg:flex-row flex-col items-center gap-5">
                    <input type="email" className="inline-block text-black text-base placeholder:text-black rounded-full bg-white px-8 py-3 font-medium transition focus:outline-none" placeholder='Your Email' />
                    <a
                        href="#"
                        className="inline-block w-full rounded-full bg-blue-500 px-8 py-3 text-lg font-bold text-white transition focus:outline-none"
                    >
                        Try For Free
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Lightning