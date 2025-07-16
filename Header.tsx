import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Video } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Video className="text-white text-xl" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dark">InsegneVideo</h1>
              <p className="text-sm text-gray-600">Dal 1998</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <a href="#settori" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Settori
            </a>
            <a href="#risultati" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Risultati
            </a>
            <a href="#roi" className="text-gray-700 hover:text-primary font-medium transition-colors">
              ROI Calculator
            </a>
            <a href="#competitor" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Vs Competitor
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('verifica-idoneita');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Prova GRATIS
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="#settori"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                Settori
              </a>
              <a
                href="#risultati"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                Risultati
              </a>
              <a
                href="#roi"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                ROI Calculator
              </a>
              <a
                href="#competitor"
                className="text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                Vs Competitor
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('verifica-idoneita');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="btn-primary w-full mt-3"
              >
                Prova GRATIS
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;