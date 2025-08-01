'use client'

import Link from 'next/link'
import { ArrowLeft, Phone, Mail } from 'lucide-react'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'
import { headCoach } from '../../data/data'

export default function HeadCoachPage() {

  return (
    <div className="min-h-screen bg-white">
      <PageTitle title="About" />
      {/* Header */}
      <section className="bg-[#d51510] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-josefin-sans">Back</span>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md overflow-hidden shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={headCoach.image}
                    alt={headCoach.name}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="bg-[#edebeb] rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-alumni-sans">{headCoach.name}</h2>
              <p className="text-xl text-[#d51510] font-semibold mb-6 font-josefin-sans">{headCoach.title}</p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d51510]" />
                  <a 
                    href={`tel:${headCoach.phone}`} 
                    className="text-gray-600 hover:text-[#d51510] transition-colors font-josefin-sans"
                  >
                    {headCoach.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d51510]" />
                  <a 
                    href={`mailto:${headCoach.email}`} 
                    className="text-gray-600 hover:text-[#d51510] transition-colors font-josefin-sans"
                  >
                    {headCoach.email}
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-josefin-sans">A Bit About Me</h3>
                <p className="text-gray-600 leading-relaxed font-josefin-sans">
                  {headCoach.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}