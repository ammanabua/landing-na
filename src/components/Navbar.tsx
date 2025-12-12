'use client'
import { useState, useEffect, useRef, JSX } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeLink, setActiveLink] = useState('#');
  const lastScrollYRef = useRef(0);

  // Color scheme definitions
  const colors = {
    light: {
      bg: 'bg-[#3A3235]/60',
      text: 'text-white',
      navInactive: 'text-white',
      navActive: 'text-cyan-300',
      navHover: '#00D4FF',
      underline: 'bg-slate-300',
      logo: 'text-white hover:text-cyan-300',
      button: 'bg-amber-400 text-slate-800 hover:bg-orange-500 hover:text-white',
    },
    dark: {
      bg: 'bg-slate-900/80',
      text: 'text-white',
      navInactive: 'text-white',
      navActive: 'text-cyan-300',
      navHover: '#06b6d4',
      underline: 'bg-cyan-300',
      logo: 'text-white hover:text-cyan-300',
      button: 'bg-white text-slate-900 hover:bg-gray-100',
    },
  };

  const currentColors = isAtTop ? colors.light : colors.dark;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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
      
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`w-full py-2 z-20 fixed top-0 left-0 right-0 backdrop-blur-md transition-colors duration-300 ${currentColors.bg}`}>

      <div className="mx-auto max-w-7xl px-6 py-3">
        <motion.div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl">
            <a href="#" className={`font-light tracking-tight transition-colors ${currentColors.logo}`}>
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
                whileHover={{ color: currentColors.navHover }}
                className={`px-4 py-2 text-md transition-colors font-light rounded-md relative ${
                  activeLink === item.href
                    ? currentColors.navActive
                    : currentColors.navInactive
                }`}
              >
                {item.label}
                {activeLink === item.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className={`absolute bottom-1 left-4 right-4 h-0.5 ${currentColors.underline}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:block">
              <Button
                size="lg"
                className={`font-light rounded-full px-6 transition-colors font-semibold shadow-lg hover:shadow-xl ${currentColors.button}`}>
                Consult
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center p-2 transition-colors ${currentColors.text}`}
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
            className={`md:hidden absolute top-16 inset-x-0 backdrop-blur-md transition-colors ${
              isAtTop
                ? 'bg-[#3a3235]/95'
                : 'bg-slate-800/95'
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
                  className={`block px-4 py-2 text-md transition-colors font-light rounded-md ${
                    activeLink === item.href
                      ? `${currentColors.navActive} ${isAtTop ? 'bg-gray-200/20' : 'bg-blue-900/20'}`
                      : currentColors.navInactive
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
                  size="lg"
                  className={`w-full font-light rounded-full transition-colors font-semibold ${currentColors.button}`}>
                  Consult
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