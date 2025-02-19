"use client";

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded transition-all duration-300"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="44"
          height="44"
          className="transition-transform duration-300 transform"
        >
          <circle cx="32" cy="32" r="12" fill="#FFDD00" />
          <g stroke="#FFDD00" strokeWidth="2">
            <line x1="32" y1="10" x2="32" y2="0" />
            <line x1="32" y1="54" x2="32" y2="64" />
            <line x1="10" y1="32" x2="0" y2="32" />
            <line x1="54" y1="32" x2="64" y2="32" />
            <line x1="22.5" y1="22.5" x2="17" y2="17" />
            <line x1="42.5" y1="22.5" x2="48" y2="17" />
            <line x1="22.5" y1="42.5" x2="17" y2="47" />
            <line x1="42.5" y1="42.5" x2="48" y2="47" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="44"
          height="44"
          className="transition-transform duration-300 transform"
        >
          <circle cx="32" cy="32" r="16" fill="white" />
          <circle cx="40" cy="24" r="12" fill="#1F1F1F" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
