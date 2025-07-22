import React from 'react'
import Heading from '../../common/Heading'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'

const About = () => {
  return (
    <FullContainer className='bg-secondary py-12 md:py-24'>

      <Container className="min-h-screen bg-gradient-to-br from-secondary to-secondary/90 py-12 px-4">
          {/* Header */}
          <div className="text-start mb-16">
            <Heading title="About Brighty Soft" className="text-white mb-6" />
            <p className='text-lg max-w-2xl text-start text-white/80 '>
              We are a team of developers and designers who are passionate about creating digital products that are both functional and aesthetically pleasing.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                To create exceptional digital experiences that empower businesses and individuals
                through innovative, quality-first solutions that stand the test of time.
              </p>
            </div>
          </div>

          {/* What Unites Our Brands */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Curated Excellence</h3>
              <p className="text-white/80 leading-relaxed">
                Every product and service we offer is carefully selected and crafted to meet the highest standards of quality and relevance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Quality-First Approach</h3>
              <p className="text-white/80 leading-relaxed">
                We prioritize quality over quantity, ensuring every solution we deliver exceeds expectations and provides lasting value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Niche-Focused</h3>
              <p className="text-white/80 leading-relaxed">
                We specialize in specific domains, allowing us to develop deep expertise and deliver solutions that truly understand your unique needs.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              What Unites All Our Brands
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Our Philosophy</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  At Brightly Soft, we believe that exceptional digital experiences are built on three fundamental principles:
                  curation, quality, and focus. These values guide every decision we make and every solution we create.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Whether it's our flagship products or our specialized services, you'll find the same commitment to
                  excellence and attention to detail that defines the Brightly Soft brand.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Our Promise</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  We promise to deliver solutions that not only meet your immediate needs but also grow with your business.
                  Our niche-focused approach ensures that we understand your industry's unique challenges and opportunities.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Every brand under the Brightly Soft umbrella shares this commitment to curated excellence,
                  quality-first development, and specialized expertise that drives real results.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </FullContainer>
  )
}

export default About