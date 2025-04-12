'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button, LinkButton } from '../../components/Button';
import { heroFadeIn, staggerContainer } from '../../lib/framer';
// Import icons directly to ensure consistent rendering
import ArrowRightIcon from 'lucide-react/dist/esm/icons/arrow-right';
import CodeIcon from 'lucide-react/dist/esm/icons/code';
import GithubIcon from 'lucide-react/dist/esm/icons/github';
import GlobeIcon from 'lucide-react/dist/esm/icons/globe';
import TerminalIcon from 'lucide-react/dist/esm/icons/terminal';
import Image from 'next/image';
// Import Simple Icons from react-icons
import { 
  SiStripe, 
  SiFacebook, 
  SiShopify, 
  SiApple, 
  SiNetflix, 
  SiAirbnb, 
  SiSlack, 
  SiAdobe, 
  SiSpotify, 
  SiCoinbase, 
  SiTwitch 
} from 'react-icons/si';

// Define company logos
const companyLogos = [
  { 
    name: 'Stripe',
    Icon: SiStripe,
    color: '#635BFF',
  },
  { 
    name: 'Meta',
    Icon: SiFacebook,
    color: '#1877F2',
  },
  { 
    name: 'Shopify',
    Icon: SiShopify,
    color: '#7AB55C',
  },
  { 
    name: 'Apple',
    Icon: SiApple,
    color: '#000000',
  },
  { 
    name: 'Netflix',
    Icon: SiNetflix,
    color: '#E50914',
  },
  { 
    name: 'Airbnb',
    Icon: SiAirbnb,
    color: '#FF5A5F',
  },
  { 
    name: 'Slack',
    Icon: SiSlack,
    color: '#4A154B',
  },
  { 
    name: 'Adobe',
    Icon: SiAdobe,
    color: '#FF0000',
  },
  { 
    name: 'Spotify',
    Icon: SiSpotify,
    color: '#1DB954',
  },
  {
    name: 'Coinbase', 
    Icon: SiCoinbase,
    color: '#0052FF',
  },
  {
    name: 'Twitch',
    Icon: SiTwitch,
    color: '#9146FF', 
  }
];

export default function Hero() {
  const logoRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLogo = Math.floor(Math.random() * companyLogos.length);
      if (logoRefs.current[randomLogo]) {
        logoRefs.current[randomLogo]?.classList.add('animate-pulse-once');
        setTimeout(() => {
          logoRefs.current[randomLogo]?.classList.remove('animate-pulse-once');
        }, 1000);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Code Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Eyebrow text */}
          <motion.div 
            variants={heroFadeIn}
            className="inline-block px-4 py-1.5 mb-6 bg-primary-100 text-primary-800 rounded-full font-medium text-sm"
          >
            The Next-Gen Developer Environment
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            variants={heroFadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Develop Faster With{' '}
            <span className="gradient-text relative inline-block">
              DevSpace
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50.5 4 148.5 2.5 298 2.5" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="6.23651" x2="298" y2="6.23651" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={heroFadeIn}
            className="text-xl md:text-2xl text-gray-600 mb-10 mx-auto"
          >
            The intelligent development environment that helps you code smarter, 
            not harder, with AI-powered assistance.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div
            variants={heroFadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <LinkButton href="https://dashboard.armordivison.in" size="lg" className="group">
              Get Started Free
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </LinkButton>
            <LinkButton href="https://github.com/devspace" size="lg" variant="outline" className="group">
              <GithubIcon className="mr-2 h-4 w-4" />
              View on GitHub
            </LinkButton>
          </motion.div>
          
          {/* Demo video/screenshot */}
          <motion.div 
            variants={heroFadeIn}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-2 px-4 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm flex-1 text-center">DevSpace</div>
            </div>
            <div className="relative">
              <img 
                src="/editor-screenshot.png" 
                alt="DevSpace Editor" 
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-8">
                <LinkButton 
                  href="https://dashboard.armordivison.in"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  size="lg"
                >
                  Watch Demo
                </LinkButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tech Partners */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-gray-500 text-sm uppercase tracking-wider mb-6 text-center">
            Trusted by developers from
          </div>
          
          {/* Logos marquee container */}
          <div className="relative w-full overflow-hidden py-6 group">
            {/* First set of logos */}
            <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap">
              {companyLogos.map((company, index) => (
                <div 
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center mx-8"
                >
                  <div className="h-10 w-auto relative flex items-center justify-center">
                    <div 
                      className="bg-white rounded-md p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-110 relative"
                      ref={el => { logoRefs.current[index] = el; }}
                    >
                      <company.Icon size={24} color={company.color} />
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {company.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set of logos for seamless scrolling */}
            <div className="flex animate-marquee2 group-hover:pause-animation whitespace-nowrap absolute top-6">
              {companyLogos.map((company, index) => (
                <div 
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center mx-8"
                >
                  <div className="h-10 w-auto relative flex items-center justify-center">
                    <div className="bg-white rounded-md p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-110 relative">
                      <company.Icon size={24} color={company.color} />
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {company.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Feature Highlights */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TerminalIcon className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Terminal</h3>
            <p className="text-gray-600">Intelligent command suggestions and automations to speed up your workflow.</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-secondary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CodeIcon className="text-secondary-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Assistance</h3>
            <p className="text-gray-600">Get real-time code suggestions, bug fixes, and explanations as you type.</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GlobeIcon className="text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaborative</h3>
            <p className="text-gray-600">Work with your team in real-time with built-in collaboration features.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
