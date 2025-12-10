'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeLink, setActiveLink] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top of page
      setIsAtTop(currentScrollY < 50);
      
      // Determine active section based on scroll position
      const sectionElements = [
        { id: '#', element: document.documentElement },
        { id: '#about', element: document.getElementById('about') },
        { id: '#services', element: document.getElementById('services') },
        { id: '#testimonials', element: document.getElementById('testimonials') },
        { id: '#contact', element: document.getElementById('contact') },
      ];

      let currentActive = '#';
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentActive = section.id;
          }
        }
      }
      setActiveLink(currentActive);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'My Story', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      className={`w-full py-2 z-20 fixed top-0 left-0 right-0 backdrop-blur-md border-b transition-colors duration-300 ${
        isAtTop
          ? 'bg-white/90 dark:bg-slate-950/90 border-gray-200/50 dark:border-slate-800/50'
          : 'bg-slate-900/90 dark:bg-white/90 border-slate-700/50 dark:border-gray-200/50'
      }`}>

      <div className="mx-auto max-w-7xl px-6 py-3">
        <motion.div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl">
            <a href="#" className={`font-light tracking-tight transition-colors ${
              isAtTop
                ? 'text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                : 'text-white dark:text-slate-900 hover:text-blue-300 dark:hover:text-blue-600'
            }`}>
              N.A.
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                whileHover={{ color: isAtTop ? "#2563eb" : "#93c5fd" }}
                className={`px-4 py-2 text-sm transition-colors font-light rounded-md relative ${
                  activeLink === item.href
                    ? isAtTop
                      ? 'text-slate-800 dark:text-blue-400'
                      : 'text-blue-300 dark:text-blue-600'
                    : isAtTop
                    ? 'text-slate-600 dark:text-slate-300'
                    : 'text-gray-200 dark:text-gray-200'
                }`}
              >
                {item.label}
                {activeLink === item.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:block">
              <Button
                variant="default"
                size="lg"
                className={`font-light rounded-full px-6 transition-colors font-semibold ${
                  isAtTop
                    ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}>
                Consult
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center p-2 transition-colors ${
                  isAtTop
                    ? 'text-slate-900 dark:text-white'
                    : 'text-white dark:text-slate-900'
                }`}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className={`md:hidden absolute top-16 inset-x-0 backdrop-blur-md border-b transition-colors ${
              isAtTop
                ? 'bg-white/95 dark:bg-slate-950/95 border-gray-200/50 dark:border-slate-800/50'
                : 'bg-slate-800/95 dark:bg-gray-100/95 border-slate-700/50 dark:border-gray-200/50'
            }`}>
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`block px-4 py-2 text-sm transition-colors font-light rounded-md ${
                    activeLink === item.href
                      ? isAtTop
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                        : 'text-blue-300 dark:text-blue-600 bg-blue-900/20 dark:bg-blue-900/30'
                      : isAtTop
                      ? 'text-slate-600 dark:text-slate-300'
                      : 'text-gray-100 dark:text-gray-100'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="px-4 py-3">
                <Button
                  variant="default"
                  size="sm"
                  className={`w-full font-light rounded-full transition-colors ${
                    isAtTop
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                      : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`}>
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;