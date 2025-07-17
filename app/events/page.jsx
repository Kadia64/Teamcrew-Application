'use client'

import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'

export default function Events() {
  // Mock data for events
  const events = [
    {
      id: 1,
      name: "Indiana Clash",
      date: "April 5-6, 2025",
      location: "Misheawaka, IN",
      image: "/events/indiana-clash.jpg",
      description: "Annual spring tournament featuring top teams from the region"
    },
    {
      id: 2,
      name: "Midwest Warmup",
      date: "April 18-19, 2024",
      location: "Bedford Park, IL",
      image: "/events/midwest-warmup.jpg",
      description: "Elite showcase tournament with college scouts in attendance"
    },
    {
      id: 3,
      name: "Dome Debut Classic",
      date: "March 28-29, 2026",
      location: "Scheels Legacy Sports Complex / University of Illinois Springfield",
      image: "/events/dome-debut-classic.png",
      description: "Premier summer tournament with teams from across the country"
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#d51510] transition-colors">
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

      {/* Footer Links Section */}
      <footer className="bg-[#1f1f1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team C.R.E.W. Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Team C.R.E.W.</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Home</Link></li>
                <li><Link href="/merch" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Contact</Link></li>
              </ul>
            </div>

            {/* Leadership Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Leadership</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">FAQ</Link></li>
                <li><Link href="/shipping-returns" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shipping & Returns</Link></li>
                <li><Link href="/store-policy" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Store Policy</Link></li>
                <li><Link href="/payment-methods" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Payment Methods</Link></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Join Our Newsletter</h3>
              <p className="text-gray-400 text-sm">
                Stay updated with Team C.R.E.W. news and events.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Team C.R.E.W. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}