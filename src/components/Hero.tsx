import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Lives Through Advocacy & Support
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Meaningful change through independent prison oversight, criminal legal system improvements, and comprehensive support, education, and solution development to address substance use in society with a focus on holistic wellness and community safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-lg font-semibold"
            >
              Make a Donation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/action"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1.9M+</div>
              <div className="text-gray-200">People Incarcerated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">19M+</div>
              <div className="text-gray-200">Americans with Felony Records</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">107K+</div>
              <div className="text-gray-200">Annual Overdose Deaths</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">340K+</div>
              <div className="text-gray-200">Births Impacted Annually</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;