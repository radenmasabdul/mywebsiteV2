import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { getWeather, getCityName } from "../utils/weatherApi";

interface HomeProps {
  triggerAnimation: number;
}

export default function Home({ triggerAnimation }: HomeProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [weather, setWeather] = useState<string | null>(null);
  const [location, setLocation] = useState("Jakarta"); // Default Jakarta

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [triggerAnimation]);

  // Ambil lokasi pengguna
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         console.log(`📡 Lokasi terdeteksi: ${latitude}, ${longitude}`);

  //         // Ambil cuaca berdasarkan koordinat
  //         const weatherData = await getWeather(latitude, longitude);

  //         // Ambil nama kota berdasarkan koordinat
  //         const cityName = await getCityName(latitude, longitude);

  //         if (weatherData) {
  //           setWeather(weatherData.weather[0].main);
  //           setLocation(cityName);
  //         }
  //       },
  //       async () => {
  //         console.warn("⚠️ Izin lokasi ditolak, menggunakan Jakarta.");
  //         const data = await getWeather(-6.2088, 106.8456); // Koordinat Jakarta
  //         if (data) setWeather(data.weather[0].main);
  //       }
  //     );
  //   }
  // }, []);

  //untuk testing cuaca
  useEffect(() => {
    // Ubah kondisi cuaca untuk testing
    const testWeather = "Clear"; // Ganti sesuai animasi yang ingin diuji

    setWeather(testWeather);
    setLocation("Testing City");
  }, []);

  // Menentukan background gradient berdasarkan cuaca
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
        weatherBackground[weather as keyof typeof weatherBackground] ||
        weatherBackground["Clear"]
      }`}
    >
      <div className="absolute top-5 left-5 bg-transparent text-black dark:bg-transparent dark:text-white px-4 py-2 flex items-center gap-2">
        <span className="text-xl">📍</span>
        <span className="text-lg font-semibold">{location}</span>
      </div>

      {/* Animasi Roket */}
      <motion.div
        key={animationKey}
        initial={{ x: "-100vw", y: "100vh", scale: 0.8, opacity: 5 }}
        animate={{
          x: "100vw",
          y: "-10vh",
          scale: 2,
          opacity: [1, 1, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute text-7xl"
      >
        🚀
      </motion.div>

      {/* Efek Cuaca */}
      {weather === "Rain" && <RainEffect />}
      {weather === "Clouds" && <CloudEffect />}
      {weather === "Thunderstorm" && <ThunderstormEffect />}
      {weather === "Snow" && <SnowEffect />}
      {weather === "Fog" && <FogEffect />}
      {weather === "Extreme" && <HeatEffect />}
      {weather === "Tornado" && <StormEffect />}

      {/* Konten Teks */}
      <div className="max-w-2xl">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold font-plus-jakarta dark:text-white">
          Code like an artist, craft like a developer!
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

// Komponen Efek Hujan
function RainEffect() {
  const drops = Array.from({ length: 30 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {drops.map((_, i) => {
        const delay = Math.random() * 2;
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{ y: "-10vh", opacity: 0.8 }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{
              duration: 1.5,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-10 bg-blue-300 opacity-50"
            style={{ left: `${left}%` }}
          />
        );
      })}
    </div>
  );
}

// Komponen Efek Awan
function CloudEffect() {
  const clouds = Array.from({ length: 5 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {clouds.map((_, i) => {
        const delay = Math.random() * 3;
        const top = Math.random() * 50;

        return (
          <motion.div
            key={i}
            initial={{ x: "-20vw", opacity: 0.8 }}
            animate={{ x: "120vw", opacity: 1 }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-9xl"
            style={{ top: `${top}%` }}
          >
            ☁️
          </motion.div>
        );
      })}
    </div>
  );
}

// Komponen Efek Petir
function ThunderstormEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0], // Efek kilatan petir
      }}
      transition={{
        duration: 0.2, // Kilatan cepat
        repeat: Infinity, // Terus berkedip
        repeatDelay: Math.random() * 3 + 1, // Kilatan acak antara 1-4 detik
      }}
      className="absolute top-0 left-0 w-full h-full bg-white opacity-50 pointer-events-none"
    />
  );
}

function SnowEffect() {
  const flakes = Array.from({ length: 30 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {flakes.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "-10vh", opacity: 0.8 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-white text-3xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          ❄️
        </motion.div>
      ))}
    </div>
  );
}

function FogEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
      className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-50 pointer-events-none"
    />
  );
}

function HeatEffect() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-0 left-0 w-full h-full bg-orange-300 opacity-50 pointer-events-none"
    />
  );
}

function StormEffect() {
  const storm = Array.from({ length: 5 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {storm.map((_, i) => {
        const delay = Math.random() * 3;
        const top = Math.random() * 50;

        return (
          <motion.div
            key={i}
            initial={{ x: "-20vw", opacity: 0.8 }}
            animate={{ x: "120vw", opacity: 1 }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-9xl"
            style={{ top: `${top}%` }}
          >
            🌪️
          </motion.div>
        );
      })}
    </div>
  );
}
