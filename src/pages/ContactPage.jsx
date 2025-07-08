import React, { useState } from 'react';
import Section from '../components/common/Section';

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
    <div className="min-h-screen bg-gray-900 text-gray-200 py-20 px-4 md:px-8">
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
                  <p className="text-gray-300">(217) 220-0395</p>
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
                    className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500 text-gray-200"
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
                    className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500 text-gray-200"
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
                    className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-red-500 text-gray-200"
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

export default ContactPage;