'use client'
import { Heart, Target, Award, Briefcase, Brain } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { JSX, useRef } from 'react';

const About = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

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
    <section ref={ref} className="flex w-full justify-center items-center bg-[#D1B88F] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Main About Content - Side by Side */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-3xl font-semibold text-slate-800">Nahom Abegaze</motion.h3>
            <motion.p variants={itemVariants} className="text-slate-800">
            An innovative executive coach with over twelve years of experience delivering tangible results for organizations and individuals, through program development and operations management. With a strong background in higher education and expertise in developing and maintaining diversity, equity, and inclusion initiatives. A skilled communicator and collaborator, bringing a global perspective through international experience with interprsonal and cultural dexterity in both corporate, educational, and non-profit organizations. 
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-800">
              As a certified life and business coach, I&apos;m passionate about helping ambitious individuals unlock their full potential. My journey began in corporate leadership, where I discovered my true calling: empowering others to achieve their dreams.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-800">
              My approach combines practical business strategies with personal development techniques, creating a holistic path to success. Whether you&apos;re looking to advance your career, scale your business, or find better work-life balance, I&apos;m here to guide you every step of the way.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-800">
              I leverage a potent blend of cultural awareness with strong business acumen to faithfully execute on strategy, achieving or exceeding planned P&L objectives. Adept problem solver passionate about embracing challenges and working closely with stakeholders to design elegant solutions. Passionate about nurturing a culture of excellence.
            </motion.p>
          </div>

          {/* Right side - Image */}
          <motion.div variants={imageVariants} className="flex justify-center lg:justify-end">
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
          </motion.div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {values.map((value, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center mb-4">
                    {value.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 text-center">
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-white">Credentials & Certifications</motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Certified Professional Coach (ICF)",
                icon: Award,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                textColor: "text-blue-600"
              },
              {
                title: "Master NLP Practitioner",
                icon: Brain,
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                textColor: "text-purple-600"
              },
              {
                title: "Business Strategy Certified",
                icon: Briefcase,
                color: "from-amber-500 to-amber-600",
                bgColor: "bg-amber-50",
                textColor: "text-amber-600"
              }
            ].map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className={`p-6 bg-white rounded-lg shadow-sm overflow-hidden relative group`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${credential.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Badge icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${credential.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${credential.textColor}`} />
                  </motion.div>
                  
                  {/* Text */}
                  <p className="font-semibold text-gray-900 text-sm leading-snug">{credential.title}</p>
                  
                  {/* Bottom accent line */}
                  <div className={`h-1 bg-gradient-to-r ${credential.color} rounded-full mt-4 w-0 group-hover:w-full transition-all duration-300`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;