import React from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: "Prison Oversight Community Forum",
      date: "April 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Phoenix Community Center",
      category: "Community Forum",
      description: "Join us for an open discussion about prison oversight in Arizona. Learn about our monitoring efforts and how you can get involved.",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80"
    },
    {
      title: "Harm Reduction Training Workshop",
      date: "April 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Wellness Center Downtown",
      category: "Training",
      description: "Comprehensive training on harm reduction strategies and overdose prevention. Certificates provided upon completion.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    },
    {
      title: "Legislative Advocacy Day",
      date: "May 1, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Arizona State Capitol",
      category: "Advocacy",
      description: "Annual advocacy day at the capitol. Meet with legislators and learn about current reform initiatives.",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80"
    },
    {
      title: "SUDT Doula Program Information Session",
      date: "May 10, 2024",
      time: "5:30 PM - 7:00 PM",
      location: "Virtual Event",
      category: "Information Session",
      description: "Learn about our Substance Use Doula Training program and how to become a certified SUDT doula.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All Events", "Community Forum", "Training", "Advocacy", "Information Session"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-purple-100">
              Join us at our upcoming events and be part of the movement for positive change in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <Filter className="h-5 w-5 text-purple-600" />
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-purple-600 mb-3">
                    <span className="px-3 py-1 bg-purple-50 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3" />
                      {event.location}
                    </div>
                  </div>
                  <button className="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Host an Event with Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in organizing an event or workshop with Praxis Initiative? We're always looking to collaborate with community partners.
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Contact Our Events Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;