import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamsPage from './pages/TeamsPage';
import TournamentsPage from './pages/TournamentsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const setPage = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Dynamically add Roboto and Teko fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Teko:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply basic body styles for the theme
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.fontFamily = 'Roboto, sans-serif';
    document.body.style.color = '#e2e8f0';
    document.body.style.margin = '0';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'teams':
        return <TeamsPage />;
      case 'tournaments':
        return <TournamentsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
