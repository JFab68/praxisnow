import React from 'react';
import { HandHeart, Users, Megaphone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionCenterPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Take Action Now
            </h1>
            <p className="text-xl text-purple-100">
              Join us in creating meaningful change through advocacy, volunteering, and community engagement. Your involvement makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <HandHeart className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our dedicated team of volunteers supporting various programs and initiatives. We offer training and flexible opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Program support roles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Event coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Administrative assistance
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <Megaphone className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advocacy</h3>
                <p className="text-gray-600 mb-6">
                  Amplify our message and help drive policy change through grassroots advocacy efforts.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Contact legislators
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Share your story
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                    Social media activism
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Form */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join Our Movement</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                    Areas of Interest
                  </label>
                  <select
                    id="interests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select an area</option>
                    <option value="prison-oversight">Prison Oversight</option>
                    <option value="legal-reform">Legal System Reform</option>
                    <option value="harm-reduction">Harm Reduction</option>
                    <option value="doula-program">SUDT Doula Program</option>
                    <option value="general">General Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to answer your questions and help you find the best way to get involved.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@praxisinitiative.org</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Change Ave, Phoenix, AZ</p>
              </div>
              <div className="flex flex-col items-center">
                <Megaphone className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-purple-600">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-purple-600">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActionCenterPage;