import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'
import { Mail, Phone, MapPin, Send, Users, Handshake, Target, Award } from 'lucide-react'
import Heading from '../../common/Heading'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    partnershipType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        partnershipType: '',
        message: ''
      })
    }, 2000)
  }

  const partnershipTypes = [
    'Strategic Partnership',
    'Technology Integration',
    'Joint Venture',
    'Distribution Agreement',
    'Marketing Collaboration',
    'Investment Opportunity',
    'Other'
  ]

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Growth',
      description: 'Join forces with our innovative brands to create mutually beneficial partnerships that drive growth and success.'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Trusted Relationships',
      description: 'Build long-term partnerships based on trust, transparency, and shared values for sustainable business success.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Alignment',
      description: 'Align your business goals with our diverse portfolio to achieve strategic objectives and market expansion.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Excellence',
      description: 'Partner with brands that have demonstrated excellence and innovation across multiple industries and markets.'
    }
  ]

  return (
    <>
      <FullContainer className='py-12 lg:py-24 bg-secondary'>
        <Container>
          {/* Header Section */}
          <div className="mb-16">
            <div className="text-start mb-12">
              <Heading title="Why Partner With Us?" className="text-white mb-6" />
              <p className="text-lg text-white/80 max-w-2xl">
                Discover the advantages of partnering with our diverse portfolio of innovative brands and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white border-2 border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Partnership Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can create innovative solutions together and drive mutual success in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </Container>
      </FullContainer>

      <FullContainer className='py-12 lg:py-24 bg-primary'>
        <Container>

          <div className="text-start mb-16">
            <Heading title="Contact / Partner With Us" className="text-white mb-6" />
            <p className='text-lg max-w-3xl text-start text-white/90 '>
              Ready to explore partnership opportunities? Let's discuss how we can work together to create innovative solutions and drive mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you're interested in partnering with our brands, have a business opportunity, or just want to learn more about what we do, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-white/80">partnerships@brightlysoft.com</p>
                    <p className="text-white/80">info@brightlysoft.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                    <p className="text-white/80">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-white/80">123 Innovation Drive</p>
                    <p className="text-white/80">Tech City, TC 12345</p>
                    <p className="text-white/80">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-secondary/10 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Partnership Type *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select partnership type</option>
                    {partnershipTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-secondary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your partnership interest or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Partnership Benefits */}

        </Container>
      </FullContainer>
    </>

  )
}
