import { images } from "../utils/socialData";

export default function Chat() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 dark:bg-gray-800">
      <a
        href="mailto:abdul.tamsis@gmail.com?subject=Hello Abdul&body=I'm interested in working with you"
        className="font-plus-jakarta relative mt-4 px-8 py-4 bg-black text-white text-2xl font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Send Email
        <span className="absolute inset-0 rounded-full bg-gray-500 blur-lg opacity-30"></span>
      </a>

      <div className="mt-10 flex flex-col items-center w-full max-w-lg">
        <div className="flex mt-4 space-x-3">
          {images.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:opacity-80 transition"
              aria-label={item.caption}
            >
              <img src={item.src} alt={item.caption} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
