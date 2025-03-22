import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const user = {
  name: "John Doe",
  isAdmin: false, 
};

const handleLogout = () => {
  console.log("User logged out");
};

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = !!user;

  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition">
        InfluenceIQ
      </Link>

      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="relative group hover:text-blue-300 transition">
          Home
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link to="/rankings" className="relative group hover:text-blue-300 transition">
          Rankings
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link to="/about" className="relative group hover:text-blue-300 transition">
          about
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
        <Link to="/contact" className="relative group hover:text-blue-300 transition">
          contact Us
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
        {isAuthenticated && !user.isAdmin && (
          <Link to="/dashboard" className="relative group hover:text-blue-300 transition">
            Dashboard
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        )}
        {isAuthenticated && user.isAdmin && (
          <Link to="/admin" className="relative group hover:text-blue-300 transition">
            Admin Panel
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        )}
      </div>

      <div className="hidden md:flex gap-4 text-lg">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="px-4 py-2 border border-blue-400 rounded hover:bg-blue-500 hover:text-white transition">Login</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Logout</button>
        )}
      </div>

      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 shadow-md p-4 md:hidden">
          <Link to="/" className="block py-2 hover:text-blue-300 transition">Home</Link>
          <Link to="/rankings" className="block py-2 hover:text-blue-300 transition">Rankings</Link>
          {isAuthenticated && !user.isAdmin && (
            <Link to="/dashboard" className="block py-2 hover:text-blue-300 transition">Dashboard</Link>
          )}
          {isAuthenticated && user.isAdmin && (
            <Link to="/admin" className="block py-2 hover:text-blue-300 transition">Admin Panel</Link>
          )}
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="block py-2 hover:text-blue-300 transition">Login</Link>
              <Link to="/register" className="block py-2 hover:text-blue-300 transition">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="block w-full text-left py-2 text-red-500 hover:text-red-400 transition">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};
