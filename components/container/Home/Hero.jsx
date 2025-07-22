import Image from 'next/image'
import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { Link } from 'react-scroll'
import { ArrowDown, ChevronRightIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const Hero = () => {

    return (
        <>
        <FullContainer className={`h-screen max-h-[670px] w-full relative font-montserrat ${montserrat.className}`}>
            <Image src="/st-images/hero.jpeg" alt="Hero" width={2400} height={2400} className='w-full h-full z-0 object-cover absolute top-0 left-0' />
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/0 z-10 " />
            <Container className="relative z-10 h-full flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center h-full w-full px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-[85px] lg:leading-[100px] font-bold text-white text-center drop-shadow-xl lg:mt-32">
                        Digital Brands with a Purpose.
                    </h1>
                    <div className=''>
                        <Link to="video" smooth={true} duration={1000} className="flex  flex-col text-sm lg:text-base group items-center gap-8 mt-8 lg:pt-6 py-2 hover:text-primary text-white font-medium cursor-pointer transition">
                          Learn More about us
                            <div className="ml-2 p-1 flex items-start justify-center border group-hover:translate-y-2 transition-all duration-500 group-hover:border-primary border-white rounded-full">
                                <span className="text-2xl"><ArrowDown className="w-6 h-6 lg:w-8 lg:h-8" /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </FullContainer>
        <FullContainer className="h-full pt-20 w-full relative ">
            <Container className="py-0 lg:py-12"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between h-full w-full">
                    <h2 className={`text-2xl md:text-3xl lg:text-[40px] font-extrabold text-secondary text-left ${montserrat.className}`}>
                    WE'RE HOME TO BRANDS THAT IGNITE <span className="text-primary">PASSIONS</span>
                    </h2>
                    <p className={`text-secondary text-sm lg:text-[17px] text-left ${montserrat.className}`}>
                    As a pioneering multiplatform media powerhouse, we provide expert content and technology that build valuable communities across all channels. Through our specialist websites, magazines, events, newsletters, and social spaces, we connect with 1 in 3 adults each month, making us a leading destination for passionate and high-intent audiences worldwide.
                    </p>
                </div>
            </Container>
        </FullContainer>
        </>
    )
}

export default Hero