import React from 'react';
import { Wrench, Car, Settings, Shield, Clock, CheckCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'General Repairs',
    description: 'Complete automotive repair services for all makes and models.',
    features: ['Engine Diagnostics', 'Brake Service', 'Transmission Repair', 'Electrical Systems']
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Maintenance',
    description: 'Regular maintenance to keep your vehicle running smoothly.',
    features: ['Oil Changes', 'Tire Rotation', 'Filter Replacement', 'Fluid Checks']
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Inspections',
    description: 'State inspections and safety checks for your peace of mind.',
    features: ['State Inspection', 'Emissions Testing', 'Safety Inspection', 'Pre-Purchase Inspection']
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Expert Automotive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to major repairs, our certified mechanics provide 
            quality service you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-orange-600 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Why Choose Manchester Motors?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4 text-orange-300" />
              <h4 className="text-xl font-semibold mb-2">Fast Service</h4>
              <p className="text-blue-100">Most repairs completed same day</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4 text-orange-300" />
              <h4 className="text-xl font-semibold mb-2">Guaranteed Work</h4>
              <p className="text-blue-100">All services backed by our warranty</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 mb-4 text-orange-300" />
              <h4 className="text-xl font-semibold mb-2">Certified Mechanics</h4>
              <p className="text-blue-100">ASE certified technicians</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;