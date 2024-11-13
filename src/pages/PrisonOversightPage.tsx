import React from 'react';
import { Shield, ClipboardCheck, Scale, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrisonOversightPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Independent Prison Oversight
            </h1>
            <p className="text-xl text-purple-100">
              Ensuring accountability and transparency in Arizona's correctional facilities through comprehensive monitoring and evidence-based advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Our Oversight Program Works</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Systematic Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team conducts regular, comprehensive assessments of correctional facilities across Arizona. Using evidence-based monitoring tools and protocols, we evaluate conditions, policies, and practices that impact the daily lives of incarcerated individuals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <ClipboardCheck className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Collection & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We gather and analyze data on key indicators of facility performance, including healthcare access, living conditions, programming opportunities, and staff conduct. This data informs our advocacy efforts and helps identify areas requiring immediate attention.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Advocacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on our findings, we develop and advocate for policy recommendations to improve conditions and practices. We work closely with legislators, corrections officials, and other stakeholders to implement meaningful reforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Engagement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We actively engage with families of incarcerated individuals, community organizations, and advocacy groups to ensure our oversight efforts reflect the needs and concerns of those most impacted by the correctional system.
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
              <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-700">Facilities Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Policy Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">35,000+</div>
              <div className="text-gray-700">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Access Improvement</h3>
              <p className="text-gray-600 mb-4">
                Our monitoring identified significant delays in medical care access. Through targeted advocacy, we helped implement a new healthcare request system that reduced wait times by 60%.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Reform Success</h3>
              <p className="text-gray-600 mb-4">
                We successfully advocated for new policies requiring enhanced staff training and accountability measures, leading to a 40% reduction in reported incidents of misconduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Oversight Efforts</h2>
            <p className="text-xl mb-8">
              Your support helps us maintain and expand our vital oversight work. Join us in creating a more transparent and accountable correctional system.
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

export default PrisonOversightPage;