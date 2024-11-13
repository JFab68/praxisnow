import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonateSection = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Support Arizona's Only Directly-Impacted Led Initiative
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Your donation directly supports our mission to transform Arizona's criminal legal system through lived experience and evidence-based advocacy. As a community-driven organization, we rely on supporters like you to continue our vital work.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg font-semibold"
          >
            Make Your Impact Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;