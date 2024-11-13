import React, { useState } from 'react';
import { Heart, CreditCard, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const predefinedAmounts = [25, 50, 100, 250];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Make Your Impact Today
            </h1>
            <p className="text-xl text-purple-100">
              Your donation directly supports our mission to transform lives through prison oversight, legal system reform, and comprehensive support programs.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <Heart className="h-12 w-12 text-purple-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Donation</h2>
                <p className="text-gray-600 mb-8">
                  Choose an amount to support our programs and create lasting change in our community.
                </p>

                {/* Amount Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`px-6 py-3 border-2 rounded-md transition-colors font-semibold ${
                        selectedAmount === amount
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full px-8 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Donate with Card
                  </button>
                  <button className="w-full px-6 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                    <Wallet className="h-5 w-5 mr-2" />
                    Donate with PayPal
                  </button>
                </div>

                <p className="mt-6 text-sm text-gray-500 text-center">
                  Your donation is tax-deductible. You will receive a receipt for your records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$25</div>
                <p className="text-gray-600">Provides educational materials for one person</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$100</div>
                <p className="text-gray-600">Supports one day of prison monitoring activities</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$250</div>
                <p className="text-gray-600">Funds comprehensive support for one family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Help</h2>
            <p className="text-xl text-gray-600 mb-8">
              Beyond financial support, there are many ways to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Volunteer With Us
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

export default DonationPage;