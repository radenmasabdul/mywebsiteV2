import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
} from "lucide-react";

interface MenuProps {
  onHomeClick: () => void;
  className?: string;
}

export default function Menu({ onHomeClick, className = "" }: MenuProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    //trigger animasi roket
    if (id === "home") {
      onHomeClick();
    }
  };

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
    <ul
      className={`fixed top-4 z-50 menu menu-horizontal bg-[#1D1D1F] text-white rounded-4xl ${className}`}
    >
      {/* tombol dark mode */}
      <li>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </li>

      {/* tombol home */}
      <li>
        <button
          onClick={() => scrollToSection("home")}
          className={activeSection === "home" ? "text-yellow-400" : ""}
        >
          <Home className="h-5 w-5" />
        </button>
      </li>

      {/* tombol work */}
      <li>
        <button
          onClick={() => scrollToSection("work")}
          className={activeSection === "work" ? "text-yellow-400" : ""}
        >
          <Briefcase className="h-5 w-5" />
        </button>
      </li>

      {/* tombol story */}
      <li>
        <button
          onClick={() => scrollToSection("story")}
          className={activeSection === "story" ? "text-yellow-400" : ""}
        >
          <BookOpen className="h-5 w-5" />
        </button>
      </li>

      {/* tombol chat */}
      <li>
        <button
          onClick={() => scrollToSection("chat")}
          className={activeSection === "chat" ? "text-yellow-400" : ""}
        >
          <MessageSquare className="h-5 w-5" />
        </button>
      </li>
    </ul>
  );
}
