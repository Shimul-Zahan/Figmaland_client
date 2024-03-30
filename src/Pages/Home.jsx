import React from 'react'
import Banner from '../Components/Banner'
import Pricing from '../Components/Pricing'
import Features from '../Components/Features'
import Video from '../Components/Video'
import WayToOrganized from '../Components/WayToOrganized'
import Contactus from '../Components/Contactus'
import Lightning from '../Components/Lightning'
import Partners from '../Components/Partners'
import Testimonials from '../Components/Testimonials'

const Home = () => {
    return (
        <div className='bg-[#252b42] w-full h-full'>
            <Banner />
            <Features />
            <Video />
            <WayToOrganized />
            <Lightning />
            <Partners />
            <Testimonials />
            <Pricing />
            <Contactus />
        </div>
    )
}

export default Home