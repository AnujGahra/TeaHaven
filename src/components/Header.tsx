import { useState } from 'react';
import { motion } from 'framer-motion';
import { CupSoda, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-amber-50 dark:bg-gray-900 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <CupSoda className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 dark:text-amber-400" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">TeaHaven</h1>
        </motion.div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-amber-50 dark:bg-gray-900 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          <a
            href="#"
            className="text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors duration-200 w-full lg:w-auto text-center py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors duration-200 w-full lg:w-auto text-center py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#contact"
            className="text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-colors duration-200 w-full lg:w-auto text-center py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};