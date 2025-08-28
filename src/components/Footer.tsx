import React from 'react';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">Manchester Motors</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted automotive partner in Manchester, NH. Quality used cars and expert 
              repair services since 2008.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>1234 Manchester Road, Manchester, NH 03104</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>Sales: (603) 555-0123 | Service: (603) 555-0124</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>info@manchestermotors.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                Used Car Sales
              </li>
              <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                General Repairs
              </li>
              <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                Maintenance Services
              </li>
              <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                State Inspections
              </li>
              <li className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">
                Body Work
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Business Hours</span>
              </div>
              <div className="text-sm space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-12 text-center">
          <p className="text-gray-400">
            © 2024 Manchester Motors. All rights reserved. | Licensed Auto Dealer | ASE Certified Mechanics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;