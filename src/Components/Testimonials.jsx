import image from '../assets/bannner/ibm.png'

const Testimonials = () => {
    return (
        <div>
            <section className="mx-auto max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold sm:text-4xl">Testimonials</h2>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <img src={image} alt="" className='h-full w-32 py-10' />
                        <p className="text-sm text-white text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                        </p>
                    </div>
                    <div className='flex justify-center items-center gap-4 pt-10'>
                        <img src={image} alt="" className='h-10 w-10 rounded-l-full' />
                        <div className=''>
                            <h1>Eleush Zahan</h1>
                            <h1>UI/UX Designer</h1>
                        </div>
                    </div>
                    <div className="pt-5 flex justify-center items-center mt-10">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-blue-500 px-12 py-3 text-sm font-medium text-white transition focus:outline-none"
                        >
                            More Testimonials
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials