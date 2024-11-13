import React from 'react';
import { Shield, Scale, Heart, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Shield,
      title: 'Independent Prison Oversight',
      description: 'Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and advocacy.',
      link: '/programs/prison-oversight'
    },
    {
      icon: Scale,
      title: 'Criminal Legal System Just-outcomes Enhancement',
      description: 'Working to reform and improve the justice system through policy advocacy and community engagement.',
      link: '/programs/legal-system'
    },
    {
      icon: Heart,
      title: 'Substance Use Risk Mitigation',
      description: 'Providing evidence-based support and advocacy for harm reduction and recovery services.',
      link: '/programs/substance-use'
    },
    {
      icon: Users,
      title: 'Substance Use Spectrum Trained Doula Program',
      description: 'Supporting individuals through personalized care and advocacy during their recovery journey.',
      link: '/programs/doula-program'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for systemic change and individual support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col"
            >
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-auto">
                <program.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {program.description}
              </p>
              <a
                href={program.link}
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center group justify-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;