import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">InfluenceIQ</h2>
          <p className="mt-2 text-gray-400">
            AI-powered ranking system evaluating credibility, fame, and impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <a
              href='/'
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
            {["Rankings", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-white text-lg transition transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} InfluenceIQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
