import Image from 'next/image'
import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { Link } from 'react-scroll'
import { ChevronRightIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const Hero = () => {

    return (
        <>
        <FullContainer className="h-screen w-full relative font-montserrat">
            <Image src="/st-images/hero.avif" alt="Hero" width={2400} height={2400} className='w-full h-full z-0 object-cover absolute top-0 left-0' />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 via-secondary/80 to-secondary/50 z-10 " />
            <Container className="relative z-10 h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center h-full w-full px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-[100px] font-bold text-white text-center drop-shadow-lg ">
                        Digital Brands with a Purpose.
                    </h1>
                    <div>
                        <Link to="video" smooth={true} duration={1000} className="flex  flex-col text-sm group items-center gap-2 mt-8 py-2 hover:text-primary text-white font-medium cursor-pointer transition">
                          Learn More about us
                            <div className="ml-2 w-10 h-10 py-3 flex items-start justify-center border group-hover:translate-y-2 transition-all duration-500 group-hover:border-primary border-white/20 rounded-full">
                                <span className="text-2xl"><ChevronRightIcon className="w-4 h-4 rotate-90" /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </FullContainer>
        <FullContainer className="h-full pt-20 w-full relative ">
            <Container> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between h-full w-full px-4">
                    <h2 className={`text-2xl md:text-3xl lg:text-[40px] font-extrabold text-secondary text-left ${montserrat.className}`}>
                    WE'RE HOME TO BRANDS THAT IGNITE <span className="text-primary">PASSIONS</span>
                    </h2>
                    <p className={`text-secondary text-sm lg:text-base text-left ${montserrat.className}`}>
                    As a pioneering multiplatform media powerhouse, we provide expert content and technology that build valuable communities across all channels. Through our specialist websites, magazines, events, newsletters, and social spaces, we connect with 1 in 3 adults each month, making us a leading destination for passionate and high-intent audiences worldwide.
                    </p>
                </div>
            </Container>
        </FullContainer>
        </>
    )
}

export default Hero