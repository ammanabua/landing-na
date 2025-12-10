'use client'
import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsTyping(true);
    setError(e.target.value === '' ? '' : validateEmail(e.target.value) ? '' : 'Please enter a valid email address');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTyping(false);

    if (!email) return setError('Email is required');
    if (!validateEmail(email)) return setError('Please enter a valid email address');

    setError('');
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="w-full flex justify-center items-center py-12 px-4 bg-[#1E152A] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold">Level Up Your Life & Career</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Join our community of ambitious professionals. Get weekly insights on:
              </p>
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  'Leadership strategies & career growth tips',
                  'Productivity hacks & work-life balance',
                  'Exclusive coaching resources & exercises',
                  'Early access to workshops & events'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-2 justify-center lg:justify-start">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="space-y-6 w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full p-4 sm:p-5 text-base sm:text-lg border ${error && !isTyping ? 'border-red-500 focus:ring-red-500' : ''}`}
                    aria-invalid={error ? "true" : "false"}
                  />
                  {error && !isTyping && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white font-semibold hover:bg-amber-500 hover:text-slate-800" disabled={isSubmitted}>
                  Subscribe Now
                  <Send className="w-4 h-4" />
                </Button>
              </form>

              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Join 5,000+ subscribers. Unsubscribe anytime.
              </p>

              {isSubmitted && (
                <Alert className="bg-green-50 text-green-800 border-green-200 text-center">
                  <AlertDescription>
                    Thanks for subscribing! Check your email to confirm your subscription.
                  </AlertDescription>
                </Alert>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;