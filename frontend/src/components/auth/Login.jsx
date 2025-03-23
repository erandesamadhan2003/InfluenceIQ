import { motion } from "framer-motion";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
        console.log("Sending login request...");

        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Response data:", data);

        if (!response.ok) {
            setError(data.message);
            return;
        }

        localStorage.setItem("user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("userUpdated"));
        navigate("/");
    } catch (err) {
        console.error("Login request failed:", err);
        setError("Something went wrong. Try again!");
    }
};

  return (
    <div className="bg-black text-white flex items-center justify-center px-6">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full my-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Login to InfluenceIQ
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-300"
          />
        </div>

        {/* Forgot Password & Login Button */}
        <div className="flex justify-between items-center mb-6">
          <a href="#" className="text-blue-400 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
          className="w-full bg-blue-500 py-3 rounded-lg text-white font-bold text-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </motion.button>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* OAuth Login Buttons */}
        <div className="flex flex-col space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center bg-red-500 py-3 rounded-lg text-white font-bold text-lg hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center bg-blue-700 py-3 rounded-lg text-white font-bold text-lg hover:bg-blue-800 transition duration-300"
          >
            <FaFacebook className="mr-2" /> Login with Facebook
          </motion.button>
        </div>

        {/* Sign Up Instead */}
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Sign Up Instead
          </a>
        </p>
      </motion.div>
    </div>
  );
};
