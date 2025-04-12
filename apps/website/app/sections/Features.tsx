'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Command, Code, Zap, Users, GitBranch, Lock, ExternalLink } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/framer';
import Link from 'next/link';

const features = [
  {
    icon: Command,
    title: 'AI-Powered Command Palette',
    description: 'Instantly access any feature with natural language commands. DevSpace understands what you need before you finish typing.',
    color: 'blue'
  },
  {
    icon: Code,
    title: 'Advanced Code Intelligence',
    description: 'Context-aware suggestions that understand your codebase, not just syntax. Our AI analyzes patterns across millions of repositories.',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Built with Rust core components for native speed. Even in large projects, DevSpace stays responsive with zero lag.',
    color: 'amber'
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Real-time editing with conflict resolution that feels natural. See teammate cursors and comments without disrupting your flow.',
    color: 'green'
  },
  {
    icon: GitBranch,
    title: 'Intelligent Version Control',
    description: 'Visual branching strategy with AI-suggested merge approaches. Resolve conflicts with smart recommendations.',
    color: 'indigo'
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'SOC2 compliant with end-to-end encryption. Your code never leaves your infrastructure unless explicitly shared.',
    color: 'rose'
  }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 -mb-40 -mr-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary-50/80 to-secondary-50/80 blur-3xl opacity-60"></div>
        <div className="absolute left-0 top-0 -mt-40 -ml-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-50/80 to-amber-50/80 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full font-medium text-sm mb-4"
          >
            Powerful Tools
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Everything You Need in <br className="hidden md:block" />
            <span className="gradient-text">One Environment</span>
          </h2>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            DevSpace combines best-in-class tools and intelligent workflows to create 
            the ultimate development experience for teams of any size.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="transform-gpu"
            >
              <Card className={`h-full relative group ${activeFeature === index ? 'shadow-xl' : ''}`}>
                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-xl border-2 border-${feature.color}-400/0 transition-colors duration-300 ${activeFeature === index ? `border-${feature.color}-400/50` : ''}`}></div>
                
                <div className={`w-14 h-14 mb-6 rounded-full bg-${feature.color}-100 flex items-center justify-center relative`}>
                  <feature.icon 
                    size={28}
                    className={`text-${feature.color}-600 transition-transform duration-300 ${activeFeature === index ? 'scale-110' : ''}`} 
                  />
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-${feature.color}-200 opacity-0 scale-0 transition-all duration-300 ${activeFeature === index ? 'scale-90 opacity-70' : ''}`}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <div className={`mt-auto pt-2 opacity-0 translate-y-2 transition-all duration-300 ${activeFeature === index ? 'opacity-100 translate-y-0' : ''}`}>
                  <Link href="#" className={`inline-flex items-center text-${feature.color}-600 font-medium text-sm group`}>
                    Learn more 
                    <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link 
            href="#pricing" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg inline-flex items-center group transition-all"
          >
            Compare all features
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
