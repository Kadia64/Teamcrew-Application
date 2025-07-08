import React from 'react';
import teamCrewLogo from '../../assets/images/teamcrew-logo.png';

const Logo = () => (
  <img
    src={teamCrewLogo}
    alt="TeamCrew Logo"
    className="h-12 md:h-16 w-auto"
    onError={(e) => { 
      e.target.onerror = null; 
      e.target.src = "https://placehold.co/150x50/B80F0A/ffffff?text=TeamCrew"; 
    }}
  />
);

export default Logo;
