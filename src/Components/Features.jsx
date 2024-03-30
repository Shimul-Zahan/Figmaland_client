import icon1 from '../assets/bannner/Vector.png'
import icon2 from '../assets/bannner/Vector (1).png'
import icon3 from '../assets/bannner/Vector (2).png'

const Features = () => {
    return (
        <div>
            <section className="mx-auto max-w-7xl text-white">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold sm:text-4xl">Featured</h2>

                        <p className="mt-4 text-white text-lg">
                            Most calendars are designed for teams. <br />
                            Slate is designed for freelancers
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        <div className="flex items-center flex-col justify-center gap-4">
                            <img src={icon1} alt="" className='h-8 w-8' />
                            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                            <p className="text-sm text-white text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                                possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                            </p>
                        </div>
                        <div className="flex items-center flex-col justify-center gap-4">
                            <img src={icon2} alt="" className='h-8 w-8' />
                            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                            <p className="text-sm text-white text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                                possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                            </p>
                        </div>
                        <div className="flex items-center flex-col justify-center gap-4">
                            <img src={icon3} alt="" className='h-8 w-8' />
                            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>
                            <p className="text-sm text-white text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                                possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features