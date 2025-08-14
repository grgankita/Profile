// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const buttonBaseClasses = "rounded-full p-2";
  const lightModeButtonClasses = "bg-sky-400 text-white hover:bg-sky-500";
  const darkModeButtonClasses = "bg-gray-800 text-white hover:bg-gray-700";

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 h-12 w-[700px]  transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white bg-opacity-70 backdrop-blur-lg"
      }`}
    >
      {/* Desktop Layout */}
      {/* <div className="hidden  md:flex justify-center items-center space-x-12"> */}
      <div className="hidden  md:flex items-center gap-6 bg-white rounded-2xl px-6 py-3 shadow-2xl border border-gray-200 dark:bg-gray-900 space-x-12">
        <a
          href="#about"
          className={`text-xl font-bold ${
            isDarkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-800 hover:text-sky-500"
          }`}
        >
          About
        </a>
        <a
          href="#experience"
          className={`text-xl font-bold ${
            isDarkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-800 hover:text-sky-500"
          }`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`text-xl font-bold ${
            isDarkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-800 hover:text-sky-500"
          }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-xl font-bold ${
            isDarkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-800 hover:text-sky-500"
          }`}
        >
          Contact
        </a>
        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className={`${buttonBaseClasses} ${
            isDarkMode ? darkModeButtonClasses : lightModeButtonClasses
          } transition-all duration-300`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex items-center md:hidden gap-8 justify-center space-x-10 ">
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-xl focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes className={isDarkMode ? "text-white" : "text-gray-800"} />
          ) : (
            <FaBars className={isDarkMode ? "text-white" : "text-gray-800"} />
          )}
        </button>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className={`${buttonBaseClasses} ${
            isDarkMode ? darkModeButtonClasses : lightModeButtonClasses
          } transition-all duration-300`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col items-center space-y-4 md:hidden">
          <a
            href="#about"
            className={`text-xl font-bold ${
              isDarkMode
                ? "text-white hover:text-blue-400"
                : "text-gray-800 hover:text-sky-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className={`text-xl font-bold ${
              isDarkMode
                ? "text-white hover:text-blue-400"
                : "text-gray-800 hover:text-sky-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`text-xl font-bold ${
              isDarkMode
                ? "text-white hover:text-blue-400"
                : "text-gray-800 hover:text-sky-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`text-xl font-bold ${
              isDarkMode
                ? "text-white hover:text-blue-400"
                : "text-gray-800 hover:text-sky-500"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
