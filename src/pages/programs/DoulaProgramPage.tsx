import React from 'react';
import { Heart, Users, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoulaProgramPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SUDT Doula Program
            </h1>
            <p className="text-xl text-purple-100">
              Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our trained doulas provide individualized support throughout pregnancy, birth, and postpartum periods, with specialized understanding of substance use challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advocacy Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We advocate for mothers in healthcare settings, ensuring they receive respectful, non-judgmental care and appropriate treatment options.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recovery Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our program integrates recovery support with doula services, helping mothers maintain their recovery goals while preparing for and adjusting to parenthood.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide extended postpartum support, helping mothers navigate early parenthood while maintaining their recovery and accessing needed resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-700">Mothers Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-700">Positive Birth Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-gray-700">Recovery Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Doula Program</h2>
            <p className="text-xl mb-8">
              Help us continue providing vital support to mothers and their babies through our specialized doula services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-purple-800 transition-colors"
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

export default DoulaProgramPage;