import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About & Address */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Praxis Initiative</span>
            </div>
            <p className="text-sm">
              Transforming lives through prison oversight, legal system change, and comprehensive support programs. We believe in evidence-based solutions and community-driven change.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Change Ave, Phoenix, AZ 85001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@praxisinitiative.org" className="text-sm hover:text-purple-400">info@praxisinitiative.org</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Partner Organizations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Partner Organizations</h3>
            <ul className="space-y-2">
              <li><a href="https://famm.org" className="hover:text-purple-400 text-sm">FAMM</a></li>
              <li><a href="https://conservative.org" className="hover:text-purple-400 text-sm">American Conservative Union</a></li>
              <li><a href="https://www.aclu.org/other/aclu-national-prison-project" className="hover:text-purple-400 text-sm">ACLU National Prison Project</a></li>
              <li><a href="https://justaction.network" className="hover:text-purple-400 text-sm">Just Action Network</a></li>
              <li><a href="https://dream.org" className="hover:text-purple-400 text-sm">Dream.Org</a></li>
              <li><a href="https://rightoncrime.com" className="hover:text-purple-400 text-sm">Right On Crime</a></li>
              <li><a href="https://www.fwd.us" className="hover:text-purple-400 text-sm">FWD.us</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://pjil.lbj.utexas.edu/" className="hover:text-purple-400 text-sm">Prison and Jail Innovation Lab</a></li>
              <li><a href="https://prisonoversight.org/" className="hover:text-purple-400 text-sm">National Resource Center for Correctional Oversight</a></li>
              <li><a href="https://www.prisonpolicy.org/" className="hover:text-purple-400 text-sm">Prison Policy Initiative</a></li>
              <li><a href="https://www.vera.org/" className="hover:text-purple-400 text-sm">Vera Institute of Justice</a></li>
              <li><a href="https://www.themarshallproject.org/" className="hover:text-purple-400 text-sm">Marshall Project</a></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-purple-400"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-purple-400"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-purple-400"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Join Our Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {currentYear} Praxis Initiative - All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-purple-400">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-purple-400">Terms of Service</Link>
              <Link to="/accessibility" className="text-sm hover:text-purple-400">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;