'use client'

import Link from 'next/link'
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import PageTitle from './components/PageTitle'
import { events } from './data/data'

export default function Home() {
  const imageRef = useRef(null)
  const eventsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [eventsVisible, setEventsVisible] = useState(false)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          imageObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const eventsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEventsVisible(true)
          eventsObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) {
      imageObserver.observe(imageRef.current)
    }

    if (eventsRef.current) {
      eventsObserver.observe(eventsRef.current)
    }

    return () => {
      imageObserver.disconnect()
      eventsObserver.disconnect()
    }
  }, [])

  // Track initial render for animation
  const [initialRender, setInitialRender] = useState(true)

  useEffect(() => {
    if (eventsVisible && initialRender) {
      // Mark that we've shown the initial animation
      const timer = setTimeout(() => {
        setInitialRender(false)
      }, 1500) // Give plenty of time for animation
      return () => clearTimeout(timer)
    }
  }, [eventsVisible]) // Remove initialRender from deps to prevent re-running


  const nextEvents = () => {
    if (currentEventIndex + 3 < events.length) {
      setCurrentEventIndex(currentEventIndex + 1)
    }
  }

  const prevEvents = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(currentEventIndex - 1)
    }
  }

  return (
    <div className="bg-white">
      <PageTitle title="Home" />
      {/* Hero Section with Background Image */}
      <section className="relative bg-[#d51510] min-h-screen">
        {/* Background Image - Left Aligned */}
        <div 
          className="absolute left-0 top-0 h-full w-full z-0"
          style={{
            backgroundImage: 'url("/huddle-hero.png")',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Text Overlay - Left Aligned */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="ml-8 md:ml-16 lg:ml-24">
            <div className="space-y-4 mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f1f1f] font-permanent-marker" style={{ WebkitTextStroke: '1px white', textStroke: '1px white', fontWeight: '900' }}>
                <span className="relative">
                  C
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#1f1f1f]" style={{ boxShadow: '0 0 0 1px white' }}></span>
                </span>hosen
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f1f1f] font-permanent-marker" style={{ WebkitTextStroke: '1px white', textStroke: '1px white', fontWeight: '900' }}>
                <span className="relative">
                  R
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#1f1f1f]" style={{ boxShadow: '0 0 0 1px white' }}></span>
                </span>eady
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f1f1f] font-permanent-marker" style={{ WebkitTextStroke: '1px white', textStroke: '1px white', fontWeight: '900' }}>
                <span className="relative">
                  E
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#1f1f1f]" style={{ boxShadow: '0 0 0 1px white' }}></span>
                </span>quipped
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f1f1f] font-permanent-marker" style={{ WebkitTextStroke: '1px white', textStroke: '1px white', fontWeight: '900' }}>
                <span className="relative">
                  W
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#1f1f1f]" style={{ boxShadow: '0 0 0 1px white' }}></span>
                </span>illing
              </h2>
            </div>
            <Link href="/register" className="inline-block bg-white hover:bg-gray-100 text-[#d51510] font-bold py-4 px-12 rounded-lg transition duration-200 transform hover:scale-105 text-lg mt-6">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section with Divider and Three Panels */}
      <div className="relative">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bradley-court.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-[#d51510] opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Gray Divider */}
          <div className="py-4">
            <div className="mx-8">
              <hr className="border-t-2 border-gray-400" />
            </div>
          </div>

          {/* Three Panel Links Section */}
          <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Player Development Panel */}
            <Link href="/register" className="group relative overflow-hidden rounded-t-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <img 
                  src="/basketball-player-1.jpg" 
                  alt="Player Development" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 right-0 px-6 py-4 font-bold font-alumni-sans panel-button">
                  <span className="flex items-center gap-2 panel-button-content">
                    Player Development
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Upcoming Events Panel */}
            <Link href="/events" className="group relative overflow-hidden rounded-t-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <img 
                  src="/merch.jpg" 
                  alt="Upcoming Events" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 right-0 px-6 py-4 font-bold font-alumni-sans panel-button">
                  <span className="flex items-center gap-2 panel-button-content">
                    Upcoming Events
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Coaches Panel */}
            <Link href="/about" className="group relative overflow-hidden rounded-t-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <img 
                  src="/staff/tim-allen.jpg" 
                  alt="Coaches" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 right-0 px-6 py-4 font-bold font-alumni-sans panel-button">
                  <span className="flex items-center gap-2 panel-button-content">
                    Coaches Corner
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
        </div>
      </div>

      {/* Springfield's Premier Youth Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#d51510] mb-12 font-alumni-sans">
            Springfield's Premier Youth Team!
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Text Content with lightblue background */}
            <div className="lg:w-90 bg-[#edebeb] p-8 rounded-lg">
              <p className="text-[#d51510] text-lg leading-relaxed font-lunasima font-bold">
                We are committed to developing both skilled basketball players and Godly men. Our mission is to create an environment that fosters growth on and off the court. Emphasizing; Character, Discipline, and Teamwork. We strive to build athletes who are equipped for success in basketball while nurturing their faith, integrity, and leadership. By focusing on the whole person, we aim to raise young men who excel athletically, live with purpose and serve with honor.
              </p>
            </div>
            {/* Tall Image with red border and whitespace */}
            <div className="relative w-full lg:w-auto" ref={imageRef}>
              <div className={`p-4 border-4 border-[#d51510] inline-block ${isVisible ? 'image-border-fade' : 'opacity-0'}`}>
                <img 
                  src="/basketball-player-2.jpg" 
                  alt="Springfield's Premier Youth Team" 
                  className={`h-[500px] lg:h-[600px] w-auto object-contain ${isVisible ? 'image-reveal' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Nation Events Section */}
      <section className="py-20 relative overflow-hidden" ref={eventsRef}>
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/bradley-court.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-[#d51510] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 font-alumni-sans underline">
            {events.length > 0 ? 'Upcoming Tournaments' : 'No Events Available at This Time'}
          </h2>
          
          {events.length > 0 ? (
          <div className="relative">
            {/* Navigation Buttons */}
            {events.length > 3 && (
              <>
                <button
                  onClick={prevEvents}
                  className={`absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white text-[#d51510] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors ${
                    currentEventIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  disabled={currentEventIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextEvents}
                  className={`absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white text-[#d51510] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors ${
                    currentEventIndex + 3 >= events.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  disabled={currentEventIndex + 3 >= events.length}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentEventIndex * (100/3)}%)` }}
              >
                {events.map((event, index) => (
                  <a
                    key={event.id}
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 flex flex-col ${
                      eventsVisible && initialRender && currentEventIndex === 0 && index < 3 ? `event-card-animate-${index + 1}` : 
                      !eventsVisible && index < 3 ? 'opacity-0' : ''
                    }`}
                    style={{ width: 'calc((100% - 6rem) / 3 + 1px)' }}
                  >
                {/* Event Image */}
                <div className="relative h-80 md:h-96 flex items-center justify-center p-4">
                  <img 
                    src={event.image}
                    alt={event.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Red Divider Line */}
                <div className="px-4">
                  <div className="bg-[#d51510] h-1 rounded-full"></div>
                </div>
                
                {/* Event Info */}
                <div className="bg-white p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#d51510] transition-colors font-alumni-sans">
                    {event.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-josefin-sans">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
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
          </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  )
}