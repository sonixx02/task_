import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-primary text-2xl font-bold">
            AMRUTAM
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/find-doctors" className="text-gray-700 hover:text-primary">
              Find Doctors
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">
              About Us
            </Link>
            
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Sign-up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;