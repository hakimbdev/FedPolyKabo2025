import React from 'react';
import { Target, Shield, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1595074475099-7576de829bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About BIARN</h1>
            <p className="text-xl md:text-2xl">
              Revolutionizing agriculture across Northwestern Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* About BIARN Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The Barau Initiative for Agricultural Revolution in Northwest, Nigeria (BIARN) is a subset of Barau I. Jibrin (BIJ) Foundation, a non-profit organization committed to human development. The BIARN is established to help revolutionize agriculture in the seven northwestern states of Nigeria—Jigawa, Kaduna, Kano, Katsina, Kebbi, Sokoto, and Zamfara. Established under the leadership of Distinguished Senator Dr. Barau I. Jibrin, CFR. This initiative aims to empower young and mid-career farmers through targeted interventions, access to funding, and technical support. Using Nigeria's vast arable land and modern agricultural techniques, BIARN seeks to restore the region's status as the country's food basket, ensuring food security and economic sustainability.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Through strategic partnerships with the Bank of Agriculture (BOA), BIARN will cover for a SINGLE DIGIT INTEREST LOAN of up to ₦5 million per beneficiary to a selected 558 youth farmers, with a focus on Maize and Rice production. This program aligns with the Renewed Hope Agenda of President Bola Ahmed Tinubu, aiming to promote agricultural self-sufficiency, economic empowerment, and national development.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To re-position the Northwestern States into a leading producer, exporter of agricultural produce, ensuring food security, economic growth, and youth empowerment through sustainable agricultural practices and strategic partnerships.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="text-gray-600 text-lg space-y-4">
                <li>1. To empower young and mid-career farmers with financial support, training, and access to improved agricultural inputs.</li>
                <li>2. To boost food production and reduce food prices through increased cultivation of Maize and Rice.</li>
                <li>3. To enhance Nigeria's agricultural self-sufficiency and position the Northwest as a major contributor to the nation's food supply.</li>
                <li>4. To create job opportunities and economic stability for young agricultural entrepreneurs.</li>
                <li>5. To foster innovation in farming practices by integrating modern techniques and research-driven solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "To empower 558 youth farmers across 186 LGAs in the North West with funding and resources for the 2025 farming season.",
              "To Provide a SINGLE-DIGIT INTEREST loan of up to ₦5 million per participant through the partnership with the Bank of Agriculture.",
              "To Facilitate physical and Virtual training, mentorship, and technical support for beneficiaries to enhance productivity.",
              "To Increase maize and rice production to in order to enhance national food security and economic stability.",
              "To Establish a long-term framework for development of agriculture in the northwest geopolitical zone."
            ].map((objective, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Innovation",
                description: "Embracing modern agricultural technologies and practices"
              },
              {
                icon: Shield,
                title: "Sustainability",
                description: "Promoting environmentally conscious farming methods"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong farmer networks and cooperatives"
              },
              {
                icon: Leaf,
                title: "Growth",
                description: "Fostering continuous improvement and development"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-red-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Farmers in the field"
              className="rounded-lg shadow-lg h-[400px] object-cover"
            />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Transforming Lives</h3>
                <p className="text-gray-600">
                  Since our inception, we've helped over 500,000 farmers across seven states
                  improve their yields and livelihoods through modern farming techniques and
                  sustainable practices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  Our climate-smart agriculture initiatives have helped reduce water usage
                  by 30% while increasing crop resilience to climate change.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Economic Growth</h3>
                <p className="text-gray-600">
                  Through our market linkage programs, we've helped farmers increase their
                  income by an average of 35% while creating sustainable value chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;