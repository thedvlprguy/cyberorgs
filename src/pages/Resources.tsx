import React, { useState } from 'react';
import { Search, Terminal, ExternalLink } from 'lucide-react';

const resources = [
  {
    name: "OWASP Web Security Testing Guide",
    description: "Comprehensive guide for web application security testing.",
    category: "Testing",
    link: "https://owasp.org/www-project-web-security-testing-guide/",
    tags: ["Web Security", "Penetration Testing", "Guide"]
  },
  {
    name: "Awesome Hacking Resources",
    description: "A collection of hacking tools, resources, and references.",
    category: "Collection",
    link: "https://github.com/vitalysim/Awesome-Hacking-Resources",
    tags: ["Hacking", "Tools", "Learning"]
  },
  {
    name: "Hack The Box",
    description: "Online platform to test and advance your penetration testing skills.",
    category: "Practice",
    link: "https://www.hackthebox.eu/",
    tags: ["CTF", "Penetration Testing", "Labs"]
  },
  {
    name: "PortSwigger Web Security Academy",
    description: "Free online web security training from the creators of Burp Suite.",
    category: "Learning",
    link: "https://portswigger.net/web-security",
    tags: ["Web Security", "Training", "Labs"]
  },
  {
    name: "Cybrary",
    description: "Free online cyber security training and certification courses.",
    category: "Training",
    link: "https://www.cybrary.it/",
    tags: ["Courses", "Certification", "Training"]
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredResources = resources.filter(resource => 
    resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-kali-primary mb-4">
          Security_Resources
        </h2>
        <p className="text-xl text-kali-text mb-8 font-light tracking-wide">
          &gt; Curated collection of cybersecurity learning resources
        </p>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="$ search resources..."
            className="w-full px-4 py-3 pl-12 rounded-lg bg-kali-card border border-kali-primary/30 text-kali-text placeholder-kali-text/50 focus:outline-none focus:ring-2 focus:ring-kali-primary focus:border-transparent font-minecraft font-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 text-kali-primary w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <div key={index} className="bg-kali-card border border-kali-primary/30 rounded-lg p-6 hover:border-kali-primary transition duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-kali-primary">{resource.name}</h3>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kali-secondary hover:text-kali-primary"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-kali-text mb-4 font-light leading-relaxed text-sm tracking-wide">
              {resource.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {resource.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 bg-kali-primary/10 text-kali-primary text-sm rounded-full border border-kali-primary/30 font-light"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="border-t border-kali-primary/30 pt-4">
              <div className="flex items-center space-x-2 font-light text-sm">
                <Terminal className="w-4 h-4 text-kali-primary flex-shrink-0" />
                <span className="text-kali-text">{resource.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;