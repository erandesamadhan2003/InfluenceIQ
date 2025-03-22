import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const ProfileHeader = ({ influencer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white shadow-xl p-6 rounded-2xl text-center max-w-3xl mx-auto"
    >
      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative inline-block"
      >
        <img
          src={influencer.image}
          alt={influencer.name}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
        />
      </motion.div>

      {/* Influencer Name & Verified Badge */}
      <div className="mt-4 flex justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">{influencer.name}</h1>
        <CheckCircle className="text-blue-500" size={24} />
      </div>

      {/* Category & Bio */}
      <h2 className="text-lg text-gray-500">{influencer.category}</h2>
      <p className="mt-2 text-gray-600">{influencer.bio}</p>

      {/* Credibility & Followers */}
      <div className="mt-4 flex justify-center space-x-6 text-gray-700">
        <span className="font-semibold">⭐ Credibility: {influencer.credibility}</span>
        <span className="font-semibold">👥 Followers: {influencer.followers}</span>
      </div>
    </motion.div>
  );
};

