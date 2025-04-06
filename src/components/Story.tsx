import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { images, description, descriptionText } from "../utils/storyData";
import ReadMore from "./ReadMore";

export default function Story() {
  const x = useMotionValue(0);
  const velocity = 0.5;
  const itemWidth = 320;
  const totalWidth = images.length * itemWidth;

  useEffect(() => {
    let raf: number;

    const loop = () => {
      x.set((x.get() - velocity) % -totalWidth);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [totalWidth, x]);

  return (
    <main className="w-full px-6 sm:px-10 lg:px-20 py-16 dark:bg-gray-800">
      <section className="max-w-2xl">
        <p className="text-xl sm:text-2xl md:text-6xl text-gray-700 font-semibold font-plus-jakarta dark:text-white">
          Code like an artist, craft like a developer!
        </p>
      </section>

      {/* section 1 */}
      {/* mobile view*/}
      <section className="mt-10 block lg:hidden">
        <div className="bg-gray-100 dark:bg-gray-500 p-6 sm:p-10 rounded-lg shadow flex flex-col gap-6">
          <ReadMore text={description} />

          <div className="overflow-hidden flex justify-center items-center">
            <motion.div
              className="flex space-x-6"
              style={{ x }}
              drag="x"
              dragElastic={0.05}
              dragConstraints={{ left: -totalWidth, right: 0 }}
            >
              {[...images, ...images].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`relative bg-white p-3 rounded-sm shadow-lg w-[70vw] max-w-xs sm:w-[220px] md:w-[260px] shrink-0 
            ${idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
            hover:scale-105 mr-[100px]`}
                >
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-11 w-3 h-3 rounded-full ${item.nail} z-10 shadow`}
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-0 h-0">
                    <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[-45deg] origin-top-right -left-[60px]" />
                    <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[45deg] origin-top-left -right-[60px]" />
                  </div>

                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full aspect-[4/5] object-cover rounded-sm border border-gray-300"
                  />
                  <p className="mt-2 text-sm text-gray-600 text-center font-plus-jakarta">
                    {item.caption}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/*dekstop view */}
      <section className="mt-10 hidden lg:grid grid-cols-5 gap-6">
        <div className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow col-span-2 dark:bg-gray-500">
          <p className="text-xl text-gray-800 font-semibold font-plus-jakarta dark:text-white leading-relaxed">
            {description}
          </p>
        </div>

        <div className="bg-gray-100 overflow-hidden flex justify-center items-center col-span-3 rounded-lg shadow p-4 dark:bg-gray-500">
          <motion.div
            className="flex space-x-6"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            dragConstraints={{ left: -totalWidth, right: 0 }}
          >
            {[...images, ...images].map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative bg-white p-3 rounded-sm shadow-lg w-[70vw] max-w-xs sm:w-[220px] md:w-[260px] shrink-0 
          ${idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
          hover:scale-105 mr-[100px]`}
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-11 w-3 h-3 rounded-full ${item.nail} z-10 shadow`}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-0 h-0">
                  <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[-45deg] origin-top-right -left-[60px]" />
                  <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[45deg] origin-top-left -right-[60px]" />
                </div>

                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-[4/5] object-cover rounded-sm border border-gray-300"
                />
                <p className="mt-2 text-sm text-gray-600 text-center font-plus-jakarta">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* section 2 */}
      {/* mobile view*/}
      <section className="mt-10 block lg:hidden">
        <div className="bg-gray-100 dark:bg-gray-500 p-6 sm:p-10 rounded-lg shadow flex flex-col gap-6 items-center">
          <div
            className={`relative bg-white p-3 rounded-sm shadow-lg w-[70vw] max-w-xs sm:w-[220px] md:w-[260px] shrink-0 rotate-[2deg]`}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-11 w-3 h-3 rounded-full ${images[2].nail} z-10 shadow`}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-0 h-0">
              <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[-45deg] origin-top-right -left-[60px]" />
              <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[45deg] origin-top-left -right-[60px]" />
            </div>

            <img
              src={images[2].src}
              alt={images[2].caption}
              className="w-full aspect-[4/5] object-cover rounded-sm border border-gray-300"
            />
            <p className="mt-2 text-sm text-gray-600 text-center font-plus-jakarta">
              {images[2].caption}
            </p>
          </div>
          <ReadMore text={descriptionText} />
        </div>
      </section>

      {/*dekstop view */}
      <section className="mt-10 hidden lg:grid grid-cols-5 gap-6">
        <div className="bg-gray-100 overflow-hidden flex justify-center items-center col-span-3 rounded-lg shadow p-4 dark:bg-gray-500">
          <div
            className={`relative bg-white p-3 rounded-sm shadow-lg w-[70vw] max-w-xs sm:w-[220px] md:w-[260px] shrink-0 rotate-[2deg]`}
          >
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-11 w-3 h-3 rounded-full ${images[2].nail} z-10 shadow`}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-0 h-0">
              <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[-45deg] origin-top-right -left-[60px]" />
              <div className="absolute w-[60px] border-t-[2px] border-[#8B4513] rotate-[45deg] origin-top-left -right-[60px]" />
            </div>

            <img
              src={images[2].src}
              alt={images[2].caption}
              className="w-full aspect-[4/5] object-cover rounded-sm border border-gray-300"
            />
            <p className="mt-2 text-sm text-gray-600 text-center font-plus-jakarta">
              {images[2].caption}
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow col-span-2 dark:bg-gray-500">
          <p className="text-xl text-gray-800 font-semibold font-plus-jakarta dark:text-white leading-relaxed space-y-4">
            {descriptionText}
          </p>
        </div>
      </section>
    </main>
  );
}
