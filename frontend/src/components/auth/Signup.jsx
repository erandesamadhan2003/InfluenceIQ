import { useState } from "react";
import { motion } from "framer-motion";

export const Signup = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(getPasswordStrength(value));
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
      return "Strong";
    return "Medium";
  };

  return (
    <div className="bg-black text-white flex items-center justify-center px-6">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full my-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Create Your Account
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
          />
          <p
            className={`mt-2 text-sm ${
              strength === "Weak"
                ? "text-red-400"
                : strength === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {strength && `Password Strength: ${strength}`}
          </p>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
          />
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 py-3 rounded-lg text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
        >
          Register
        </motion.button>

        {/* Already Have an Account? */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login Instead
          </a>
        </p>
      </motion.div>
    </div>
  );
};
