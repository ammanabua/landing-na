'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'What I Offer', href: '#services' },
    { label: 'About Me', href: '#about' },
    { label: 'My Story', href: '#podcast' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="w-full bg-white backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-between items-center h-8 p-4 space-y-4">
          {/* Logo */}
          <div className="flex justify-center text-center font-bold text-3xl w-full">
            <a href="#" className="text-gray-900 hover:text-gray-600">
              Nahom Abegaze
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm">
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-28 inset-x-0 bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-center"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full">
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;