
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-tech-purple to-tech-blue rounded-md w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TT</span>
          </div>
          <span className="font-bold text-xl text-gray-800">TechTalks Unite</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost">Events</Button>
          </Link>
          <Link to="/submit">
            <Button variant="default" className="bg-tech-purple hover:bg-tech-dark-purple">
              Submit Event
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
