'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageTitle title="Contact" />
      {/* Header Section */}
      <section className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Red Box - Left Side */}
          <div className="w-full md:w-[35%] bg-[#d51510] flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-8 py-4 font-alumni-sans border-4 border-white leading-relaxed">
              Who Needs<br></br> to Get A<br></br> Hold of<br></br> Us?
            </h1>
          </div>
          {/* Image - Right Side */}
          <div className="hidden md:block md:w-[65%] bg-gray-800">
            <img 
              src="/kids-basketball-1.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Box */}
            <div className="lg:col-span-1 border-2 border-[#d51510] p-8 flex flex-col items-center bg-white">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-3xl font-bold text-[#d51510] font-alumni-sans">Contact Us!</h3>
                <ArrowRight className="w-7 h-7 text-[#d51510]" />
              </div>
              <img 
                src="/teamcrew-logo-2.jpg" 
                alt="Contact" 
                className="rounded-md"
              />
            </div>
            
            {/* Form */}
            <div className="lg:col-span-2 bg-[#edebeb] rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center font-alumni-sans">
                Let us know how we can help you!
              </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-josefin-sans">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d51510] focus:border-transparent outline-none transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-josefin-sans">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d51510] focus:border-transparent outline-none transition-colors text-gray-900"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-josefin-sans">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d51510] focus:border-transparent outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-josefin-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d51510] focus:border-transparent outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-josefin-sans">
                  Send us a message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  style={{ resize: 'none' }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d51510] focus:border-transparent outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#d51510] text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}