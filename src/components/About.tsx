import React from 'react';
import { Heart, Target, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Empathy-Driven",
      description: "I believe in creating a safe, understanding space where you can explore your potential without judgment."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Results-Focused",
      description: "Together, we'll set clear, achievable goals and develop actionable strategies to reach them."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Experience",
      description: "With over 12 years of coaching experience, I've helped hundreds of clients transform their lives and businesses."
    }
  ];

  return (
    <section className="flex w-full justify-center items-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main About Content - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Nahom Abegaze</h3>
            <p className="text-gray-600">
            An innovative executive coach with over twelve years of experience delivering tangible results for organizations and individuals, through program development and operations management. With a strong background in higher education and expertise in developing and maintaining diversity, equity, and inclusion initiatives. A skilled communicator and collaborator, bringing a global perspective through international experience with interprsonal and cultural dexterity in both corporate, educational, and non-profit organizations. 
            </p>
            <p className="text-gray-600">
              As a certified life and business coach, I&apos;m passionate about helping ambitious individuals unlock their full potential. My journey began in corporate leadership, where I discovered my true calling: empowering others to achieve their dreams.
            </p>
            <p className="text-gray-600">
              My approach combines practical business strategies with personal development techniques, creating a holistic path to success. Whether you&apos;re looking to advance your career, scale your business, or find better work-life balance, I&apos;m here to guide you every step of the way.
            </p>
            <p className="text-gray-600">
              I leverage a potent blend of cultural awareness with strong business acumen to faithfully execute on strategy, achieving or exceeding planned P&L objectives. Adept problem solver passionate about embracing challenges and working closely with stakeholders to design elegant solutions. Passionate about nurturing a culture of excellence.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              <Image 
                src="/nahom-about.jpg" 
                alt="Nahom Abegaze" 
                className="rounded-lg object-cover shadow-lg w-full h-auto"
                width={400}
                height={500}
              />
              <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-10 hover:opacity-0 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Credentials & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-medium">Certified Professional Coach (ICF)</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-medium">Master NLP Practitioner</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-medium">Business Strategy Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;