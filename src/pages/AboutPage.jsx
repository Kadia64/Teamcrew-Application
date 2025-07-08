import React from 'react';
import Section from '../components/common/Section';

const AboutPage = () => (
  <div className="min-h-screen bg-gray-900 text-gray-200 py-20 px-4 md:px-8">
    <div className="container mx-auto">
      <Section>
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-12 text-center">
          About TeamCrew Basketball
        </h1>
      </Section>

      <Section className="mb-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/333333/ffffff?text=Team+Spirit"
              alt="Team Spirit"
              className="rounded-lg shadow-xl"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Team+Spirit"; 
              }}
            />
          </div>
          <div className="md:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Mission</h2>
            <p className="mb-4">
              TeamCrew Basketball is committed to developing well-rounded athletes who excel on the basketball court and in life. We believe in the power of sports to teach valuable life lessons such as discipline, perseverance, and teamwork. Our program provides a nurturing and challenging environment for players of all skill levels to grow and reach their full potential.
            </p>
            <p>
              We aim to instill a love for the game, a strong work ethic, and a sense of community among our players, parents, and coaches.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-16">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Philosophy</h2>
            <p className="mb-4">
              At TeamCrew, our coaching philosophy centers around individual player development within a team-oriented framework. We emphasize fundamental skills, strategic thinking, and physical conditioning, all while fostering a positive and encouraging atmosphere.
            </p>
            <p>
              We measure success not just by wins and losses, but by the progress of each player, their commitment to the team, and their enjoyment of the sport. We prepare our athletes to compete at higher levels and embrace challenges with confidence.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/333333/ffffff?text=Coaching+Philosophy"
              alt="Coaching Philosophy"
              className="rounded-lg shadow-xl"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Coaching+Philosophy"; 
              }}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Example Team Member 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://placehold.co/150x150/555555/ffffff?text=Coach"
              alt="Coach John Doe"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Coach"; 
              }}
            />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">John Doe</h3>
            <p className="text-red-400 font-medium mb-4">Head Coach - 15U Boys</p>
            <p className="text-gray-400 text-sm">
              Coach John brings over 10 years of coaching experience, focusing on defensive strategies and player leadership.
            </p>
          </div>
          {/* Example Team Member 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://placehold.co/150x150/555555/ffffff?text=Coach"
              alt="Coach Jane Smith"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Coach"; 
              }}
            />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Jane Smith</h3>
            <p className="text-red-400 font-medium mb-4">Assistant Coach - 13U Girls</p>
            <p className="text-gray-400 text-sm">
              Coach Jane specializes in offensive drills and developing guard skills. She is passionate about youth basketball.
            </p>
          </div>
          {/* Example Team Member 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://placehold.co/150x150/555555/ffffff?text=Trainer"
              alt="Trainer Mike Johnson"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Trainer"; 
              }}
            />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Mike Johnson</h3>
            <p className="text-red-400 font-medium mb-4">Strength & Conditioning</p>
            <p className="text-gray-400 text-sm">
              Mike focuses on athletic performance, injury prevention, and building physical resilience for our athletes.
            </p>
          </div>
        </div>
      </Section>
    </div>
  </div>
);

export default AboutPage;