import google from '../assets/bannner/google.png'
import ms from '../assets/bannner/ms.png'
import am from '../assets/bannner/am.png'
import uber from '../assets/bannner/ub.png'
import dropbox from '../assets/bannner/dbox.png'

const Partners = () => {
    return (
        <div className='bg-[#2091F9]'>
            <section className="mx-auto bg-[#252b42] max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full">
                        <h2 className="text-3xl sm:text-5xl">Partners</h2>

                        <p className="mt-4 text-white text-2xl pt-2">
                            Most calendars are designed for teams. <br /> Slate is designed for freelancers
                        </p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className="mt-8 grid gap-8 lg:gap-0 grid-cols-1 justify-center items-center md:mt-16 md:grid-cols-2 lg:grid-cols-4">
                            <img src={google} alt="" className='h-40 w-64' />
                            <img src={am} alt="" className='h-40 w-64' />
                            <img src={ms} alt="" className='h-40 w-64' />
                            <img src={uber} alt="" className='h-40 w-64 hidden lg:block' />
                            <img src={dropbox} alt="" className='h-40 w-64 hidden lg:block' />
                            <img src={google} alt="" className='h-40 w-64 hidden lg:block' />
                            <img src={uber} alt="" className='h-40 w-64 hidden lg:block' />
                            <img src={am} alt="" className='h-40 w-64 hidden lg:block' />
                        </div>
                    </div>
                    <div className="pt-5 flex justify-center items-center mt-10">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-blue-500 px-12 py-3 text-lg font-bold text-white transition focus:outline-none"
                        >
                            Try For Free
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partners