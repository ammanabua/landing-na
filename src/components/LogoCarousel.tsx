'use client'
import Image from 'next/image';
import { useState, useEffect, JSX } from 'react';

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

const LogoCarousel = ({
  speed = 18,
  className = ''
}: LogoCarouselProps): JSX.Element => {
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
    const baseDuration = Math.max(8, speed);
    const duration = windowWidth < 768
      ? Math.max(6, baseDuration * 0.85)
      : baseDuration;

    setAnimationDuration(duration);
  }, [windowWidth, speed]);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className={`py-4 sm:py-6 lg:py-8 bg-[#d4d8f0] flex w-full justify-center items-center ${className}`}>
      <div className="max-w-8xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Organizations that have trusted me to deliver exceptional services.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-slate-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full min-h-32 sm:min-h-40 lg:min-h-48 flex items-center">
          {/* Logo Track */}
          <div className="relative flex w-full overflow-hidden">
            <div 
              className="flex whitespace-nowrap animate-marquee gap-8 sm:gap-12 lg:gap-16"
              style={{
                animation: `marquee ${animationDuration}s linear infinite`
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-16 sm:h-20 lg:h-24 w-auto transition-all duration-300 transform object-contain  grayscale"
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
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-marquee {
          will-change: transform;
          display: flex;
          min-width: 300%;
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