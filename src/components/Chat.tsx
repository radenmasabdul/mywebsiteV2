import { images } from "../utils/socialData";

export default function Chat() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 dark:bg-gray-800 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center font-plus-jakarta text-gray-900 dark:text-white">
        Let's Connect!
      </h2>

      <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 font-plus-jakarta max-w-xl mt-4">
        I'm always excited to collaborate and explore new ideas. Reach out via
        email or social platforms below!
      </p>

      <a
        href="mailto:abdul.tamsis@gmail.com?subject=Hello Abdul&body=I'm interested in working with you"
        aria-label="Send email to Abdul"
        title="Send Email to Abdul"
        className="relative mt-8 px-8 py-4 bg-black text-white text-lg sm:text-xl font-semibold font-plus-jakarta rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Connect
      </a>

      <div className="mt-10 flex flex-wrap justify-center gap-4 w-full max-w-lg">
        {images.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.caption}`}
            title={item.caption}
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 hover:drop-shadow-md transition-transform duration-200"
          >
            <img src={item.src} alt={item.caption} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
