import image from '../assets/bannner/ibm.png'
import profile from '../assets/bannner/Ellipse 2.png'

const Testimonials = () => {
    return (
        <div className='bg-[#2091F9]'>
            <section className="mx-auto bg-[#252b42] max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-medium sm:text-4xl lg:pb-5">Testimonials</h2>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <img src={image} alt="" className='h-full w-32 py-10' />
                        <p className="text-white text-center text-lg py-4">
                            Most calendars are designed for teams. Slate is designed for freelancers <br /> who want a simple way to plan their schedule.
                        </p>
                    </div>
                    <div className='flex justify-center items-center gap-4 pt-10'>
                        <img src={profile} alt="" className='h-10 w-10 rounded-l-full' />
                        <div className='text-base'>
                            <h1>Eleush Zahan</h1>
                            <h1>UI/UX Designer</h1>
                        </div>
                    </div>
                    <div className="pt-5 flex justify-center items-center mt-10">
                        <a
                            className="inline-block rounded-full cursor-pointer bg-blue-500 px-12 py-3 text-lg font-bold text-white transition focus:outline-none"
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