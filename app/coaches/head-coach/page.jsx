'use client'

import Link from 'next/link'
import { ArrowLeft, Phone, Mail } from 'lucide-react'

export default function HeadCoachPage() {
  const headCoach = {
    name: "Tim Allen",
    title: "Owner / Head Coach",
    image: "/staff/tim-allen.jpg",
    phone: "(217) 220-0395",
    email: "tsjallen3@gmail.com",
    bio: "Coach Allen has coached for nearly 20 years. He began coaching at Flo Valley College and later moved on to Robert Morris University where he was an assistant coach. He coached at Grant middle school for 6 years where he won multiple state championships. He is currently the head coach of Sacred Heart Griffin Boys Varsity Basketball Team, where he has over 19 championships. His greatest accomplishment is making it to the final 4 in 2020 and winning a state championship in 2022. Coach Allen has been named IBCA coach of the year 6 times. He has been married for 15 years and has two children. He is most proud of his relationship with Christ."
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#d51510] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {headCoach.name}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{headCoach.name}</h2>
              <p className="text-xl text-[#d51510] font-semibold mb-6">{headCoach.title}</p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d51510]" />
                  <a 
                    href={`tel:${headCoach.phone}`} 
                    className="text-gray-600 hover:text-[#d51510] transition-colors"
                  >
                    {headCoach.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d51510]" />
                  <a 
                    href={`mailto:${headCoach.email}`} 
                    className="text-gray-600 hover:text-[#d51510] transition-colors"
                  >
                    {headCoach.email}
                  </a>
                </div>
              </div>

              {/* Bio */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Bit About Me</h3>
                <p className="text-gray-600 leading-relaxed">
                  {headCoach.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <footer className="bg-[#1f1f1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team C.R.E.W. Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Team C.R.E.W.</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-[#d51510] transition-colors">Home</Link></li>
                <li><Link href="/merch" className="text-gray-400 hover:text-[#d51510] transition-colors">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-[#d51510] transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[#d51510] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Leadership Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Leadership</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-400 hover:text-[#d51510] transition-colors">FAQ</Link></li>
                <li><Link href="/shipping-returns" className="text-gray-400 hover:text-[#d51510] transition-colors">Shipping & Returns</Link></li>
                <li><Link href="/store-policy" className="text-gray-400 hover:text-[#d51510] transition-colors">Store Policy</Link></li>
                <li><Link href="/payment-methods" className="text-gray-400 hover:text-[#d51510] transition-colors">Payment Methods</Link></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#d51510] transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
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