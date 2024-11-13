import React from 'react';
import { HandHeart, Users, Megaphone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolvedPage = () => {
  const opportunities = [
    {
      icon: HandHeart,
      title: "Direct Support",
      description: "Work directly with individuals and families through our various support programs.",
      roles: [
        "Doula Program Support",
        "Resource Navigator",
        "Peer Support Specialist",
        "Family Liaison"
      ]
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help us build stronger connections and raise awareness in our communities.",
      roles: [
        "Event Coordinator",
        "Community Ambassador",
        "Workshop Facilitator",
        "Outreach Specialist"
      ]
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Join our advocacy efforts for systemic change and policy reform.",
      roles: [
        "Policy Research Assistant",
        "Legislative Advocate",
        "Public Speaker",
        "Campaign Coordinator"
      ]
    },
    {
      icon: Calendar,
      title: "Administrative Support",
      description: "Support our operations and help us maintain efficient programs.",
      roles: [
        "Data Entry Specialist",
        "Grant Writer",
        "Social Media Manager",
        "Office Support"
      ]
    }
  ];

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
              Get Involved
            </h1>
            <p className="text-xl text-purple-100">
              Join our community of dedicated volunteers and advocates making a real difference in Arizona's criminal justice system.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <opportunity.icon className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Available Roles:</h4>
                  <ul className="space-y-2">
                    {opportunity.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Volunteer Application</h2>
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
                    <option value="direct-support">Direct Support</option>
                    <option value="community-outreach">Community Outreach</option>
                    <option value="advocacy">Advocacy</option>
                    <option value="administrative">Administrative Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Ways to Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Support</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't volunteer right now? There are many other ways to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Make a Donation
              </Link>
              <Link
                to="/action"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
              >
                Join Our Action Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;