'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, LinkButton } from './Button';
import { motion } from 'framer-motion';
// Import icons directly to ensure consistent rendering
import MenuIcon from 'lucide-react/dist/esm/icons/menu';
import XIcon from 'lucide-react/dist/esm/icons/x';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary-600">DevSpace</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <LinkButton href="https://dashboard.armordivison.in" variant="outline" size="sm">
            Log In
          </LinkButton>
          <LinkButton href="https://dashboard.armordivison.in" size="sm">Get Started</LinkButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon size={24} className="text-gray-700" />
          ) : (
            <MenuIcon size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-700 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <LinkButton href="https://dashboard.armordivison.in" variant="outline" size="sm">
                Log In
              </LinkButton>
              <LinkButton href="https://dashboard.armordivison.in" size="sm">
                Get Started
              </LinkButton>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
} 