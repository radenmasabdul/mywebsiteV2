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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
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
        <a href="#">
          <Home className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a href="#">
          <Briefcase className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a href="#">
          <BookOpen className="h-5 w-5" />
        </a>
      </li>
      <li>
        <a href="#">
          <MessageSquare className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}
