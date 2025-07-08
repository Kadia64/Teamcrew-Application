import React from 'react';
import Section from '../components/common/Section';
import fullTeam from '../assets/images/full-team.jpg';


const HomePage = () => (
  <div className="min-h-screen bg-gray-900 text-gray-200">
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${fullTeam})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-6 leading-tight animate-fade-in-up">
            Welcome to TeamCrew Basketball
          </h1>
        </Section>
        <Section className="delay-200">
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Your hub for Teamcrew's AAU basketball, schedules, and communication.
          </p>
        </Section>
        <Section className="delay-400">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up">
            Join
          </button>
        </Section>
      </div>
    </section>

    {/* About Section - Brief */}
    <Section id="about-brief" className="bg-gray-800 py-20 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-12">About TeamCrew</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2 text-lg leading-relaxed">
            <p className="mb-4">
              TeamCrew is dedicated to fostering young basketball talent through a structured and supportive AAU program. We focus on skill development, teamwork, and sportsmanship, preparing athletes for success both on and off the court.
            </p>
            <p>
              Our platform simplifies team management, allowing coaches to easily schedule practices and games, and keeping parents and players informed with real-time updates and notifications.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://placehold.co/400x300/333333/ffffff?text=Team+Training"
              alt="Team Training"
              className="rounded-lg shadow-xl"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/400x300/333333/ffffff?text=Team+Training"; 
              }}
            />
          </div>
        </div>
      </div>
    </Section>

    {/* Features Section */}
    <Section id="features" className="bg-gray-900 py-20 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V7h2v5h-2zM9 14h2v2H9v-2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Event Scheduling</h3>
            <p className="text-gray-400">Coaches can easily schedule games, practices, and team events with full details.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10 2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2zm-3 2a1 1 0 100 2 1 1 0 000-2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Push Notifications</h3>
            <p className="text-gray-400">Parents and players receive instant notifications for schedule changes and updates.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 7.5a4.5 4.5 0 00-9 0V15h9v-1.5zm6-7.5a3 3 0 11-6 0 3 3 0 016 0zm-1.5 7.5a4.5 4.5 0 00-9 0V15h9v-1.5z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Team Management</h3>
            <p className="text-gray-400">Coaches can manage rosters, attendance, and communicate with their team effectively.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Call to Action */}
    <Section id="cta" className="bg-red-600 py-20 px-4 md:px-8 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join TeamCrew?</h2>
        <p className="text-lg md:text-xl mb-8">
          Sign up today and take your basketball journey to the next level.
        </p>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </Section>
  </div>
);

export default HomePage;