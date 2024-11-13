import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "John Fabricius",
      role: "Executive Director & Co-founder",
      bio: "Formerly incarcerated for 15 years in the Arizona Department of Corrections, John's experience across 14 different units and 9 complexes, including private facilities in Indiana and Oklahoma, drives his passion for reform.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "J Alexandria Hunt-Garcia",
      role: "Policy Director & Co-founder",
      bio: "Drawing from five years of personal experience at the Perryville complex in Goodyear, AZ, Alexandria brings vital insights to policy reform and advocacy initiatives.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Jessica Johnson",
      role: "Legislative Director & Co-founder",
      bio: "With eight years of incarceration experience at the Perryville complex, Jessica channels her understanding into effective legislative strategies and reform.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const bottomTeam = [
    {
      name: "Sherri Scates",
      role: "Operations Coordinator",
      bio: "Motivated by her sons' experiences with incarceration, including one currently serving a 30-year sentence and another lost to suicide, Sherri brings a parent's perspective to reform advocacy.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
    },
    {
      name: "Mindi Kraicinski",
      role: "Special Advisor",
      bio: "A 26-year veteran correctional officer, Mindi served at the Eyman and Florence complexes, bringing extensive experience in case management and specialized services to our mission.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Led by directly impacted individuals committed to transformative change
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;