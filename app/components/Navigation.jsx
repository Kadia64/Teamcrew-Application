'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/merch', label: 'Merch', external: true },
    { href: '/contact', label: 'Contact' },
    { href: '/teams', label: 'Teams' },
    { href: '/events', label: 'Events' },
  ]

  return (
    <nav className="bg-[#1f1f1f] text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/teamcrew-logo.png" 
                alt="Team C.R.E.W. Logo" 
                className="w-14 h-16"
              />
              <span className="ml-2 text-3xl md:text-4xl font-bold text-[#d51510] font-bebas-neue tracking-wide">Team C.R.E.W.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href="https://renownapparel.com/crew_culture/shop/products/all?page=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#d51510] px-3 py-2 text-base font-quicksand font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-[#d51510] px-3 py-2 text-base font-quicksand font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#d51510] focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#d51510] block px-3 py-2 text-lg font-quicksand font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#d51510] block px-3 py-2 text-lg font-quicksand font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}