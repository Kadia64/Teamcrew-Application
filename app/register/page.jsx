'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

export default function Register() {
  const [donationEnabled, setDonationEnabled] = useState(false)
  const [selectedDonation, setSelectedDonation] = useState(null)

  return (
    <div className="bg-white">
      <PageTitle title="Register" />
      {/* Video Hero Section */}
      <section className="relative w-full h-screen -mt-20">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src="/shooting-drills.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Checkered Pattern Section */}
      <section className="w-full">
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#edebeb] p-12 md:p-16 lg:p-20 flex items-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d51510] mb-6 font-alumni-sans" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Shooting
              </h2>
              <p className="text-[#1f1f1f] text-base leading-relaxed font-quicksand">
                Shooting is one of the most important skills in basketball, and it can help you stand out on the court. Good shooters open up driving lanes for everyone on the team and make it easier to score. The most important factors of shooting a basketball are Alignment, Shot Depth, and Arc. Other important aspects of shooting include hand position, eyesight, positioning balance, and rhythm
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img 
              src="/shooting.jpg" 
              alt="Shooting Practice" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 bg-[#edebeb] p-12 md:p-16 lg:p-20 flex items-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d51510] mb-6 font-alumni-sans" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Defense
              </h2>
              <p className="text-black text-base leading-relaxed font-quicksand">
                Defense wins championships. We teach players to take pride in their defensive stance, footwork, and positioning. Our defensive drills focus on lateral movement, closeouts, help defense, and communication. Learn to anticipate offensive moves, contest shots effectively, and create turnovers that lead to fast-break opportunities.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img 
              src="https://placehold.co/800x500/1f1f1f/d51510?text=Defense+Image" 
              alt="Defense Drills" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 3: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#edebeb] p-12 md:p-16 lg:p-20 flex items-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d51510] mb-6 font-alumni-sans" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Teamwork
              </h2>
              <p className="text-black text-base leading-relaxed font-quicksand">
                Basketball is the ultimate team sport. We emphasize unselfish play, communication, and trust between teammates. Players learn to set screens, make the extra pass, and celebrate each other's success. Our team-building exercises develop chemistry on and off the court, creating bonds that last beyond the game.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img 
              src="/huddle.jpg" 
              alt="Teamwork" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Registration Form Section with Grid Pattern */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Image on Left */}
          <div className="w-full md:w-1/2 h-[600px] md:h-auto">
            <img 
              src="tryouts-poster.jpg" 
              alt="Basketball Player" 
              className="w-full h-full object-contain bg-[#1f1f1f]"
            />
          </div>
          
          {/* Form on Right */}
          <div className="w-full md:w-1/2 bg-[#d51510] p-8 md:p-12 flex flex-col">
            <h2 className="text-4xl underline text-center text-white mb-8 font-alumni-sans" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Tryout for Team C.R.E.W.
            </h2>
          
          <form className="flex-1 flex flex-col">
            {/* Player Information */}
            <div className="bg-[#edebeb] p-6 rounded-lg flex-1 flex flex-col">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    Childs Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    Date of Birth
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1f1f1f] font-bold mb-2 font-lunasima">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#d51510] focus:outline-none text-[#1f1f1f]"
                    required
                  />
                </div>

              </div>

              {/* Donation Section */}
              <hr className="my-6 border-gray-300" />
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox"
                    id="donation-checkbox"
                    checked={donationEnabled}
                    onChange={(e) => {
                      setDonationEnabled(e.target.checked)
                      if (!e.target.checked) setSelectedDonation(null)
                    }}
                    className="w-5 h-5 mr-3 accent-[#d51510]"
                  />
                  <label htmlFor="donation-checkbox" className="text-[#1f1f1f] font-bold font-lunasima">
                    I would like to make a donation
                  </label>
                </div>

                {/* Donation Amount Buttons */}
                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    disabled={!donationEnabled}
                    onClick={() => setSelectedDonation(10)}
                    className={`px-8 py-3 rounded-lg font-bold font-lunasima transition-all ${
                      !donationEnabled 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : selectedDonation === 10
                          ? 'bg-[#1f1f1f] text-[#d51510] border-2 border-[#d51510]'
                          : 'bg-[#1f1f1f] text-white hover:text-[#d51510]'
                    }`}
                  >
                    $10
                  </button>
                  <button
                    type="button"
                    disabled={!donationEnabled}
                    onClick={() => setSelectedDonation(20)}
                    className={`px-8 py-3 rounded-lg font-bold font-lunasima transition-all ${
                      !donationEnabled 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : selectedDonation === 20
                          ? 'bg-[#1f1f1f] text-[#d51510] border-2 border-[#d51510]'
                          : 'bg-[#1f1f1f] text-white hover:text-[#d51510]'
                    }`}
                  >
                    $20
                  </button>
                  <button
                    type="button"
                    disabled={!donationEnabled}
                    onClick={() => setSelectedDonation(30)}
                    className={`px-8 py-3 rounded-lg font-bold font-lunasima transition-all ${
                      !donationEnabled 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : selectedDonation === 30
                          ? 'bg-[#1f1f1f] text-[#d51510] border-2 border-[#d51510]'
                          : 'bg-[#1f1f1f] text-white hover:text-[#d51510]'
                    }`}
                  >
                    $30
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button 
                  type="submit" 
                  className="text-white bg-[#d51510] text-[#d51510] font-bold py-4 px-12 rounded-lg transition duration-200 transform hover:scale-105 text-lg font-alumni-sans"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}