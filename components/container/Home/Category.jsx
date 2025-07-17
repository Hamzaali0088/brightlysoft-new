import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading from '../../common/Heading'
import Image from 'next/image'

const Category = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      id: 'all',
      name: 'All Brands',
      count: 24
    },
    {
      id: 'media',
      name: 'Media',
      count: 8
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      count: 6
    },
    {
      id: 'tools',
      name: 'Tools',
      count: 5
    },
    {
      id: 'technology',
      name: 'Technology',
      count: 3
    },
    {
      id: 'education',
      name: 'Education',
      count: 2
    }
  ]

  const allBrands = [
    // Media Brands
    {
      id: 1,
      name: 'StreamFlow',
      description: 'Next-generation streaming platform for content creators',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'PixelPress',
      description: 'Professional photo editing and digital art creation',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'VideoVault',
      description: 'Cloud-based video storage and sharing platform',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'AudioWave',
      description: 'High-quality audio production and podcasting tools',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'DesignHub',
      description: 'Collaborative design platform for creative teams',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'ContentCraft',
      description: 'AI-powered content creation and optimization',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'SocialSync',
      description: 'Multi-platform social media management suite',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'MediaMatrix',
      description: 'Advanced analytics for media performance tracking',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    },
    // Lifestyle Brands
    {
      id: 9,
      name: 'FitFlow',
      description: 'Personalized fitness tracking and workout planning',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 10,
      name: 'WellnessWay',
      description: 'Holistic health and wellness management platform',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 11,
      name: 'StyleSync',
      description: 'AI-powered fashion styling and wardrobe management',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 12,
      name: 'TravelTrek',
      description: 'Smart travel planning and itinerary optimization',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 13,
      name: 'HomeHaven',
      description: 'Smart home automation and lifestyle management',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 14,
      name: 'MindfulMoment',
      description: 'Meditation and mindfulness practice platform',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center'
    },
    // Tools Brands
    {
      id: 15,
      name: 'CodeCraft',
      description: 'Advanced code editor with AI assistance',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 16,
      name: 'DataViz',
      description: 'Interactive data visualization and analytics tools',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 17,
      name: 'ProjectPro',
      description: 'Comprehensive project management and collaboration',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 18,
      name: 'SecureShield',
      description: 'Enterprise-grade cybersecurity and threat protection',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 19,
      name: 'CloudConnect',
      description: 'Seamless cloud storage and file synchronization',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center'
    },
    // Technology Brands
    {
      id: 20,
      name: 'AIForge',
      description: 'Machine learning model development and deployment',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 21,
      name: 'BlockChain',
      description: 'Decentralized applications and smart contracts',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 22,
      name: 'IoTInsight',
      description: 'Internet of Things device management and analytics',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center'
    },
    // Education Brands
    {
      id: 23,
      name: 'LearnLogic',
      description: 'Adaptive learning platform with personalized curriculum',
      category: 'education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 24,
      name: 'SkillStack',
      description: 'Professional skill development and certification',
      category: 'education',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center'
    }
  ]

  // Filter brands based on selected category
  const filteredBrands = activeCategory === 'all' 
    ? allBrands 
    : allBrands.filter(brand => brand.category === activeCategory)

  return (
    <FullContainer className='py-12 bg-white'>
      <Container>
        <div className="text-start mb-16">
                   <Heading title="Categories" className="text-primary mb-6" />
                    <p className='text-lg max-w-2xl text-start text-secondary/80 '>
                        Explore our diverse portfolio of brands organized by category. Each category represents a unique focus area where we excel.
                    </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-secondary border-secondary/20 hover:border-primary/50 hover:text-primary'
              }`}
            >
              <span className="text-lg">{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-secondary/10 text-secondary'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Brand Cards Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
            {activeCategory === 'all' ? 'All Brands' : `${categories.find(c => c.id === activeCategory)?.name} Brands`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group bg-white border-2 border-secondary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-secondary/70 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {brand.category.charAt(0).toUpperCase() + brand.category.slice(1)}
                    </span>
                    <button className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(1).map((category) => (
            <div
              key={category.id}
              className="group bg-white border-2 border-secondary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <span className="text-primary font-bold text-lg group-hover:text-white transition-colors duration-300">
                    {category.count}
                  </span>
                </div>
              </div>
              <p className="text-secondary/70 leading-relaxed">
                Discover our {category.name.toLowerCase()} brands that deliver exceptional value and innovative solutions in their respective domains.
              </p>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore {category.name}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  )
}

export default Category