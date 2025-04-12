'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../components/Card';
import { fadeUp, staggerContainer } from '../../lib/framer';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "DevSpace transformed the way our engineering team collaborates. The AI-powered code suggestions have increased our productivity by at least 40%, and the integrated workflows make onboarding new developers incredibly smooth.",
    author: "Sarah Johnson",
    role: "VP of Engineering",
    company: "TechGrowth Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    logo: "https://ui-avatars.com/api/?name=TG&color=fff&background=5046e4&bold=true"
  },
  {
    quote: "After switching our entire engineering organization to DevSpace, our release cycles shortened dramatically. The real-time collaboration alone paid for itself within the first month, not to mention the security features that helped us pass SOC2 compliance.",
    author: "Michael Chen",
    role: "CTO",
    company: "CodeWave Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    logo: "https://ui-avatars.com/api/?name=CW&color=fff&background=0ea5e9&bold=true"
  },
  {
    quote: "As a freelance developer juggling multiple client projects, DevSpace's context-switching capabilities are simply unmatched. I can instantly jump between projects with all my preferences intact, and the AI suggestions adapt to each codebase's style. It's like having a co-pilot that knows all my projects.",
    author: "Alex Rodriguez",
    role: "Independent Consultant",
    company: "AR Development",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    logo: "https://ui-avatars.com/api/?name=AR&color=fff&background=16a34a&bold=true"
  },
  {
    quote: "Our distributed team spans 7 time zones, and DevSpace has been the glue that holds our development process together. The asynchronous collaboration features and detailed code history have eliminated the communication barriers we used to face.",
    author: "Emma Torres",
    role: "Lead Developer",
    company: "GlobalTech Partners",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    logo: "https://ui-avatars.com/api/?name=GP&color=fff&background=dc2626&bold=true"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const next = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full font-medium text-sm mb-4"
          >
            Customer Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What <span className="gradient-text">Developers Love</span>
          </h2>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Join thousands of developers and teams who have transformed 
            their workflow with DevSpace.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Testimonial slider */}
          <div className="relative h-[400px] md:h-[300px] mb-16">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full flex flex-col md:flex-row md:items-start gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-secondary-100 rounded-bl-3xl z-0"></div>
                  
                  <div className="flex flex-col items-center md:items-start shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-primary-50 p-3 rounded-lg mb-4">
                      <img 
                        src={testimonials[activeIndex].logo}
                        alt={testimonials[activeIndex].company}
                        className="w-10 h-10 rounded"
                      />
                    </div>
                    <div className="flex">
                      {Array(testimonials[activeIndex].rating).fill(null).map((_, i) => (
                        <Star key={i} size={16} fill="#FBBF24" stroke="#FBBF24" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-secondary-600 mb-4">
                      <Quote size={32} />
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl mb-6 italic">"{testimonials[activeIndex].quote}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                      <p className="text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation controls */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setAutoplay(false);
                      setActiveIndex(i);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'bg-secondary-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
              <div className="text-gray-600">Integrations</div>
            </motion.div>
            
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">96%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
            
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">5.2M+</div>
              <div className="text-gray-600">Lines of Code Improved</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
