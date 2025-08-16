import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import Heading from '../../common/Heading'
import Image from 'next/image'

const Category = () => {
  const categories = [
    {
      id: 'towing',
      name: 'Towing',
      count: 6
    },
    {
      id: 'gatedoor_repair',
      name: 'Gatedoor repair',
      count: 5
    },
    {
      id: 'carpet_cleaning',
      name: 'Carpet Cleaning',
      count: 6
    },
    {
      id: 'garage_door_repair',
      name: 'Garage Door repair',
      count: 5
    },
    {
      id: 'mold_cleaning',
      name: 'Mold Cleaning',
      count: 3
    }
  ]

  const [activeCategory, setActiveCategory] = useState('towing')

  const allBrands = [
    // Towing Brands (24)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `Towing Project ${i + 1}`,
      description: 'Professional towing services for all vehicle types.',
      category: 'towing',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop&crop=center'
    })),
    // Gatedoor Repair Brands (8)
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 100 + i + 1,
      name: `Gatedoor Repair Project ${i + 1}`,
      description: 'Expert repair and maintenance for all types of gates and doors.',
      category: 'gatedoor_repair',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop&crop=center'
    })),
    // Carpet Cleaning Brands (6)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: 200 + i + 1,
      name: `Carpet Cleaning Project ${i + 1}`,
      description: 'Deep cleaning and stain removal for carpets and rugs.',
      category: 'carpet_cleaning',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop&crop=center'
    })),
    // Garage Door Repair Brands (5)
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 300 + i + 1,
      name: `Garage Door Repair Project ${i + 1}`,
      description: 'Garage door repair, installation, and maintenance.',
      category: 'garage_door_repair',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop&crop=center'
    })),
    // Mold Cleaning Brands (3)
    ...Array.from({ length: 3 }, (_, i) => ({
      id: 400 + i + 1,
      name: `Mold Cleaning Project ${i + 1}`,
      description: 'Safe and effective mold removal and cleaning services.',
      category: 'mold_cleaning',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center' // new image
    }))
  ]

  // Filter brands based on selected category
  const filteredBrands = allBrands.filter(brand => brand.category === activeCategory)

  return (
    <FullContainer className='py-12 bg-[#F8F7FE]'>
      <Container>
        <div className="text-start mb-16">
          <Heading title="Categories" className="text-primary mb-6" />
          <p className='text-lg max-w-2xl text-start text-secondary/80 '>
            Explore our diverse portfolio of brands organized by category. Each category represents a unique focus area where we excel.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-between mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-xl px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${activeCategory === category.id
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-transparent text-secondary border-secondary/20 hover:border-primary/50 hover:text-primary'
                }`}
            >
              <span>{category.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full ${activeCategory === category.id
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
                    <span className="text-base font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
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


      </Container>
    </FullContainer>
  )
}

export default Category