import React from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'

export default function Brands() {
    const brands = [
        {
            name: 'Brand 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
        {
            name: 'Brand 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            image: '/st-images/sitebuilderz.png'
        },
    ]
    return (
        <FullContainer className='py-12'>
            <Container>
                <div className='flex flex-col items-center justify-center py-12'>
                    <h1 className='text-4xl font-bold'>Our Brands</h1>
                    <p className='text-lg max-w-2xl text-center'>
                        We are a team of developers and designers who are passionate about creating digital products that are both functional and aesthetically pleasing.
                    </p>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        brands.map((brand, index) => (
                            <div key={index} className='flex flex-col items-center group justify-center border min-h-48 border-gray-300 rounded-lg overflow-hidden p-4 relative'>
                                <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='w-full h-full object-cover absolute  top-0 left-0 group-hover:scale-110 transition-all duration-700' />
                                <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'/>
                                <div className='relative z-10 text-white h-full w-full flex items-center justify-center transition-all duration-700'>
                                    <h2 className='text-2xl lg:text-3xl font-bold group-hover:hidden text-center'>{brand.name}</h2>
                                    <p className='text-lg hidden group-hover:block text-center text-white'>{brand.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </Container>
        </FullContainer>
    )
}
