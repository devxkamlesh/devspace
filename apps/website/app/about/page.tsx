'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Twitter, Linkedin } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Team members data
const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former software engineer at Google with over 15 years of experience in developer tools.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'PhD in Computer Science with expertise in AI and developer productivity optimization.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Thomas',
    role: 'Head of Product',
    bio: 'User experience specialist with a passion for creating intuitive developer tools.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Engineer',
    bio: 'Full-stack developer with experience building scalable cloud development environments.',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Link 
            href="/" 
            className="inline-flex items-center mb-8 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
          <h1 className="text-5xl font-bold mb-6">About DevSpace</h1>
          <p className="text-xl text-gray-600">
            We're on a mission to revolutionize the developer experience with tools that make coding more productive, collaborative, and enjoyable.
          </p>
        </motion.div>
        
        {/* Mission section with animated background */}
        <motion.div 
          className="relative bg-gradient-to-r from-primary-50 to-secondary-50 p-12 rounded-2xl mb-24 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-40 -top-40 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="mb-4">
                  DevSpace was founded in 2022 by a team of experienced developers who were frustrated with the fragmented
                  nature of modern development environments. We believed there had to be a better way to code.
                </p>
                <p>
                  Our team set out to build a comprehensive platform that combines the best aspects of IDEs,
                  collaboration tools, and AI assistance in one seamless environment.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  What started as a small project has grown into a platform used by thousands of developers and teams
                  around the world. Our commitment to developer experience guides everything we do.
                </p>
                <p>
                  Today, we're backed by leading investors and are growing our team to bring even more innovative
                  features to our platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Values section */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Developer First</h3>
              <p className="text-gray-600">
                We build tools with developers at the center. Our platform is designed to adapt to your workflow, not the other way around.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-secondary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Open Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork. Our tools enable seamless collaboration without getting in the way of your creative flow.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-gray-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                Technology doesn't stand still, and neither do we. We're constantly improving our platform based on user feedback and emerging trends.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Team section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.twitter} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* CTA section */}
        <motion.div 
          className="bg-gray-900 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            We're always looking for talented individuals to join our mission. Check out our open positions
            and become part of building the future of developer tools.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View Open Positions
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 