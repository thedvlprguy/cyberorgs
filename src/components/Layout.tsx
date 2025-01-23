import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Globe, BookOpen, Users, Github, GitFork, Star, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-kali-dark font-minecraft flex flex-col">
      {/* Header */}
      <header className="bg-kali-card border-b border-kali-primary/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Terminal className="w-8 h-8 text-kali-primary" />
              <Link to="/" className="text-2xl font-bold text-kali-primary">CyberOrgs_</Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/whoami" 
                className={`text-kali-text hover:text-kali-primary transition font-light ${
                  location.pathname === '/whoami' ? 'text-kali-primary' : ''
                }`}
              >
                whoami
              </Link>
              <Link 
                to="/about" 
                className={`text-kali-text hover:text-kali-primary transition font-light ${
                  location.pathname === '/about' ? 'text-kali-primary' : ''
                }`}
              >
                About
              </Link>
              <Link 
                to="/organizations" 
                className={`text-kali-text hover:text-kali-primary transition font-light ${
                  location.pathname === '/organizations' ? 'text-kali-primary' : ''
                }`}
              >
                Organizations
              </Link>
              <Link 
                to="/resources" 
                className={`text-kali-text hover:text-kali-primary transition font-light ${
                  location.pathname === '/resources' ? 'text-kali-primary' : ''
                }`}
              >
                Resources
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/thedvlprguy/cyberorgs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kali-text hover:text-kali-primary transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/thedvlprguy/cyberorgs/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kali-text hover:text-kali-primary transition"
              >
                <GitFork className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/thedvlprguy/cyberorgs/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kali-text hover:text-kali-primary transition"
              >
                <Star className="w-6 h-6" />
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-kali-text hover:text-kali-primary transition"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/whoami" 
                  className={`text-kali-text hover:text-kali-primary transition font-light ${
                    location.pathname === '/whoami' ? 'text-kali-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  whoami
                </Link>
                <Link 
                  to="/about" 
                  className={`text-kali-text hover:text-kali-primary transition font-light ${
                    location.pathname === '/about' ? 'text-kali-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/organizations" 
                  className={`text-kali-text hover:text-kali-primary transition font-light ${
                    location.pathname === '/organizations' ? 'text-kali-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Organizations
                </Link>
                <Link 
                  to="/resources" 
                  className={`text-kali-text hover:text-kali-primary transition font-light ${
                    location.pathname === '/resources' ? 'text-kali-primary' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kali-card border-t border-kali-primary/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="w-6 h-6 text-kali-primary" />
              <span className="text-kali-primary font-semibold">CyberOrgs_</span>
            </div>
            <p className="text-kali-text font-light text-sm mb-4 md:mb-0">
              Made with 💚 by <a href="https://github.com/thedvlprguy" target="_blank" rel="noopener noreferrer" className="text-kali-primary hover:text-kali-secondary">@thedvlprguy</a>
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-kali-text hover:text-kali-primary transition">
                <Globe className="w-5 h-5" />
              </Link>
              <Link to="/resources" className="text-kali-text hover:text-kali-primary transition">
                <BookOpen className="w-5 h-5" />
              </Link>
              <Link to="/organizations" className="text-kali-text hover:text-kali-primary transition">
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;