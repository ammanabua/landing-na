'use client'
import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <section className="w-full flex justify-center items-center py-12 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 text-center lg:text-left">
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
                  <li key={index} className="flex items-center gap-2 justify-center lg:justify-start">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Form */}
            <div className="space-y-6 w-full">
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

                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;