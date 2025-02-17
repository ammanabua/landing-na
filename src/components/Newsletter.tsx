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

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsTyping(true);
    
    if (newEmail === '') {
      setError('');
    } else if (!validateEmail(newEmail)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTyping(false);

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // If validation passes, submit the form
    setError('');
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50 w-full flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-full opacity-50" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-100 rounded-full opacity-50" />

          {/* Main Content */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Copy */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Level Up Your Life & Career
                </h2>
                <p className="text-gray-600 text-lg">
                  Join our community of ambitious professionals. Get weekly insights on:
                </p>
                <ul className="space-y-3">
                  {[
                    'Leadership strategies & career growth tips',
                    'Productivity hacks & work-life balance',
                    'Exclusive coaching resources & exercises',
                    'Early access to workshops & events'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side - Form */}
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full p-6 text-lg ${error && !isTyping ? 'border-red-500 focus:ring-red-500' : ''}`}
                      aria-invalid={error ? "true" : "false"}
                    />
                    {error && !isTyping && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full group"
                  >
                    Subscribe Now
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <p className="text-sm text-gray-500 text-center">
                  Join 5,000+ subscribers. Unsubscribe anytime.
                </p>

                {isSubmitted && (
                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <AlertDescription>
                      Thanks for subscribing! Check your email to confirm your subscription.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;