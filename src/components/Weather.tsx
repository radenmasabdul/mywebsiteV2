import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ClearEffect() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isDarkMode ? (
        <>
          {[...Array(20)].map((_, index) => {
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 1.5 + 0.5;
            const twinkleDuration = Math.random() * 2 + 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: twinkleDuration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 3,
                }}
                className="absolute text-white"
                style={{
                  top: `${posY}vh`,
                  left: `${posX}vw`,
                  fontSize: `${size}rem`,
                }}
              >
                ✨
              </motion.div>
            );
          })}

          {[...Array(5)].map((_, index) => {
            const startX = Math.random() * 100 + 80;
            const startY = Math.random() * 50;
            const duration = Math.random() * 6 + 3;

            return (
              <motion.div
                key={`meteor-${index}`}
                initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 1 }}
                animate={{
                  x: `${startX - 120}vw`,
                  y: `${startY + 50}vh`,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                className="absolute text-white"
                style={{ fontSize: "1.5rem" }}
              >
                ✨
              </motion.div>
            );
          })}
        </>
      ) : (
        <motion.div
          initial={{ x: "-100vw", y: "100vh", scale: 0.8, opacity: 1 }}
          animate={{ x: "100vw", y: "-10vh", scale: 2, opacity: 1 }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute text-7xl"
        >
          🚀
        </motion.div>
      )}
    </>
  );
}

export function RainEffect() {
  const drops = Array.from({ length: 50 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {drops.map((_, i) => {
        const size = Math.random() * 1.5 + 0.5;
        const length = Math.random() * 15 + 5;
        const duration = Math.random() * 1 + 1;
        const opacity = Math.random() * 0.5 + 0.3;

        return (
          <motion.div
            key={i}
            initial={{ y: "-10vh", opacity }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{
              duration,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-blue-300"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${length}px`,
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </div>
  );
}

export function CloudEffect() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(7)].map((_, i) => {
        const size = Math.random() * 3 + 3;
        const startY = Math.random() * 50;
        const duration = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.5;

        return (
          <motion.div
            key={i}
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{ x: "120vw", opacity: [0, opacity, opacity, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-white"
            style={{
              top: `${startY}%`,
              fontSize: `${size}rem`,
              filter: "blur(2px)",
            }}
          >
            ☁️
          </motion.div>
        );
      })}
    </div>
  );
}

export function ThunderstormEffect() {
  return (
    <>
      {[...Array(2)].map((_, index) => {
        const intensity = Math.random() * 0.5 + 0.3;
        const flashDuration = Math.random() * 0.2 + 0.1;
        const delay = Math.random() * 3 + 1;

        return (
          <motion.div
            key={`flash-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, intensity, 0] }}
            transition={{
              duration: flashDuration,
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="absolute top-0 left-0 w-full h-full bg-white pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          />
        );
      })}
    </>
  );
}

export function SnowEffect() {
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

export function FogEffect() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-30vw", opacity: 0.4 }}
          animate={{ x: "130vw", opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-gray-400 rounded-full"
          style={{
            top: `${Math.random() * 80}vh`,
            width: "120vw",
            height: "30vh",
            filter: "blur(20px)",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export function ExtremeEffect() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-orange-500"
        style={{ filter: "blur(10px)", mixBlendMode: "overlay" }}
      />

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-20vw", opacity: 0.3 }}
          animate={{ x: "120vw", opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 15 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-orange-400 rounded-full"
          style={{
            top: `${Math.random() * 80}vh`,
            width: "120vw",
            height: "25vh",
            filter: "blur(20px)",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export function TornadoEffect() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 40 + 20;
        return (
          <motion.div
            key={i}
            initial={{ x: "-30vw", opacity: 0.4 }}
            animate={{
              x: "120vw",
              y: ["-10vh", "10vh", "-10vh"],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute bg-gray-400 opacity-40 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 80}vh`,
              filter: "blur(12px)",
            }}
          />
        );
      })}
    </div>
  );
}
