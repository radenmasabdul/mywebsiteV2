import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  ClearEffect,
  RainEffect,
  CloudEffect,
  ThunderstormEffect,
  SnowEffect,
  FogEffect,
  ExtremeEffect,
  TornadoEffect,
} from "./Weather";
import { useWeatherStore } from "../store/useWeatherStore";

export default function Home() {
  const hasFetched = useRef(false);
  const { t } = useTranslation();
  const { weather, fetchUserLocationWeather } = useWeatherStore();

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchUserLocationWeather();
    }
  }, [fetchUserLocationWeather]);

  const weatherBackground = {
    Clear:
      "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.7)_10%,_rgba(255,255,255,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(252,211,77,0.8)_10%,_rgba(0,0,0,0.9)_50%)]",
    Rain: "bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.8)_10%,_rgba(75,85,99,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.8)_10%,_rgba(0,0,0,0.9)_50%)]",
    Clouds:
      "bg-[radial-gradient(circle_at_top,_rgba(107,114,128,0.7)_10%,_rgba(209,213,219,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(75,85,99,0.8)_10%,_rgba(31,41,55,0.9)_50%)]",
    Thunderstorm:
      "bg-[radial-gradient(circle_at_top,_rgba(31,41,55,0.9)_10%,_rgba(0,0,0,1)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,1)_10%,_rgba(0,0,0,1)_50%)]",
    Snow: "bg-[radial-gradient(circle_at_top,_rgba(147,197,253,0.8)_10%,_rgba(255,255,255,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8)_10%,_rgba(209,213,219,0.9)_50%)]",
    Fog: "bg-[radial-gradient(circle_at_top,_rgba(156,163,175,0.7)_10%,_rgba(229,231,235,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(107,114,128,0.8)_10%,_rgba(31,41,55,0.9)_50%)]",
    Extreme:
      "bg-[radial-gradient(circle_at_top,_rgba(234,88,12,0.8)_10%,_rgba(253,186,116,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(194,65,12,0.8)_10%,_rgba(109,40,217,0.9)_50%)]",
    Tornado:
      "bg-[radial-gradient(circle_at_top,_rgba(75,85,99,0.8)_10%,_rgba(17,24,39,0.9)_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(31,41,55,0.8)_10%,_rgba(0,0,0,1)_50%)]",
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-10 lg:px-20 overflow-hidden ${
        weatherBackground[weather as keyof typeof weatherBackground]
      }`}
    >
      {weather === "Clear" && <ClearEffect />}
      {weather === "Rain" && <RainEffect />}
      {weather === "Clouds" && <CloudEffect />}
      {weather === "Thunderstorm" && <ThunderstormEffect />}
      {weather === "Snow" && <SnowEffect />}
      {weather === "Fog" && <FogEffect />}
      {weather === "Extreme" && <ExtremeEffect />}
      {weather === "Tornado" && <TornadoEffect />}

      <div className="max-w-2xl">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold font-plus-jakarta dark:text-white">
          {t("home.title")}
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-bold text-gray-900 leading-none font-plus-jakarta dark:text-white">
          Abdul Rahman
        </h1>
      </div>
    </section>
  );
}
