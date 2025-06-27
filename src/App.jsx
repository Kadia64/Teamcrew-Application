import React, { useState, useEffect, useRef, useCallback } from 'react';
// Tailwind CSS is assumed to be available in the environment.

const Logo = () => (
  // To resolve the image loading error in this environment,
  // we are using the contentFetchId for the uploaded logo directly.
  // This allows the image to be loaded from the environment's asset host.
  <img
    src="https://gemini.google.com/uploaded_files/uploaded:teamcrew-logo.png-7d540726-71ef-4349-8ef1-a3e412b331c5"
    alt="TeamCrew Logo"
    className="h-12 md:h-16 w-auto"
    // Added an onError fallback just in case the direct asset path doesn't resolve
    // in all contexts, though it should for uploaded files.
    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x50/B80F0A/ffffff?text=TeamCrew"; }}
  />
);

const NavLink = ({ children, page, currentPage, setPage }) => (
  <a
    href="#"
    onClick={() => setPage(page)}
    className={`relative group px-4 py-2 text-lg font-medium transition-colors duration-300
      ${currentPage === page ? 'text-red-500' : 'text-gray-200 hover:text-red-400'}
      before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-red-500 before:transition-all before:duration-300 before:-translate-x-1/2
      ${currentPage === page ? 'before:w-full' : 'group-hover:before:w-full'}`}
  >
    {children}
  </a>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 py-8 px-4 md:px-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-red-500 mb-2">TeamCrew Basketball</h3>
        <p>&copy; {new Date().getFullYear()} TeamCrew. All rights reserved.</p>
      </div>
      <div className="text-center md:text-right">
        <h4 className="text-lg font-semibold text-gray-200 mb-2">Contact Tim Allen</h4>
        <p>Phone: 217-392-5922</p>
        <p>Email: teamcrewbasketball@gmail.com</p>
      </div>
    </div>
  </footer>
);

const Section = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${className} transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      ref={domRef}
      id={id}
    >
      {children}
    </div>
  );
};

const HomePage = () => (
  <div className="min-h-screen bg-gray-900 text-gray-200 font-inter">
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Updated background to a more abstract, darker pattern for better text readability */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/181818/555555?text=Placeholder+Image')" }}>
        <div className="absolute inset-0 bg-black opacity-75"></div> {/* Increased opacity for even better contrast */}
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-6 leading-tight animate-fade-in-up">
            Welcome to TeamCrew Basketball
          </h1>
        </Section>
        <Section className="delay-200">
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Your hub for AAU basketball teams, schedules, and communication.
          </p>
        </Section>
        <Section className="delay-400">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up">
            Join a Team
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/333333/ffffff?text=Team+Training"; }}
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
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V7h2v5h-2zM9 14h2v2H9v-2z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Event Scheduling</h3>
            <p className="text-gray-400">Coaches can easily schedule games, practices, and team events with full details.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10 2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2zm-3 2a1 1 0 100 2 1 1 0 000-2z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Push Notifications</h3>
            <p className="text-gray-400">Parents and players receive instant notifications for schedule changes and updates.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 7.5a4.5 4.5 0 00-9 0V15h9v-1.5zm6-7.5a3 3 0 11-6 0 3 3 0 016 0zm-1.5 7.5a4.5 4.5 0 00-9 0V15h9v-1.5z"></path></svg>
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

const AboutPage = () => (
  <div className="min-h-screen bg-gray-900 text-gray-200 font-inter py-20 px-4 md:px-8">
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Team+Spirit"; }}
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/333333/ffffff?text=Coaching+Philosophy"; }}
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
              alt="Coach Tim Allen"
              className="rounded-full w-32 h-32 mx-auto mb-6 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Coach"; }}
            />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Tim Allen</h3>
            <p className="text-red-400 font-medium mb-4">Head Coach - 15U Girls</p>
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Coach"; }}
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/555555/ffffff?text=Trainer"; }}
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

const SchedulingPage = () => {
  const tournaments = [
    {
      name: 'Spring Slam Fest',
      date: 'April 20-21, 2025',
      location: 'Pleasant Plains High School, Pleasant Plains, IL',
      details: 'Featuring divisions for 10U-17U boys and girls. Three-game guarantee.'
    },
    {
      name: 'Summer Hoops Classic',
      date: 'June 14-15, 2025',
      location: 'Springfield Park District, Springfield, IL',
      details: 'Indoor tournament for all age groups. Awards for champions.'
    },
    {
      name: 'Fall Finale Tournament',
      date: 'October 5-6, 2025',
      location: 'Decatur Sports Center, Decatur, IL',
      details: 'Season-ending tournament with competitive matchups. Registration opens soon!'
    },
    {
      name: 'Winter Break Invitational',
      date: 'December 28-29, 2025',
      location: 'Lincoln Land Community College, Springfield, IL',
      details: 'Start your new year strong with this two-day event.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-12 text-center">
            Upcoming Schedule
          </h1>
        </Section>

        <Section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">Tournaments & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-red-400 mb-3">{tournament.name}</h3>
                <p className="text-gray-300 mb-2">
                  <strong className="text-red-500">Date:</strong> {tournament.date}
                </p>
                <p className="text-gray-300 mb-4">
                  <strong className="text-red-500">Location:</strong> {tournament.location}
                </p>
                <p className="text-gray-400 text-sm">
                  {tournament.details}
                </p>
                <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-md shadow-lg">
                  More Info
                </button>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">Regular Practices</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
            <p className="text-lg text-gray-300 mb-4">
              Regular team practices are held weekly at the TeamCrew Training Facility.
            </p>
            <p className="text-lg text-gray-300">
              Coaches will communicate specific practice times and any changes via the TeamCrew app.
            </p>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-md shadow-lg">
              View Practice Calendar
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just simulate a successful submission.
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <Section>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-12 text-center">
            Contact Us
          </h1>
        </Section>

        <Section className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:space-x-12 space-y-12 md:space-y-0">
            <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Get in Touch</h2>
              <p className="text-lg leading-relaxed mb-6">
                We'd love to hear from you! Whether you have questions about our teams,
                scheduling, or general inquiries, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Organization Manager</h3>
                  <p className="text-gray-300">Tim Allen</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Phone</h3>
                  <p className="text-gray-300">217-392-5922</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Email</h3>
                  <p className="text-gray-300">teamcrewbasketball@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400">Address (Example)</h3>
                  <p className="text-gray-300">123 Basketball Lane, Springfield, IL 62704</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
                {status && (
                  <p className="mt-4 text-sm text-center text-red-400">{status}</p>
                )}
              </form>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const setPage = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  }, []);

  useEffect(() => {
    // Dynamically add Inter font (or ensure it's loaded in the environment)
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply basic body styles for the theme
    document.body.style.backgroundColor = '#1a1a1a'; // Dark background
    document.body.style.fontFamily = 'Inter, sans-serif';
    document.body.style.color = '#e2e8f0'; // Light gray text
    document.body.style.margin = '0'; // Remove default margin
  }, []);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'scheduling': // Changed from 'teams'
        return <SchedulingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-black py-4 px-4 md:px-8 shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav>
            <ul className="flex space-x-4 md:space-x-8">
              <li><NavLink page="home" currentPage={currentPage} setPage={setPage}>Home</NavLink></li>
              <li><NavLink page="about" currentPage={currentPage} setPage={setPage}>About Us</NavLink></li>
              <li><NavLink page="scheduling" currentPage={currentPage} setPage={setPage}>Scheduling</NavLink></li>
              <li><NavLink page="contact" currentPage={currentPage} setPage={setPage}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area - adds padding top to clear fixed header */}
      <main className="flex-grow pt-20"> {/* Adjust pt-XX based on header height */}
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
