'use client'
import React, { useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Heading from '../../common/Heading'
import Link from 'next/link'

export default function Brands() {
    const brandsSlider1 = [
        {
            name: 'Fashion',
            image: '/st-images/brands/fashion.png',
            href: 'https://fashion.amplifytest1.top'
        },
        {
            name: 'Magzine',
            image: '/st-images/brands/magzine.png',
            href: 'https://magzine.amplifytest1.top'
        },
        {
            name: 'BizzBlog',
            image: '/st-images/brands/bizzblog.png',
            href: 'https://bizzblog.amplifytest1.top'
        },
        {
            name: 'Koga',
            image: '/st-images/brands/koga.png',
            href: 'https://koga.amplifytest1.top'
        },
        {
            name: 'Isabelle Roche',
            image: '/st-images/brands/isabelleroche.png',
            href: 'https://isabelle-roche.amplifytest1.top/'
        },
        {
            name: 'Newspaper Pro',
            image: '/st-images/brands/newspaperpro.png',
            href: 'https://newspaperpro.amplifytest1.top'
        },
        {
            name: 'Local sanjose',
            image: '/st-images/brands/local.png',
            href: 'https://local-sanjose.amplifytest1.top'
        },
        {
            name: 'Local HVC',
            image: '/st-images/brands/hvc.png',
            href: 'https://httpsgithubcomavico-globalservice-next15-hvac.amplifytest1.top'
        },
        {
            name: 'Digital Spy',
            image: '/st-images/brands/digitalspy.png',
            href: 'https://blog-next14temp-3.amplifytest1.top'
        },
        {
            name: 'Towing',
            image: '/st-images/brands/towing.png',
            href: 'https://www.towing.com'
        },
        {
            name: 'Chronicle',
            image: '/st-images/brands/chronicle.png',
            href: 'https://chronicle.amplifytest1.top'
        },
        {
            name: 'Gamer',
            image: '/st-images/brands/gammer.png',
            href: 'https://katen.amplifytest1.top'
        },
        {
            name: 'Linx',
            image: '/st-images/brands/linxamplify.png',
            href: 'https://linx.amplifytest1.top'
        },
        {
            name: 'App Recipe Picks',
            image: '/st-images/brands/apprecipepicks.png',
            href: 'https://app.recipepicks.com/'
        },
        {
            name: 'Recipe Picks',
            image: '/st-images/brands/recipepicks.png',
            href: 'https://https://www.recipepicks.com/'
        },
        {
            name: 'Site Builderz',
            image: '/st-images/brands/sitebuilderz.png',
            href: 'https://www.sitebuilderz.com'
        },
    ]

    const sliderRef = useRef(null);
    const lastScrollY = useRef(0);
    const scrollInterval = useRef(null);

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

    return (
        <FullContainer className='py-12 lg:py-28 bg-white'>
            <Container>
                <div className="text-start mb-16">
                    <Heading title="Our Brands" className="text-primary mb-6" />
                    <p className='text-lg max-w-2xl text-start text-secondary/80 '>
                        We are a team of developers and designers who are passionate about creating digital products that are both functional and aesthetically pleasing.
                    </p>
                </div>

                <div className='relative'>
                    <div ref={sliderRef} className='flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide p-8' style={{
                        scrollbarWidth: 'none',        // Firefox
                        msOverflowStyle: 'none',       // IE and Edge
                    }}>
                        {
                            brandsSlider1.map((brand, index) => (
                                <Link href={brand.href} target='_blank' key={index} className='flex-shrink-0 w-full group  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[31%] flex flex-col items-center group justify-center min-h-36 lg:min-h-48 xl:min-h-64   rounded-lg overflow-hidden px-2 py-2 relative bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
                                    <Image src={brand.image} alt={brand.name} width={1000} height={1000} className='w-full h-full rounded-sm transition-all duration-700 aspect-3/2' />
                                    <div className='absolute top-0 left-0 w-full aspect-3/2 h-full group-hover:bg-secondary/60 z-10' />
                                    <div className='absolute bottom-0 left-0 z-10 text-white h-full w-full flex items-center justify-center transition-all duration-700'>
                                        <h2 className='text-2xl lg:text-3xl font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{brand.name}</h2>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}
