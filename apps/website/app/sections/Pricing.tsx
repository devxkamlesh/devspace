'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, LinkButton } from '../../components/Button';
import { fadeUp, staggerContainer } from '../../lib/framer';
// Import icons directly to ensure consistent rendering
import CheckCircleIcon from 'lucide-react/dist/esm/icons/check-circle';
import XCircleIcon from 'lucide-react/dist/esm/icons/x-circle';
import InfoIcon from 'lucide-react/dist/esm/icons/info';
import SparklesIcon from 'lucide-react/dist/esm/icons/sparkles';

const features = {
  basic: [
    "Basic AI suggestions",
    "Standard editor features",
    "Git integration",
    "5 projects",
    "Community support"
  ],
  pro: [
    "Advanced AI code completion",
    "Real-time collaboration",
    "Performance analytics",
    "Unlimited projects",
    "Priority support",
    "Custom themes",
    "Advanced Git workflows"
  ],
  enterprise: [
    "Custom AI model training",
    "Enterprise security features",
    "Dedicated account manager",
    "SLA guarantees",
    "SSO integration",
    "Role-based access control",
    "Custom API integrations",
    "24/7 premium support"
  ]
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-100 rounded-full opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-100 rounded-full opacity-30 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
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
            className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full font-medium text-sm mb-4"
          >
            Simple Pricing
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Choose the Perfect <span className="gradient-text">DevSpace Plan</span>
          </h2>
          
          <p className="text-gray-600 text-xl">
            Select a plan that fits your needs. All plans include updates and core developer features.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex items-center">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-md transition-all ${
                !annual ? 'bg-white shadow-md text-gray-900' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-md transition-all flex items-center ${
                annual ? 'bg-white shadow-md text-gray-900' : 'text-gray-500'
              }`}
            >
              <span>Annual</span>
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Basic Plan */}
          <motion.div 
            variants={fadeUp}
            className="relative"
            onMouseEnter={() => setHoveredPlan('basic')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <motion.div
              animate={{
                y: hoveredPlan === 'basic' ? -8 : 0,
                boxShadow: hoveredPlan === 'basic' 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600">For individual developers</p>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900">
                  ${annual ? '9' : '12'}
                  <span className="text-xl text-gray-500 font-normal">
                    /{annual ? 'mo' : 'mo'}
                  </span>
                </div>
                {annual && (
                  <div className="text-green-600 font-medium mt-1">
                    $108 billed annually
                  </div>
                )}
              </div>
              
              <LinkButton
                href="/signup"
                className="w-full mb-8 bg-gray-900 hover:bg-gray-800"
              >
                Get Started
              </LinkButton>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-800 mb-4">
                  Plan includes:
                </div>
                <ul className="space-y-3">
                  {features.basic.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            variants={fadeUp}
            className="relative"
            onMouseEnter={() => setHoveredPlan('pro')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="absolute inset-0 bg-primary-600 rounded-2xl blur-xl opacity-20 -z-10 
              transform scale-[0.85] transition-all duration-300"
              style={{
                transform: hoveredPlan === 'pro' ? 'scale(0.95)' : 'scale(0.85)'
              }}
            ></div>
            
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-sm font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            
            <motion.div
              animate={{
                y: hoveredPlan === 'pro' ? -8 : 0,
                boxShadow: hoveredPlan === 'pro'
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-primary-500 h-full flex flex-col mt-4"
            >
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <SparklesIcon className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-gray-600">For professional developers</p>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900">
                  ${annual ? '19' : '24'}
                  <span className="text-xl text-gray-500 font-normal">
                    /{annual ? 'mo' : 'mo'}
                  </span>
                </div>
                {annual && (
                  <div className="text-green-600 font-medium mt-1">
                    $228 billed annually
                  </div>
                )}
              </div>
              
              <LinkButton
                href="/signup"
                className="w-full mb-8"
              >
                Get Started
              </LinkButton>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-800 mb-4">
                  Everything in Basic, plus:
                </div>
                <ul className="space-y-3">
                  {features.pro.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div 
            variants={fadeUp}
            className="relative"
            onMouseEnter={() => setHoveredPlan('enterprise')}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <motion.div
              animate={{
                y: hoveredPlan === 'enterprise' ? -8 : 0,
                boxShadow: hoveredPlan === 'enterprise'
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">For teams and organizations</p>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900">
                  Custom
                </div>
                <div className="text-gray-600 font-medium mt-1">
                  Tailored to your needs
                </div>
              </div>
              
              <LinkButton
                href="/contact"
                className="w-full mb-8 bg-secondary-600 hover:bg-secondary-700"
              >
                Contact Sales
              </LinkButton>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-800 mb-4">
                  Everything in Pro, plus:
                </div>
                <ul className="space-y-3">
                  {features.enterprise.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">Everything you need to know about our plans and pricing</p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Can I switch between plans?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. When upgrading, we'll prorate the remaining time on your current plan. When downgrading, changes will apply at the end of your current billing cycle.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Yes, we offer a 14-day free trial on all our plans. No credit card required to start. You can upgrade to a paid plan at any time during or after your trial.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-lg mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and purchase orders.</p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Banner */}
        <motion.div 
          className="mt-24 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-10 text-white text-center relative overflow-hidden shadow-glow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your development workflow?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using DevSpace to code smarter, not harder.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <LinkButton href="/signup" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Free
              </LinkButton>
              <LinkButton href="/contact" className="bg-transparent border-2 border-white hover:bg-white/10">
                Schedule Demo
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
