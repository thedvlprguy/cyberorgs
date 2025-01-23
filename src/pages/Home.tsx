import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-kali-primary mb-6">
          CyberOrgs_
        </h1>
        <p className="text-xl text-kali-text mb-8 font-light tracking-wide max-w-3xl mx-auto">
          &gt; Your gateway to cybersecurity organizations and opportunities. 
          Discover, learn, and contribute to the world of information security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/organizations"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-kali-primary/10 text-kali-primary border border-kali-primary/30 rounded-lg hover:bg-kali-primary/20 transition duration-300"
          >
            <Terminal className="w-5 h-5" />
            <span>Browse Organizations</span>
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-kali-card text-kali-text border border-kali-primary/30 rounded-lg hover:bg-kali-card/80 transition duration-300"
          >
            <Terminal className="w-5 h-5" />
            <span>Explore Resources</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;