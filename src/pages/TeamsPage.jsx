import React from 'react';
import Section from '../components/common/Section';

const TeamCard = ({ teamName }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 text-center">
    <h3 className="text-2xl font-semibold text-red-400 mb-4">{teamName}</h3>
    <p className="text-gray-400 mb-4">Coach: [Coach Name]</p>
    <p className="text-sm text-gray-500">
      A competitive team focused on skill development and teamwork. Currently accepting tryout inquiries.
    </p>
    <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-md shadow-lg">
      View Roster
    </button>
  </div>
);

const TeamsPage = () => {
  const boysTeams = ['10U Boys', '11U Boys', '12U Boys', '13U Boys', '14U Boys', '15U Boys', '16U Boys', '17U Boys'];
  const girlsTeams = ['10U Girls', '11U Girls', '12U Girls', '13U Girls', '14U Girls', '15U Girls', '16U Girls', '17U Girls'];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-12 text-center">
            Our Teams
          </h1>
        </Section>

        <Section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">Boys Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boysTeams.map((team, index) => (
              <TeamCard key={index} teamName={team} />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">Girls Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {girlsTeams.map((team, index) => (
              <TeamCard key={index} teamName={team} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TeamsPage;