import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaClock, FaDatabase, FaChartLine, FaShieldAlt,FaRobot, FaQuoteLeft,
  FaLinkedin, FaTwitter, FaChevronDown
 } from "react-icons/fa";

import { useState } from "react";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[30rem] flex items-center justify-center bg-black text-white">
      <div className="max-w-5xl text-center px-6">
        <motion.h1
          className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unveiling True Influence: <br /> Credibility Over Hype
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          InfluenceIQ is an AI-powered rating system that evaluates public figures based on credibility, longevity, and meaningful engagement—ensuring authenticity in influence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link
            to="/rankings"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg"
          >
            Explore Rankings
          </Link>
        </motion.div>
      </div>
    </section>
  );
};



export const WhatIsInfluenceIQ = () => {
  return (
    <section className="py-7 px-6 md:px-12 lg:px-24 bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-4">What is InfluenceIQ?</h2>
        <p className="text-lg text-gray-300 mb-8">
          InfluenceIQ isn't just about followers—it's about trust. We analyze engagement quality, historical credibility,
          and real-world impact to determine an influencer's true standing.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 - Credibility */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-72 text-center border border-blue-500 hover:bg-blue-500 transition duration-300"
        >
          <FaCheckCircle className="text-4xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold">Credibility</h3>
          <p className="text-gray-300 text-sm mt-2">Evaluating trustworthiness through verified data.</p>
        </motion.div>

        {/* Card 2 - Engagement */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-72 text-center border border-blue-500 hover:bg-blue-500 transition duration-300"
        >
          <FaUsers className="text-4xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold">Engagement</h3>
          <p className="text-gray-300 text-sm mt-2">Analyzing interactions, not just numbers.</p>
        </motion.div>

        {/* Card 3 - Fame Longevity */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-72 text-center border border-blue-500 hover:bg-blue-500 transition duration-300"
        >
          <FaClock className="text-4xl text-blue-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold">Fame Longevity</h3>
          <p className="text-gray-300 text-sm mt-2">Measuring sustained influence over time.</p>
        </motion.div>
      </div>
    </section>
  );
};



export const HowItWorks = () => {
  const steps = [
    {
      icon: <FaDatabase className="text-blue-400 text-4xl" />, 
      title: "Data Collection",
      description: "We gather data from verified sources and social media analytics.",
    },
    {
      icon: <FaChartLine className="text-green-400 text-4xl" />, 
      title: "Engagement Analysis",
      description: "Our AI examines engagement quality, avoiding fake followers and bots.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-4xl" />, 
      title: "Credibility Scoring",
      description: "A weighted algorithm evaluates historical accuracy and meaningful interactions.",
    },
    {
      icon: <FaCheckCircle className="text-purple-400 text-4xl" />, 
      title: "Final Rating",
      description: "A score is generated, reflecting authenticity over mere popularity.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-black text-white text-center">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-blue-400" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>
      
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export const WhyChooseUs = () => {
  const features = [
    { icon: <FaRobot size={30} />, title: "AI-Powered Analysis", desc: "Ensuring unbiased rankings through advanced AI models." },
    { icon: <FaCheckCircle size={30} />, title: "Credibility Over Popularity", desc: "We focus on trustworthiness, not just numbers." },
    { icon: <FaClock size={30} />, title: "Real-Time Updates", desc: "Rankings refresh regularly for accurate influence scores." },
    { icon: <FaShieldAlt size={30} />, title: "No Bots, No Fakes", desc: "100% transparency in influencer evaluations." }
  ];

  return (
    <section className="py-16 bg-black text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose InfluenceIQ?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl border border-blue-500 hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4 text-blue-400">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Digital Analyst",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "InfluenceIQ is revolutionizing the way we measure true influence. Finally, an AI-powered system that values credibility over hype!",
    },
    {
      name: "Ananya Sharma",
      role: "Marketing Strategist",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote:
        "I love how InfluenceIQ focuses on real engagement rather than just numbers. A game-changer for influencer marketing!",
    },
    {
      name: "Karthik Iyer",
      role: "Tech Blogger",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      quote:
        "Finally, an influencer ranking system that actually makes sense! InfluenceIQ sets a new standard for credibility scoring.",
    },
  ];

  return (
    <div className="py-16 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-500">What People Say</span> About Us
      </h2>

      <div className="flex space-x-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] md:min-w-[400px] bg-gray-800 p-6 rounded-2xl shadow-lg relative hover:shadow-blue-500/50 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaQuoteLeft className="text-blue-500 text-4xl absolute top-4 left-4 opacity-40" />
            <p className="text-lg italic text-gray-300">{testimonial.quote}</p>

            <div className="flex items-center mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <div className="ml-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Atharva Patil",
      role: "Co-Founder & AI Lead",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Sanya Kapoor",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Samadhan Erande",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Neha Verma",
      role: "Marketing & Growth",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  return (
    <div className="py-16 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-500">Meet the Team</span> Behind InfluenceIQ
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Our team of AI engineers and data analysts is passionate about making influence measurable, meaningful, and fair for everyone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-blue-500/50 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>

            <div className="mt-4 flex space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-400 transition duration-200" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 text-2xl hover:text-blue-400 transition duration-200" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export const FAQs = () => {
  const faqData = [
    {
      question: "How does InfluenceIQ calculate credibility?",
      answer: "Our AI analyzes historical accuracy, engagement quality, and meaningful interactions.",
    },
    {
      question: "Can I submit an influencer for evaluation?",
      answer: "Yes! Users can suggest influencers through our platform.",
    },
    {
      question: "How often are the rankings updated?",
      answer: "Rankings are updated in real-time based on the latest engagement data.",
    },
    {
      question: "Is there a way to verify the accuracy of scores?",
      answer: "Yes, each rating is backed by a detailed credibility report.",
    },
    {
      question: "Is InfluenceIQ free to use?",
      answer: "Basic features are free, but premium insights are available for subscribers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-500">FAQs</span> - Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Find answers to the most common questions about InfluenceIQ.
      </p>

      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="flex justify-between items-center text-lg font-semibold text-white hover:text-blue-400 transition duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : ""}`}
              />
            </div>

            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-300 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};