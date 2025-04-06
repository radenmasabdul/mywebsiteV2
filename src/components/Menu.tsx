import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
  Sun as SunIcon,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  Tornado,
  ThermometerSun,
  Cloud,
  Languages,
} from "lucide-react";
import { useWeatherStore } from "../store/useWeatherStore";
import i18n from "../i18n";

interface MenuProps {
  className?: string;
}

export default function Menu({ className = "" }: MenuProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isDarkActive, setIsDarkActive] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLangActive, setIsLangActive] = useState<boolean>(false);
  const hasFetched = useRef(false);
  const { weather, location, temperature, fetchUserLocationWeather } =
    useWeatherStore();

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchUserLocationWeather();
    }
  }, [fetchUserLocationWeather]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setIsDarkActive((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

  const getWeatherIcon = () => {
    switch (weather) {
      case "Clear":
        return <SunIcon className="h-5 w-5" />;
      case "Rain":
        return <CloudRain className="h-5 w-5" />;
      case "Clouds":
        return <Cloud className="h-5 w-5" />;
      case "Thunderstorm":
        return <CloudLightning className="h-5 w-5" />;
      case "Snow":
        return <Snowflake className="h-5 w-5" />;
      case "Fog":
        return <CloudFog className="h-5 w-5" />;
      case "Extreme":
        return <ThermometerSun className="h-5 w-5" />;
      case "Tornado":
        return <Tornado className="h-5 w-5" />;
      default:
        return <SunIcon className="h-5 w-5" />;
    }
  };

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang.startsWith("en") ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <ul
      className={`fixed top-4 z-50 menu menu-horizontal bg-[#1D1D1F] text-white rounded-4xl transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li>
        <button
          onClick={toggleDarkMode}
          className={isDarkActive ? "text-yellow-400" : ""}
        >
          {isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </li>

      {[
        { id: "home", icon: <Home className="h-5 w-5" /> },
        { id: "work", icon: <Briefcase className="h-5 w-5" /> },
        { id: "story", icon: <BookOpen className="h-5 w-5" /> },
        { id: "chat", icon: <MessageSquare className="h-5 w-5" /> },
      ].map(({ id, icon }) => (
        <li key={id}>
          <button
            onClick={() => scrollToSection(id)}
            className={activeSection === id ? "text-yellow-400" : ""}
          >
            {icon}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => {
            toggleLanguage();
            setIsLangActive((prev) => !prev);
          }}
          className={isLangActive ? "text-yellow-400" : ""}
        >
          <Languages className="h-5 w-5" />
        </button>
      </li>

      {isHovered && (
        <li className="group">
          <div className="flex items-center group-hover:text-yellow-400">
            <span className="font-plus-jakarta">
              {location || "Loading..."},
            </span>
            {getWeatherIcon()}
            <span>{temperature}°C</span>
          </div>
        </li>
      )}
    </ul>
  );
}
