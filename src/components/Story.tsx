export default function Story() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-16">
      {/* Judul */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight">
        I dont have dark <br />
        <span className="text-gray-700">secrets, only bright ones</span>
      </h2>

      {/* Kontainer Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Kotak 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-gray-700 text-sm sm:text-base">
            Growing up in Ukraine, my journey into design started...
            <br />
            <br />
            Five years later, my wife and I moved to Porto. Here, with the ocean
            breeze, I craft web and brand solutions for tech companies to shine.
          </p>
        </div>

        {/* Kotak 2 - Foto */}
        <div className="bg-gray-100 flex justify-center items-center rounded-lg shadow p-4">
          <img
            src="/images/photo.jpg"
            alt="Our little adventure"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Kotak 3 - Ilustrasi */}
        <div className="bg-gray-100 flex justify-center items-center rounded-lg shadow p-4">
          <img
            src="/images/branding.png"
            alt="Branding"
            className="w-40 h-auto"
          />
        </div>

        {/* Kotak 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-gray-700 text-sm sm:text-base">
            I partner up with dynamic founders reinventing tomorrow, from YC
            startups to enterprises and bootstrapped guys.
            <br />
            <br />
            My mission: to craft unique, consistent, mature identities for SaaS
            and Web3 products...
          </p>
        </div>
      </div>
    </section>
  );
}
