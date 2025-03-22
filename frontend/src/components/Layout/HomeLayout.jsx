import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { FaRobot, FaChartLine, FaUsers, FaBalanceScale } from "react-icons/fa";
import { FaSearch, FaChartBar, FaVoteYea, FaClock } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestimonialCard } from "./cards/TestmonialCard";

const user = null; // Set to { name: "John Doe" } when logged in

export const HeroSection = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full flex items-center justify-center h-screen text-white bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?influencer,technology')",
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative text-center px-6 md:px-12 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover & Rank the Most <br />
          <span className="text-blue-400 animate-pulse">Influential Personalities</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          An AI-powered rating system that evaluates public figures based on credibility,
          fame longevity, and meaningful engagement.
        </p>

        <motion.p
          className="text-md md:text-lg text-gray-400 mb-6 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Powered by AI to analyze real-time influence scores & social impact.
        </motion.p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for an influencer..."
              className="w-full py-3 pl-4 pr-10 text-black rounded-lg focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-500 text-xl" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/rankings"
            className="relative px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg shadow-lg"
          >
            Explore Rankings
          </Link>

          <Link
            to={user ? "/dashboard" : "/register"}
            className="relative px-6 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg shadow-lg"
          >
            {user ? "Go to Dashboard" : "Get Started"}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};



export const KeyFeatures = () => {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-500" />,
      title: "AI-Powered Ratings",
      description: "Our AI evaluates public figures using credibility, longevity, and engagement metrics.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaChartLine className="text-4xl text-green-500" />,
      title: "Real-time Rankings",
      description: "Rankings update dynamically based on real-time data from multiple sources.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "User Engagement",
      description: "Interact with rankings through voting, liking, and commenting on influencers.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <FaBalanceScale className="text-4xl text-yellow-500" />,
      title: "Fair & Transparent",
      description: "Our ranking algorithm is unbiased and ensures transparency in ratings.",
      color: "from-yellow-500 to-yellow-700",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-blue-400 animate-pulse">InfluenceIQ?</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Discover what makes our AI-powered ranking system unique.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg bg-gradient-to-r ${feature.color} shadow-lg transform hover:scale-105 transition duration-300`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-200 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-blue-400" />,
      title: "Step 1: Choose an Influencer",
      description: "Search and explore influential personalities ranked by AI.",
    },
    {
      icon: <FaChartBar className="text-4xl text-green-400" />,
      title: "Step 2: Analyze Data",
      description: "View credibility scores, engagement metrics, and AI insights.",
    },
    {
      icon: <FaVoteYea className="text-4xl text-purple-400" />,
      title: "Step 3: Vote & Comment",
      description: "Share your opinion by voting and engaging in discussions.",
    },
    {
      icon: <FaClock className="text-4xl text-yellow-400" />,
      title: "Step 4: Watch Rankings Update",
      description: "Rankings change dynamically based on real-time data and user engagement.",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          How <span className="text-blue-400">InfluenceIQ</span> Works? 🤔
        </h2>
        <p className="mt-4 text-gray-400">Follow these simple steps to explore and contribute.</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-800 shadow-lg text-center hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="text-gray-300 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};




const dummyInfluencers = [
  {
    id: 1,
    name: "Virat Kohli",
    category: "Sports",
    ranking: "#1",
    credibility: "98%",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "One of the greatest cricketers of the modern era, known for his aggressive style and remarkable leadership.",
    followers: "250M",
    achievements: ["ICC Cricketer of the Year", "Fastest 10,000 ODI runs", "Most runs in a single IPL season"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 2,
    name: "Shah Rukh Khan",
    category: "Entertainment",
    ranking: "#2",
    credibility: "95%",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "The 'King of Bollywood' with over 80 films, SRK is one of the most influential actors globally.",
    followers: "150M",
    achievements: ["Filmfare Best Actor Awards (14 times)", "Padma Shri Award", "UNESCO Charity Work"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 3,
    name: "Sundar Pichai",
    category: "Technology",
    ranking: "#3",
    credibility: "93%",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "CEO of Google & Alphabet, leading innovation in AI, cloud computing, and software development.",
    followers: "10M",
    achievements: ["CEO of Google & Alphabet", "Pioneer in AI & Cloud Computing", "Advocate for Digital Inclusion"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 4,
    name: "Narendra Modi",
    category: "Politics",
    ranking: "#4",
    credibility: "90%",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Prime Minister of India, driving digital transformation and economic reforms.",
    followers: "180M",
    achievements: ["Swachh Bharat Abhiyan", "Digital India Initiative", "Make in India"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
  {
    id: 5,
    name: "Elon Musk",
    category: "Business",
    ranking: "#5",
    credibility: "88%",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Founder of Tesla, SpaceX, and Neuralink. Innovating technology for the future.",
    followers: "160M",
    achievements: ["Developed Tesla & SpaceX", "Revolutionized Electric Vehicles", "Pioneer in Space Exploration"],
    social: { twitter: "#", instagram: "#", linkedin: "#", youtube: "#" },
  },
];


export const TrendingInfluencers = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex + 4 >= dummyInfluencers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? dummyInfluencers.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-black text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          🔥 Trending <span className="text-blue-400">Influencers</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Discover the most influential personalities ranked by AI.
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="text-gray-400 hover:text-blue-400 text-3xl"
          >
            <FaArrowLeft />
          </button>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {dummyInfluencers.slice(index, index + 4).map((influencer) => (
              <motion.div
                key={influencer.id}
                className="p-6 bg-gray-800 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold">{influencer.name}</h3>
                <p className="text-gray-300">{influencer.category}</p>
                <p className="text-yellow-400 mt-2">
                  Ranking: {influencer.ranking}
                </p>
                <p className="text-green-400">Credibility: {influencer.credibility}</p>

                {/* Navigate to Profile Page */}
                <Link
                  to={`/profile/${influencer.id}`}
                  className="mt-4 inline-block bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                  View Profile
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={nextSlide}
            className="text-gray-400 hover:text-blue-400 text-3xl"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};


const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Tech Influencer",
    feedback: "InfluenceIQ is a game-changer! It helped me track my online presence with real data.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Fashion Blogger",
    feedback: "Absolutely love this platform! The AI-based ranking system is so accurate.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Entrepreneur",
    feedback: "Great insights on social influence. Very helpful for brand collaborations!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-black text-white text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        💬 What People Say About <span className="text-blue-400">InfluenceIQ</span>
      </motion.h2>

      <div className="relative flex items-center justify-center mt-10">
        <button onClick={prevSlide} className="text-gray-400 hover:text-blue-400 text-3xl transition-transform hover:scale-125">
          <FaArrowLeft />
        </button>

        <motion.div className="w-3/4 max-w-xl mx-4">
          <TestimonialCard testimonial={testimonials[index]} />
        </motion.div>

        <button onClick={nextSlide} className="text-gray-400 hover:text-blue-400 text-3xl transition-transform hover:scale-125">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};



export const CTASection = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Join <span className="text-yellow-400">InfluenceIQ</span> Today!
      </motion.h2>
      <p className="mt-4 text-lg text-gray-200">Sign up now and start ranking the most influential personalities.</p>

      <motion.a
        href="/register"
        className="mt-6 inline-block bg-yellow-400 px-6 py-3 rounded-lg text-lg font-semibold text-black hover:bg-yellow-500 hover:scale-105 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Join Now
      </motion.a>
    </section>
  );
};