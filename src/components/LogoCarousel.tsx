'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Logo {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface LogoCarouselProps {
  speed?: number;
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({
  speed = 30,
  className = ''
}) => {
  const [animationDuration, setAnimationDuration] = useState<number>(speed);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const logos: Logo[] = [
    { name: 'Chum', src: '/clients/chum.avif', width:320, height: 160 },
    { name: 'City of Fairfield', src: '/clients/cof.jpg', width:320, height: 160 },
    { name: 'Conflict Resolution Center', src: '/clients/crc.png', width:320, height: 160 },
    { name: 'Empowerment Process', src: '/clients/ep.jpg', width:320, height: 160 },
    { name: 'Future Model', src: '/clients/fm.png', width:320, height: 160 },
    { name: 'Grit', src: '/clients/grit.png', width:320, height: 160 },
    { name: 'The Hills Youth and Family Services', src: '/clients/hills.jpg', width:320, height: 160 },
    { name: 'iPec', src: '/clients/ipec.png', width:320, height: 160 },
    { name: 'MIR', src: '/clients/mir.jpg', width:320, height: 160 },
    { name: 'Maharishi International University', src: '/clients/miu.png', width:320, height: 160 },
    { name: 'University of Minnesota Duluth', src: '/clients/um.jpg', width:320, height: 160 },
    { name: 'The YMCA', src: '/clients/ymca.jpg', width:320, height: 160 }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setAnimationDuration(speed * 1.5);
    } else {
      setAnimationDuration(speed);
    }
  }, [windowWidth, speed]);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={`py-8 sm:py-12 lg:py-16 bg-white flex w-full justify-center items-center ${className}`}>
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Trusted By Industry Leaders
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            I&apos;ve had the privilege of working with professionals from these leading organizations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Logo Track */}
          <div className="relative flex w-full overflow-hidden">
            <div 
              className="flex whitespace-nowrap animate-marquee"
              style={{
                animation: `marquee ${animationDuration}s linear infinite`
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300 transform hover:scale-105 object-contain"
                    loading="lazy"
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          will-change: transform;
          display: flex;
          min-width: 200%;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-duration: 0s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;