import React, { useState } from 'react';
import { Search, Terminal, ExternalLink } from 'lucide-react';

const organizations = [
  {
    name: "OWASP Foundation",
    description: "The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software through community-led open source software projects, hundreds of local chapters worldwide, tens of thousands of members, and leading educational and training conferences.",
    tags: ["Web Security", "Application Security", "Open Source"],
    opportunities: ["Project Contributors", "Chapter Leaders", "Security Researchers"],
    website: "https://owasp.org"
  },
  {
    name: "Cybersecurity & Infrastructure Security Agency",
    description: "CISA leads the national effort to understand, manage, and reduce risk to our cyber and physical infrastructure, working with partners to defend against today's threats and collaborating to build a secure and resilient infrastructure for the future.",
    tags: ["Infrastructure Security", "Government", "Incident Response"],
    opportunities: ["Security Analysts", "Incident Responders", "Research Fellows"],
    website: "https://www.cisa.gov"
  },
  {
    name: "Electronic Frontier Foundation",
    description: "The Electronic Frontier Foundation is the leading nonprofit organization defending civil liberties in the digital world, championing user privacy, free expression, and innovation.",
    tags: ["Digital Rights", "Privacy", "Advocacy"],
    opportunities: ["Legal Fellows", "Technology Fellows", "Activists"],
    website: "https://www.eff.org"
  },
  {
    name: "ISC2",
    description: "ISC2 is an international nonprofit membership association focused on inspiring a safe and secure cyber world. Best known for the acclaimed CISSP certification, ISC2 offers a portfolio of credentials that are part of a holistic, pragmatic approach to security.",
    tags: ["Certification", "Education", "Professional Development"],
    opportunities: ["Certification Programs", "Mentorship", "Research Contributions"],
    website: "https://www.isc2.org"
  },
  {
    name: "SANS Institute",
    description: "The SANS Institute is the most trusted and largest source for information security training and security certification in the world. It offers intensive, immersion training designed to help you and your staff master the practical steps necessary for defending systems and networks.",
    tags: ["Training", "Research", "Incident Handling"],
    opportunities: ["Training Programs", "Research Papers", "Instructor Positions"],
    website: "https://www.sans.org"
  },
  {
    name: "Center for Internet Security",
    description: "CIS is a forward-thinking nonprofit that harnesses the power of a global IT community to safeguard public and private organizations against cyber threats. The CIS Controls and CIS Benchmarks are global standards and recognized best practices for securing IT systems and data.",
    tags: ["Best Practices", "Compliance", "Security Standards"],
    opportunities: ["Security Benchmarks", "Critical Security Controls", "Community Defense"],
    website: "https://www.cisecurity.org"
  },
  {
    name: "Metasploit Project",
    description: "A well-known open-source penetration testing framework. Projects often involve improving exploits, payloads, and auxiliary modules.",
    tags: ["Penetration Testing", "Exploit Development", "Open Source"],
    opportunities: ["Code Contributors", "Module Developers", "Security Researchers"],
    website: "https://www.metasploit.com"
  },
  {
    name: "Tor Project",
    description: "Focused on privacy and anonymity tools. Projects typically revolve around enhancing the Tor network, improving security, and expanding accessibility.",
    tags: ["Privacy", "Anonymity", "Network Security"],
    opportunities: ["Network Development", "Documentation", "Outreach"],
    website: "https://www.torproject.org"
  },
  {
    name: "OpenSSL",
    description: "A widely used cryptographic library. Projects here focus on enhancing encryption, secure communications, and library performance.",
    tags: ["Cryptography", "Security", "Open Source"],
    opportunities: ["Core Development", "Security Auditing", "Documentation"],
    website: "https://www.openssl.org"
  },
  {
    name: "Wireshark",
    description: "A leading network protocol analyzer. Projects involve developing plugins and improving network analysis features.",
    tags: ["Network Analysis", "Protocol Analysis", "Open Source"],
    opportunities: ["Protocol Development", "UI Enhancement", "Plugin Creation"],
    website: "https://www.wireshark.org"
  },
  {
    name: "Kali Linux",
    description: "A penetration testing Linux distribution. Projects focus on improving tools, distribution infrastructure, and system security.",
    tags: ["Penetration Testing", "Linux", "Security Tools"],
    opportunities: ["Tool Development", "Documentation", "Testing"],
    website: "https://www.kali.org"
  },
  {
    name: "Crypto++",
    description: "A library for cryptography. Projects often involve implementing cryptographic algorithms or optimizing the library.",
    tags: ["Cryptography", "C++", "Security"],
    opportunities: ["Algorithm Implementation", "Performance Optimization", "Testing"],
    website: "https://www.cryptopp.com"
  }
];

const Organizations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOrgs = organizations.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-kali-primary mb-4">
          Discover_Cybersecurity_Organizations
        </h2>
        <p className="text-xl text-kali-text mb-8 font-light tracking-wide">
          &gt; Find opportunities to contribute to cybersecurity initiatives worldwide
        </p>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="$ search organizations..."
            className="w-full px-4 py-3 pl-12 rounded-lg bg-kali-card border border-kali-primary/30 text-kali-text placeholder-kali-text/50 focus:outline-none focus:ring-2 focus:ring-kali-primary focus:border-transparent font-minecraft font-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 text-kali-primary w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrgs.map((org, index) => (
          <div key={index} className="bg-kali-card border border-kali-primary/30 rounded-lg p-6 hover:border-kali-primary transition duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-kali-primary">{org.name}</h3>
              <a 
                href={org.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kali-secondary hover:text-kali-primary"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-kali-text mb-4 font-light leading-relaxed text-sm tracking-wide">{org.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {org.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-3 py-1 bg-kali-primary/10 text-kali-primary text-sm rounded-full border border-kali-primary/30 font-light"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="border-t border-kali-primary/30 pt-4">
              <h4 className="text-kali-secondary font-medium mb-2">&gt; Opportunities:</h4>
              <ul className="text-kali-text space-y-1">
                {org.opportunities.map((opportunity, oppIndex) => (
                  <li key={oppIndex} className="flex items-center space-x-2 font-light text-sm">
                    <Terminal className="w-4 h-4 text-kali-primary flex-shrink-0" />
                    <span>{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;