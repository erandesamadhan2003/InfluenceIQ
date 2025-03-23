import { useState } from "react";
import { motion } from "framer-motion";

export const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [strength, setStrength] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      setStrength(getPasswordStrength(e.target.value));
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
      return "Strong";
    return "Medium";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include", // Ensure cookies work properly
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("User registered successfully! Please login.");
        setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
        setStrength("");
      } else {
        setError(data.message || "Something went wrong!");
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again.");
    }
};

  return (
    <div className="bg-black text-white flex items-center justify-center px-6">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full my-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Create Your Account
        </h2>

        {message && <p className="text-green-400 text-center mb-4">{message}</p>}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
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

          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 py-3 rounded-lg text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Register
          </motion.button>
        </form>

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
