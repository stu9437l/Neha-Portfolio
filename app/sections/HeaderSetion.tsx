"use client";

import { useState } from "react";

import { Moon, Sun } from "lucide-react";

const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   document.documentElement.classList.toggle(newTheme);
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  const toggleTheme = (mode: "light" | "dark") => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">LB</div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
              className={`p-2 rounded-lg transition-all ${
                theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
