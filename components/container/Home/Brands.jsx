'use client'
import React, { useEffect, useRef } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Image from 'next/image'
import Heading from '../../common/Heading'

export default function Brands() {
    const brandsSlider1 = [
        {
            name: 'TechCorp',
            description: 'Leading technology solutions for modern businesses with innovative digital transformation.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
        },
        {
            name: 'InnovateLab',
            description: 'Cutting-edge research and development company specializing in breakthrough technologies.',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop'
        },
        {
            name: 'DigitalFlow',
            description: 'Streamlined digital solutions that optimize your business processes and boost productivity.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        },
        {
            name: 'CloudSync',
            description: 'Advanced cloud computing services for seamless data management and collaboration.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
        },
        {
            name: 'SmartGrid',
            description: 'Intelligent infrastructure solutions for sustainable energy and smart city development.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop'
        },
        {
            name: 'DataVault',
            description: 'Secure data storage and analytics platform for enterprise-level information management.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        },
        {
            name: 'CyberShield',
            description: 'Comprehensive cybersecurity solutions protecting your digital assets from modern threats.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
        },
        {
            name: 'QuantumLeap',
            description: 'Next-generation quantum computing research and development for future technologies.',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
        },
        {
            name: 'BioTech',
            description: 'Revolutionary biotechnology solutions advancing healthcare and life sciences.',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop'
        },
    ]

    const brandsSlider2 = [
        {
            name: 'GreenEnergy',
            description: 'Sustainable renewable energy solutions for a cleaner, greener future.',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop'
        },
        {
            name: 'FinTech Pro',
            description: 'Innovative financial technology solutions revolutionizing digital banking and payments.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        },
        {
            name: 'AI Solutions',
            description: 'Artificial intelligence and machine learning platforms for intelligent automation.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
        },
        {
            name: 'MobileFirst',
            description: 'Mobile-first development company creating exceptional user experiences across devices.',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
        },
        {
            name: 'HealthTech',
            description: 'Digital health solutions improving patient care and medical outcomes worldwide.',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop'
        },
        {
            name: 'EduTech',
            description: 'Educational technology platforms transforming learning experiences for students globally.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
        },
        {
            name: 'LogiChain',
            description: 'Supply chain optimization and logistics management for efficient business operations.',
            image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop'
        },
        {
            name: 'RetailTech',
            description: 'Next-generation retail technology solutions for modern shopping experiences.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        },
        {
            name: 'AutoDrive',
            description: 'Autonomous vehicle technology and smart transportation solutions for the future.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
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
                            brandsSlider1.map((brand, index) => (
                                <div key={index} className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center group justify-center border min-h-36 lg:min-h-48 xl:min-h-64 border-primary/20 rounded-lg overflow-hidden p-4 relative bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
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
                            brandsSlider2.map((brand, index) => (
                                <div key={index} className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col items-center group justify-center border min-h-36 lg:min-h-48 xl:min-h-64 border-primary/20 rounded-lg overflow-hidden p-4 relative bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
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
