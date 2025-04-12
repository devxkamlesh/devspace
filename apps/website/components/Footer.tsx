'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-primary-600 mb-4">DevSpace</h3>
            <p className="text-gray-600 mb-4">
              Your all-in-one developer environment designed to boost productivity and streamline workflows.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com" className="text-gray-500 hover:text-primary-600">
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-primary-600">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-primary-600">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-primary-600">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-primary-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-600 hover:text-primary-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="transition-colors hover:text-primary-500">
                About
              </Link>
              <Link href="/contact" className="transition-colors hover:text-primary-500">
                Contact
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-primary-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-primary-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} DevSpace. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 