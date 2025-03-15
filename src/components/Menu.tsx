import { useState } from "react";
import {
  Moon,
  Sun,
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
} from "lucide-react";

interface MenuProps {
  className?: string;
}

export default function Menu({ className = "" }: MenuProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Update menu yang sedang aktif
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul
      className={`fixed top-4 z-50 menu menu-horizontal bg-[#1D1D1F] text-white rounded-4xl ${className}`}
    >
      <li>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("home")}
          className={activeSection === "home" ? "text-yellow-400" : ""}
        >
          <Home className="h-5 w-5" />
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("work")}
          className={activeSection === "work" ? "text-yellow-400" : ""}
        >
          <Briefcase className="h-5 w-5" />
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("story")}
          className={activeSection === "story" ? "text-yellow-400" : ""}
        >
          <BookOpen className="h-5 w-5" />
        </button>
      </li>
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
