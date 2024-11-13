import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-purple-100">
              Comprehensive solutions for systemic change through independent oversight, legal reform, harm reduction, and personal support.
            </p>
          </div>
        </div>
      </section>

      {/* Prison Oversight Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-6">Independent Prison Oversight</h2>
            <p className="text-xl mb-8">
              Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and evidence-based advocacy. Our oversight program works to improve conditions, protect rights, and promote effective rehabilitation.
            </p>
            <Link 
              to="/programs/prison-oversight"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-md hover:bg-purple-50 transition-colors text-lg font-semibold"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Legal System Reform Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Criminal Legal System Reform</h2>
            <p className="text-xl mb-8">
              Working to transform the justice system through evidence-based policy reform, legislative advocacy, and community engagement. We focus on creating meaningful changes that promote fairness and public safety.
            </p>
            <Link 
              to="/programs/legal-system"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-md hover:bg-purple-50 transition-colors text-lg font-semibold"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Substance Use Risk Mitigation Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-6">Substance Use Risk Mitigation</h2>
            <p className="text-xl mb-8">
              Implementing comprehensive strategies to support individuals and communities through evidence-based approaches. Our program provides education, support services, and community resources to create positive change.
            </p>
            <Link 
              to="/programs/substance-use"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-md hover:bg-purple-50 transition-colors text-lg font-semibold"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SUDT Doula Program Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto text-white">
            <h2 className="text-4xl font-bold mb-6">SUDT Doula Program</h2>
            <p className="text-xl mb-8">
              Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services. Our program provides personalized care throughout pregnancy and beyond.
            </p>
            <Link 
              to="/programs/doula-program"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-md hover:bg-purple-50 transition-colors text-lg font-semibold"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Programs</h2>
            <p className="text-xl mb-8">
              Your support enables us to continue providing these vital programs and expand our impact in the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/support"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-md hover:bg-purple-800 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;