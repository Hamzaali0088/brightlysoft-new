import Image from 'next/image'
import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import Button from '../../ui/Button'

const Hero = () => {
    return (
        <FullContainer className="h-screen w-full relative">
            <Image src="/st-images/hero.avif" alt="Hero" width={2400} height={2400} className='w-full h-full z-0 object-cover absolute top-0 left-0' />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 " />
            <Container className="relative z-10 h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center h-full w-full px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-[100px] font-bold text-white text-center drop-shadow-lg ">
                    Digital Brands with a Purpose.
                    </h1>
                    <Button href="/brands" text="Explore our brands" className='mt-8' />
                </div>
            </Container>
        </FullContainer>
    )
}

export default Hero