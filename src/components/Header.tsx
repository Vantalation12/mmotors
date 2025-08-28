import React, { useState } from 'react';
import { Menu, X, Car, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold">Manchester Motors</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('inventory')}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Used Cars
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 hover:text-orange-500 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 hover:text-orange-500 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('inventory')}
                className="text-left py-2 hover:text-orange-500 transition-colors duration-200"
              >
                Used Cars
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 hover:text-orange-500 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 hover:text-orange-500 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;