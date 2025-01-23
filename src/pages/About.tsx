import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-kali-card border border-kali-primary/30 rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl font-bold text-kali-primary mb-6">
              About_CyberOrgs
            </h1>
            <p className="text-kali-text font-light mb-6 leading-relaxed">
              Hi there! I'm @thedvlprguy, a passionate cybersecurity enthusiast and developer. 
              I created CyberOrgs to help connect aspiring cybersecurity professionals with 
              organizations that are making a difference in the field.
            </p>
            <p className="text-kali-text font-light mb-8 leading-relaxed">
              This platform serves as a comprehensive directory of cybersecurity organizations, 
              making it easier for individuals to find opportunities to contribute to open-source 
              security projects and advance their careers in cybersecurity.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/thedvlprguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kali-text hover:text-kali-primary transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/aditya-bhai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kali-text hover:text-kali-primary transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:hey@thedvlprguy.com" 
                className="text-kali-text hover:text-kali-primary transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="./images/aditya.png"
              alt="Cybersecurity Professional"
              className="rounded-lg shadow-lg border-2 border-kali-primary/30 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;