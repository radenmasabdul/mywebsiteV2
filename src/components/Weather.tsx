import { motion } from "framer-motion";

export function RainEffect() {
  const drops = Array.from({ length: 30 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {drops.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "-10vh", opacity: 0.8 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-10 bg-blue-300 opacity-50"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}

export function CloudEffect() {
  const clouds = Array.from({ length: 5 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {clouds.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-20vw", opacity: 0.8 }}
          animate={{ x: "120vw", opacity: 1 }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-9xl"
          style={{ top: `${Math.random() * 50}%` }}
        >
          ☁️
        </motion.div>
      ))}
    </div>
  );
}

export function ThunderstormEffect() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 1,
      }}
      className="absolute top-0 left-0 w-full h-full bg-white opacity-50 pointer-events-none"
    />
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
      className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-50 pointer-events-none"
    />
  );
}

export function HeatEffect() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-0 left-0 w-full h-full bg-orange-300 opacity-50 pointer-events-none"
    />
  );
}

export function StormEffect() {
  const storm = Array.from({ length: 5 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {storm.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-20vw", opacity: 0.8 }}
          animate={{ x: "120vw", opacity: 1 }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-9xl"
          style={{ top: `${Math.random() * 50}%` }}
        >
          🌪️
        </motion.div>
      ))}
    </div>
  );
}
