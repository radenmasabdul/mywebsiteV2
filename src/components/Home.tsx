import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeProps {
  triggerAnimation: number;
}

export default function Home({ triggerAnimation }: HomeProps) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [triggerAnimation]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-10 lg:px-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, rgba(59, 130, 246, 0.7) 10%, rgba(255, 255, 255, 0.9) 50%)",
      }}
    >
      {/* rocket animation */}
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

      {/* text content */}
      <div className="max-w-2xl">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold font-plus-jakarta">
          Code like an artist, craft like a developer!
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] font-bold text-gray-900 leading-none font-plus-jakarta">
          Abdul Rahman
        </h1>
      </div>
    </section>
  );
}
