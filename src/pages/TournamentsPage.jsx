import React, { useState } from 'react';
import Section from '../components/common/Section';

import summer_live_s1  from '../assets/images/summer-live-s1.jpg';
import cali_live from '../assets/images/cali-live.jpg';
import agusta_live_s1 from '../assets/images/agusta-live-s1.jpg';
import agusta_live_s2 from '../assets/images/agusta-live-s2.jpg';
import summer_live_s2 from '../assets/images/summer-live-s2.jpg';
import cali_live_summer_finale from '../assets/images/cali-live-summer-finale.jpg';
import summer_live_finale from '../assets/images/summer-live-finale.jpg';
import made_nationals from '../assets/images/made-nationals.jpg';


const TournamentCard = ({ tournament, onViewDetails }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
    <div className="w-full">
      <img 
        src={tournament.image} 
        alt={tournament.name}
        className="w-full h-auto"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Tournament"; 
        }}
      />
    </div>
    <div className="p-4">
      <button 
        onClick={() => onViewDetails(tournament)}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm shadow-lg w-full transition-colors duration-200"
      >
        View Details
      </button>
    </div>
  </div>
);

const TournamentDetail = ({ tournament, onBack }) => (
  <div className="min-h-screen bg-gray-900 text-gray-200 py-20 px-4 md:px-8">
    <div className="container mx-auto max-w-4xl">
      <Section>
        <button 
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-8 text-center">
          {tournament.name}
        </h1>
        
        <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={tournament.image} 
            alt={tournament.name}
            className="w-full h-auto"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Tournament"; 
            }}
          />
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">Age Groups</h3>
              <p className="text-gray-300">{tournament.divisions}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">Date</h3>
              <p className="text-gray-300">{tournament.date}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 p-8 bg-gray-800 rounded-lg">
          <p className="text-gray-300 mb-2">For more event information, please contact:</p>
          <p className="text-xl font-semibold text-gray-200 mb-2">Tim Allen</p>
          <a 
            href="mailto:teamcrewbasketball@gmail.com" 
            className="text-red-400 hover:text-red-300 transition-colors duration-200"
          >
            teamcrewbasketball@gmail.com
          </a>
        </div>
      </Section>
    </div>
  </div>
);

const TournamentsPage = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);
  // Placeholder tournament data
  const tournaments = [
    {
      id: 1,
      name: "Summer Live S1",
      date: "July 9-11, 2025",
      location: "Phildepphia Expo Center",
      divisions: "10U-17U",
      image: summer_live_s1
    },
    {
      id: 2,
      name: "Cali-Live",
      date: "July 10-13, 2025",
      location: "Momentous Irvine, Ca",
      divisions: "12U-16U",
      image: cali_live
    },
    {
      id: 3,
      name: "Agusta Live S1",
      date: "July 10-13, 2025",
      location: "Agusta, GA August Convention Center",
      divisions: "14U-17U",
      image: agusta_live_s1
    },
    {
      id: 4,
      name: "Agusta Live S2",
      date: "July 17-20",
      location: "Agusta, GA August Convention Center",
      divisions: "10U-17U",
      image: agusta_live_s2
    },
    {
      id: 5,
      name: "Summer Live S2",
      date: "July 12-13",
      location: "Phildepphia Expo Center",
      divisions: "11U-15U",
      image: summer_live_s2
    },
    {
      id: 6,
      name: "Cali-Live Summer Finale",
      date: "July 17-20",
      location: "Momentous Sports Irvine, CA",
      divisions: "12U-17U",
      image: cali_live_summer_finale
    },
    {
      id: 7,
      name: "Summer Live Finale",
      date: "July 17-20",
      location: "Baltimore Convention Center",
      divisions: "13U-17U",
      image: summer_live_finale
    },
    {
      id: 8,
      name: "Made Nationals",
      date: "August 2-3, 2025",
      location: "Manheim, PA",
      divisions: "10U-16U",
      image: made_nationals
    }
  ];

  // If a tournament is selected, show the detail view
  if (selectedTournament) {
    return (
      <TournamentDetail 
        tournament={selectedTournament} 
        onBack={() => setSelectedTournament(null)} 
      />
    );
  }

  // Otherwise show the tournament grid
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-4 text-center">
            Upcoming Tournaments
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Check out our upcoming tournament schedule. TeamCrew teams compete in premier tournaments across the Midwest.
          </p>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <TournamentCard 
                key={tournament.id} 
                tournament={tournament} 
                onViewDetails={setSelectedTournament}
              />
            ))}
          </div>
        </Section>

        <Section className="mt-16">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
              Tournament Information
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All tournaments are competitive events that provide excellent opportunities for player development 
              and team growth. Registration details and specific team assignments will be communicated through 
              your team coach. For questions about tournament participation, please contact your team manager.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TournamentsPage;