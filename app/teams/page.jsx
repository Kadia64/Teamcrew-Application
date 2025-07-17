'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  // Mock data for teams
  const teams = [
    { id: 1, name: 'U12 Boys', coach: 'Coach Smith', players: 12 },
    { id: 2, name: 'U14 Boys', coach: 'Coach Johnson', players: 15 },
    { id: 3, name: 'U16 Boys', coach: 'Coach Williams', players: 14 },
  ]

  const Footer = () => (
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
  )

  if (selectedTeam) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-grow py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedTeam(null)}
              className="mb-6 text-red-600 hover:text-red-700"
            >
              ← Back to teams
            </button>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">{selectedTeam.name}</h1>
            <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 mb-2">Coach: {selectedTeam.coach}</p>
              <p className="text-gray-600">Players: {selectedTeam.players}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="flex-grow py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Teams</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 cursor-pointer transition duration-200 border border-gray-300"
              >
                <h2 className="text-2xl font-bold text-red-600 mb-2">{team.name}</h2>
                <p className="text-gray-600">Coach: {team.coach}</p>
                <p className="text-gray-600">Players: {team.players}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}