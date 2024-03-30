import icon1 from '../assets/bannner/Vector (5).png'
import icon2 from '../assets/bannner/Vector (6).png'
import icon3 from '../assets/bannner/Vector (8).png'

const Features = () => {
    return (
        <div className='font-graphik lg:py-20'>
            <section className="mx-auto max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold sm:text-5xl">Featured</h2>

                        <p className="mt-4 text-white text-2xl">
                            Most calendars are designed for teams. <br />
                            Slate is designed for freelancers
                        </p>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-32 lg:grid-cols-3">
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon1} alt="" className='h-8 w-8' />
                                <h2 className="text-xl font-bold text-center">OpenType features Variable fonts</h2>
                                <p className="text-lg text-white text-center font-graphik">
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </p>
                            </div>
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon2} alt="" className='h-8 w-8' />
                                <h2 className="text-xl font-bold">Fastest way to take action</h2>
                                <p className="text-lg text-white text-center">
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </p>
                            </div>
                            <div className="flex items-center flex-col justify-center gap-4 max-w-[250px]">
                                <img src={icon3} alt="" className='h-8 w-8' />
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