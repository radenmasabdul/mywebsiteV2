import { useEffect, useRef, useState } from "react";
import { images, description } from "../utils/storyData";

export default function Story() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const velocity = 0.5;
  const itemWidth = 320;
  const totalWidth = itemWidth * images.length;

  // auto slide
  useEffect(() => {
    let anim: number;
    const animate = () => {
      if (!isDragging.current) setPosition((prev) => prev - velocity);
      anim = requestAnimationFrame(animate);
    };
    anim = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(anim);
  }, []);

  // drag handler
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleDown = (e: PointerEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      track.setPointerCapture(e.pointerId);
    };

    const handleMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      startX.current = e.clientX;
      setPosition((prev) => prev + delta);
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    track.addEventListener("pointerdown", handleDown);
    track.addEventListener("pointermove", handleMove);
    track.addEventListener("pointerup", handleUp);
    track.addEventListener("pointerleave", handleUp);

    return () => {
      track.removeEventListener("pointerdown", handleDown);
      track.removeEventListener("pointermove", handleMove);
      track.removeEventListener("pointerup", handleUp);
      track.removeEventListener("pointerleave", handleUp);
    };
  }, []);

  return (
    <main className="w-full px-6 sm:px-10 lg:px-20 py-16 dark:bg-gray-800">
      <section className="max-w-2xl">
        <p className="text-xl sm:text-2xl md:text-6xl text-gray-700 font-semibold font-plus-jakarta dark:text-white">
          Code like an artist, craft like a developer!
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="bg-gray-100 p-6 sm:p-10 rounded-lg shadow sm:col-span-2 dark:bg-gray-500">
          <p className="text-xl text-gray-800 font-semibold font-plus-jakarta dark:text-white leading-relaxed space-y-4">
            {description}
          </p>
        </div>

        {/* POLAROID CAROUSEL */}
        <div className="bg-gray-100 overflow-hidden flex justify-center items-center sm:col-span-3 rounded-lg shadow p-4 dark:bg-gray-500">
          <div
            ref={trackRef}
            className="flex space-x-6 w-full relative"
            style={{
              transform: `translateX(${position % -totalWidth}px)`,
              transition: isDragging.current ? "none" : "transform 0.1s linear",
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-3 rounded-sm shadow-lg w-[70vw] max-w-xs sm:w-[220px] md:w-[260px] shrink-0 
                  ${
                    idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                  } transition-transform duration-300 
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
