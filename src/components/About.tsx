import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Manchester Motors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Family-owned, we've built our reputation on honesty, 
            quality, and exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3729285/pexels-photo-3729285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Manchester Motors Workshop"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Your Local Automotive Experts
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Manchester Motors, we understand that buying a car or getting it serviced 
              is a significant investment. That's why we're committed to providing transparent, 
              honest service that you can trust.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced team of mechanics and sales professionals work together to ensure 
              every customer leaves satisfied with their experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">Certified Mechanics</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">Family Owned</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-slate-900">15+ Years</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;