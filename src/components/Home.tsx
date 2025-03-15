export default function Home() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-10 lg:px-20"
      style={{
        background: "radial-gradient(circle at top, #3B82F6, #FFFFFF)",
      }}
    >
      <div className="max-w-2xl">
        <p className="text-xl sm:text-3xl text-gray-700 font-semibold font-plus-jakarta">
          Code like an artist, craft like a developer!
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] xl:text-[170px] font-bold text-gray-900 leading-none font-plus-jakarta">
          Abdul Rahman
        </h1>
      </div>
    </section>
  );
}
