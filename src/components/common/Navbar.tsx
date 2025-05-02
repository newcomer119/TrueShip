import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0118]/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TrueShip Careers
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/projects' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Projects
            </Link>
            <a 
              href="https://forms.gle/Vfj2eeFUuY4jbBw9A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="primary" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Register Now
              </Button>
            </a>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0118]/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              className={`text-base font-medium ${
                location.pathname === '/' ? 'text-white' : 'text-white/70'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`text-base font-medium ${
                location.pathname === '/projects' ? 'text-white' : 'text-white/70'
              }`}
            >
              Projects
            </Link>
            <a 
              href="https://forms.gle/Vfj2eeFUuY4jbBw9A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button 
                variant="primary" 
                fullWidth
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Register Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;