'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import { headCoach, basketballCoaches, staff } from '../data/data'

export default function About() {
  const [visibleCoaches, setVisibleCoaches] = useState(new Set())
  const [visibleStaff, setVisibleStaff] = useState(new Set())
  const coachRefs = useRef([])
  const staffRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const coachObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleCoaches(prev => new Set(prev).add(index))
        }
      })
    }, observerOptions)

    const staffObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setVisibleStaff(prev => new Set(prev).add(index))
        }
      })
    }, observerOptions)

    coachRefs.current.forEach((ref) => {
      if (ref) coachObserver.observe(ref)
    })

    staffRefs.current.forEach((ref) => {
      if (ref) staffObserver.observe(ref)
    })

    return () => {
      coachObserver.disconnect()
      staffObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <PageTitle title="About" />
      {/* Header Section */}
      <section className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Red Box - Left Side */}
          <div className="w-full md:w-[35%] bg-[#d51510] flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center px-8 py-4 font-alumni-sans border-4 border-white leading-relaxed">
              Our Coaches <br></br> & Staff
            </h1>
          </div>
          {/* Image - Right Side */}
          <div className="hidden md:block md:w-[65%] bg-gray-800">
            <img 
              src="/staff/all-staff.jpg" 
              alt="Team Photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Head Coach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Coach Info - Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <Link 
                href={headCoach.link}
                className="group inline-block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-gray-800 font-alumni-sans group-hover:text-[#d51510] transition-colors">{headCoach.name}</h2>
                  <ArrowRight className="w-6 h-6 text-[#d51510] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xl text-[#d51510] font-semibold mb-6 font-josefin-sans">{headCoach.title}</p>
              </Link>
              <p className="text-gray-600 mb-6 leading-relaxed font-josefin-sans">{headCoach.bio}</p>
            </div>
            {/* Coach Image - Right Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={headCoach.image}
                    alt={headCoach.name}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basketball Coaches Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-alumni-sans">
            Basketball Coaches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basketballCoaches.map((coach, index) => (
              <div 
                key={index} 
                ref={el => coachRefs.current[index] = el}
                data-index={index}
                className={`text-center relative transition-all duration-700 ${
                  visibleCoaches.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="aspect-w-3 aspect-h-4 mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
                <div className="bg-[#edebeb] rounded-lg p-6 -mt-2">
                  <h3 className="text-xl font-semibold text-gray-800 font-alumni-sans">{coach.name}</h3>
                  <p className="text-[#d51510] font-medium mb-3 font-josefin-sans">{coach.title}</p>
                  <p className="text-gray-600 text-sm font-josefin-sans">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-alumni-sans">
            Support Staff
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {staff.map((member, index) => (
              <div 
                key={index} 
                ref={el => staffRefs.current[index] = el}
                data-index={index}
                className={`flex gap-4 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                  visibleStaff.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="w-1/3 flex-shrink-0">
                  <div className="aspect-w-3 aspect-h-4 h-full">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-[#edebeb] p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-800 font-alumni-sans">{member.name}</h3>
                  <p className="text-[#d51510] font-medium mb-3 font-josefin-sans">{member.title}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-600 font-josefin-sans">{member.email}</p>
                    <p className="text-gray-600 font-josefin-sans">{member.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}