import image from '../assets/bannner/undraw_newsletter_vovu.png'

const Lightning = () => {
    return (
        <div className='max-w-7xl mx-auto lg:py-20 pr-10'>
            <section className="overflow-hidden flex justify-between lg:flex-row-reverse flex-col items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl space-y-8 text-center lg:text-start ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-white font-bold md:text-lg">
                            At your fingertips
                        </h2>

                        <p className="text-white md:block text-5xl">
                            Lightning fast <br /> prototyping
                        </p>
                        <div className=''>
                            <p className="text-white font-bold md:block text-lg">
                                Subscribe to our Newsletter
                            </p>
                            <p className="text-white md:block font-thin text-base">
                                Available exclusivery on Figmaland
                            </p>
                        </div>

                        <div className="pt-5 flex justify-start lg:flex-row flex-col items-center gap-5">
                            <input type="email" className="inline-block text-black text-base placeholder:text-black rounded-full bg-white px-12 py-3 font-medium transition focus:outline-none" placeholder='Your Email' />
                            <a
                                href="#"
                                className="inline-block rounded-full bg-blue-500 px-12 py-3 text-sm font-medium text-white transition focus:outline-none"
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

export default Lightning