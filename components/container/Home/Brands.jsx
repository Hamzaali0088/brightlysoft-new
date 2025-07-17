import React, { useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Heading from '../../common/Heading'

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
    const sliderRef = useRef(null);
    const lastScrollY = useRef(0);
    const scrollInterval = useRef(null);
    const sliderRef2 = useRef(null);
    const lastScrollY2 = useRef(0);
    const scrollInterval2 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
            lastScrollY.current = currentScrollY;

            if (sliderRef.current) {
                // Clear any previous interval
                if (scrollInterval.current) {
                    clearInterval(scrollInterval.current);
                }
                // Scroll direction: down = right, up = left
                const scrollAmount = 5; // px per interval
                scrollInterval.current = setInterval(() => {
                    if (direction === 'down') {
                        sliderRef.current.scrollLeft += scrollAmount;
                    } else {
                        sliderRef.current.scrollLeft -= scrollAmount;
                    }
                }, 10);
            }
        };

        const handleScrollStop = () => {
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
            }
        };

        let scrollTimeout;
        const onScroll = () => {
            handleScroll();
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                handleScrollStop();
            }, 100);
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
            }
        };
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY2.current ? 'down' : 'up';
            lastScrollY2.current = currentScrollY;

            if (sliderRef2.current) {
                // Clear any previous interval
                if (scrollInterval2.current) {
                    clearInterval(scrollInterval2.current);
                }
                // Scroll direction: opposite to first slider
                const scrollAmount = 5; // px per interval
                scrollInterval2.current = setInterval(() => {
                    if (direction === 'down') {
                        sliderRef2.current.scrollLeft -= scrollAmount; // Move left when scrolling down
                    } else {
                        sliderRef2.current.scrollLeft += scrollAmount; // Move right when scrolling up
                    }
                }, 10);
            }
        };

        const handleScrollStop = () => {
            if (scrollInterval2.current) {
                clearInterval(scrollInterval2.current);
            }
        };

        let scrollTimeout;
        const onScroll = () => {
            handleScroll();
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                handleScrollStop();
            }, 100);
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (scrollInterval2.current) {
                clearInterval(scrollInterval2.current);
            }
        };
    }, []);

    return (
        <FullContainer className='py-12 bg-white'>
            <Container>
                <div className="text-start mb-16">
                   <Heading title="Our Brands" className="text-primary mb-6" />
                    <p className='text-lg max-w-2xl text-start text-secondary/80 '>
                        We are a team of developers and designers who are passionate about creating digital products that are both functional and aesthetically pleasing.
                    </p>
                </div>

                <div className='relative mb-12'>
                    <div ref={sliderRef} className='flex gap-4 overflow-x-auto scrollbar-hide p-8' style={{
                        scrollbarWidth: 'none',        // Firefox
                        msOverflowStyle: 'none',       // IE and Edge
                    }}>
                        {
                            brands.map((brand, index) => (
                                <div key={index} className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center group justify-center border min-h-48 lg:min-h-64 xl:min-h-80 border-primary/20 rounded-lg overflow-hidden p-4 relative bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                                    <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='w-full h-full object-cover absolute top-0 left-0 group-hover:scale-110 transition-all duration-700' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-secondary/80 z-10' />
                                    <div className='relative z-10 text-white h-full w-full flex items-center justify-center transition-all duration-700'>
                                        <h2 className='text-2xl lg:text-3xl font-bold group-hover:hidden text-center'>{brand.name}</h2>
                                        <p className='text-lg hidden group-hover:block text-center text-white'>{brand.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='relative '>
                    <div ref={sliderRef2} className='flex gap-4 overflow-x-auto scrollbar-hide pb-4 z-10' style={{
                        scrollbarWidth: 'none',        // Firefox
                        msOverflowStyle: 'none',       // IE and Edge
                    }}>
                        {
                            brands.map((brand, index) => (
                                <div key={index} className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center group justify-center border min-h-48 lg:min-h-64 xl:min-h-80 border-primary/20 rounded-lg overflow-hidden p-4 relative bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                                    <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='w-full h-full object-cover absolute top-0 left-0 group-hover:scale-110 transition-all duration-700' />
                                    <div className='absolute top-0 left-0 w-full h-full bg-secondary/80 z-10' />
                                    <div className='relative z-10 text-white h-full w-full flex items-center justify-center transition-all duration-700'>
                                        <h2 className='text-2xl lg:text-3xl font-bold group-hover:hidden text-center'>{brand.name}</h2>
                                        <p className='text-lg hidden group-hover:block text-center text-white'>{brand.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Container>
        </FullContainer>
    )
}
