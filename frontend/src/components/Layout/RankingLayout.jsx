import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HeroSection = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
      <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/24/0d/66/240d66f51bc3b929d4b70385860c25a0.jpg')" }}
    >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Animated Title */}
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    Discover Influencers That Matter
                </motion.h1>

                {/* Subtitle with Fade-in Effect */}
                <motion.p
                    className="text-lg md:text-xl text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    AI-powered credibility, engagement & fame analysis in one platform.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    className="w-full max-w-md flex items-center bg-white rounded-full px-4 py-3 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    <FaSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search influencers..."
                        className="flex-grow bg-transparent outline-none text-black ml-3"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full ml-2 transition"
                        onClick={() => onSearch(searchTerm)}
                    >
                        Search
                    </button>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition">
                        Explore Rankings
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md transition">
                        Get Started
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};




const influencers = [
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


export const InfluencerList = () => {
    return (
      <div className="container mx-auto px-4 py-10 bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Top Influencers
        </h2>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {influencers.map((influencer) => (
            <Link to={`/profile/${influencer.id}`} key={influencer.id}>
              <motion.div
                className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
  
                {/* Influencer Info */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-blue-400">
                    {influencer.name}
                  </h3>
                  <p className="text-gray-400">{influencer.category}</p>
  
                  {/* Credibility Score */}
                  <div className="mt-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">
                      {influencer.credibility}%
                    </span>
                    <span className="ml-2 text-gray-400">Credibility</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    );
  };