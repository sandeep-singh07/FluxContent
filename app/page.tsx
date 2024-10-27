"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Navigation = () => (
  <motion.nav 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/logo0.png" alt="FluxContent" width={40} height={40} />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {["Home", "Features", "Pricing", "Testimonials"].map((item) => (
              <Link key={item} href={item === "Home" ? "#hero" : `#${item.toLowerCase()}`}>
                <span className="text-primary hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="/dashboard">
            <span className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition duration-150 ease-in-out">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <div id="hero" className="relative min-h-screen pt-16 overflow-hidden">
    <BackgroundGradientAnimation>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white pointer-events-none">
        <motion.h1
          className="mb-6 text-3xl font-bold md:text-4xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FluxContent
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TextGenerateEffect
            words="AI-Powered Content Creation Platform"
            className="mb-8 text-xl text-gray-200 md:text-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/dashboard"
            className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition duration-300 pointer-events-auto"
          >
            Start Creating for Free
          </Link>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "AI-Powered Templates",
      description: "Choose from a wide range of AI-optimized templates for any content type.",
      icon: "🧠",
      color: "bg-gradient-to-r from-purple-400 to-pink-600",
    },
    {
      title: "Smart Editing",
      description: "Fine-tune your content with our intelligent editing suggestions.",
      icon: "✏️",
      color: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      title: "Multi-Platform Publishing",
      description: "Publish your content across multiple platforms with a single click.",
      icon: "🌐",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "SEO Optimization",
      description: "Boost your content's visibility with AI-driven SEO recommendations.",
      icon: "🔍",
      color: "bg-gradient-to-r from-blue-400 to-indigo-600",
    },
    {
      title: "Analytics Dashboard",
      description: "Track your content's performance with comprehensive analytics.",
      icon: "📊",
      color: "bg-gradient-to-r from-red-400 to-pink-500",
    },
    {
      title: "Collaboration Tools",
      description: "Work seamlessly with your team in real-time.",
      icon: "👥",
      color: "bg-gradient-to-r from-teal-400 to-green-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your content's full potential with our cutting-edge AI-powered tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="mt-20 max-w-4xl mx-auto">
        <TextRevealCard
          text="Unleash Your Creativity"
          revealText="with FluxContent's AI"
        >
          <div className="text-center">
            <h3 className="font-bold text-3xl text-white mb-4">
              Transform Your Ideas
            </h3>
            <p className="text-gray-200 text-xl">
              Our AI-powered platform helps you create stunning content effortlessly.
            </p>
          </div>
        </TextRevealCard>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <CardContainer className="w-full">
      <CardBody className={`${color} p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full`}>
        <CardItem translateZ="50" className="text-5xl mb-6">
          {icon}
        </CardItem>
        <CardItem
          as="h3"
          translateZ="60"
          className="text-2xl font-bold text-white mb-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="70"
          className="text-white text-lg"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const HowItWorks = () => (
  <section id="how-it-works" className=" bg-slate-100">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white bg-slate-100">
              Unleash the power with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                FluxContent
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/logo1.png`}
          alt="hero"
          height={20}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
  </section>
);

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-left">
  <div className="flex items-center mb-4">
    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
      {number}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
  <p className="text-gray-600">{description}</p>
</div>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Free"
          price="0"
          features={[
            "Access few AI templates",
            "10000 words credits",
            "Unlimited Copy",
            "Access History"
          ]}
        />
        <PricingCard
          title="Pro"
          price="499 only"
          features={[
            "Access 30+ AI templates",
            "1000000 words credits",
            "Unlimited Copy",
            "Access History"
          ]}
          highlighted={true}
        />
      </div>
    </div>
  </section>
);

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, features, highlighted = false }: PricingCardProps) => (
  <CardContainer className={highlighted ? 'scale-105' : ''}>
    <CardBody className={`bg-white p-8 rounded-xl shadow-lg ${highlighted ? 'ring-2 ring-blue-500' : ''}`}>
      <CardItem translateZ="50" className={`text-2xl font-bold mb-4 ${highlighted ? 'text-blue-600' : 'text-gray-900'}`}>
        {title}
      </CardItem>
      <CardItem translateZ="60" className={`text-4xl font-bold mb-6 ${highlighted ? 'text-blue-600' : 'text-gray-900'}`}>
        {price}<span className="text-sm font-normal">/month</span>
      </CardItem>
      <ul className="mb-8">
      {features.map((feature: string, index: number) => (
          <CardItem as="li" key={index} translateZ="70" className="mb-2 flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {feature}
          </CardItem>
        ))}
      </ul>
      <CardItem translateZ="80" as={Link} href="/dashboard/billing" className={`block text-center py-3 px-6 rounded-md font-semibold text-white ${highlighted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
        Choose Plan
      </CardItem>
    </CardBody>
  </CardContainer>
);

const Testimonials = () => {
  const testimonials = [
    {
      "quote": "FluxContent has made my content creation process a breeze! Super easy to use.",
      "name": "Sandeep Singh",
      "title": "Blogger"
    },
    {
      "quote": "The templates are fantastic! I feel like I have a writing buddy helping me out.",
      "name": "Sandeep Singh",
      "title": "Student"
    },
    {
      "quote": "This app has become my daily companion for finding new books to read and summarizing my favorite ones!",
      "name": "Sandeep Singh",
      "title": "Book Enthusiast"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          What Our Users Say
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

const CTA = () => {
  const words = [
    { text: "Create", className: "text-white" },
    { text: "Publish", className: "text-white" },
    { text: "Grow", className: "text-white" },
    { text: "with", className: "text-white" },
    { text: "FluxContent", className: "text-blue-500" },
  ];

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center"
      >
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started for Free
          </Link>
          
        </div>
      </motion.div>
    </LampContainer>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-2 text-center">
        <p className="text-white">&copy; {new Date().getFullYear()} FluxContent. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Page Component
const LandingPage = () => {
  const [showFloatingDock, setShowFloatingDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingDock(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      {showFloatingDock && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-50 bg-primary text-white rounded-full p-4 shadow-lg"
        >
          <Link href="/dashboard" className="text-white text-sm font-semibold">
            <span>Sign Up</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
