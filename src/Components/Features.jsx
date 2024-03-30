import icon1 from '../assets/bannner/Vector (5).png'
import icon2 from '../assets/bannner/Vector (6).png'
import icon3 from '../assets/bannner/Vector (8).png'
import smallImage from '../assets/bannner/small2.png'
import smallImage1 from '../assets/bannner/smallicon1.png'
import smallImage2 from '../assets/bannner/smallicon2.png'
import smallImage3 from '../assets/bannner/smallicon3.png'

const Features = () => {
    return (
        <div id='about' className='font-graphik lg:py-20'>
            <section className="mx-auto max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full py-10">
                        <h2 className="text-3xl font-bold sm:text-5xl font-graphik">Featured</h2>

                        <p className="mt-4 hidden lg:block text-white text-lg lg:text-2xl">
                            Most calendars are designed for teams. <br />
                            Slate is designed for freelancers
                        </p>

                        <p className="mt-5 lg:hidden max-w-[250px] text-white  mx-auto lg:max-w-full lg:px-0 text-lg">
                            Most calendars are designed for teams.
                        </p>
                    </div>

                    <div className='lg:hidden w-full mx-auto'>
                        <img src={smallImage} alt="" className='w-full' />
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <div className="mt-8 grid grid-cols-1 gap-16 md:mt-16 md:grid-cols-2 md:gap-32 lg:grid-cols-3">
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon1} alt="" className='h-8 w-8 hidden lg:block' />
                                <img src={smallImage1} alt="" className='h-8 w-8' />
                                <h2 className="text-xl font-bold text-center">OpenType features Variable fonts</h2>
                                <p className="text-lg text-white text-center font-graphik">
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </p>
                            </div>
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon2} alt="" className='h-8 w-8 hidden lg:block' />
                                <img src={smallImage2} alt="" className='h-8 w-8' />
                                <h2 className="text-xl font-bold text-center">Fastest way to take action</h2>
                                <p className="text-lg text-white text-center">
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </p>
                            </div>
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon3} alt="" className='h-8 w-8 hidden lg:block' />
                                <img src={smallImage3} alt="" className='h-8 w-8' />
                                <h2 className="text-xl font-bold">Design with real data</h2>
                                <p className="text-lg text-white text-center">
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features