'use client'

import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import { events } from '../data/data'

export default function Events() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PageTitle title="Events" />
      {/* Parallax Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bradley-court.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Upcoming Tournaments
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join Team C.R.E.W. as we compete in premier basketball tournaments across the Midwest. 
              Excellence through competition, growth through challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="flex-grow py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-alumni-sans">
              2024 Tournament Schedule
            </h2>
            <p className="text-lg text-gray-600">
              Click on any event to learn more and register
            </p>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <a
                key={event.id}
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Event Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Red Divider Line */}
                <div className="px-4">
                  <br></br>
                  <div className="bg-[#d51510] h-1 rounded-full"></div>
                </div>
                
                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#d51510] transition-colors font-alumni-sans">
                    {event.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-josefin-sans">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-josefin-sans">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm font-josefin-sans">
                    {event.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}