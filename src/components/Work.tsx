import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-gray-500 italic text-sm">from 2020 'til today</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          My latest work
        </h2>
      </div>

      {/* Project Card */}
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-10 shadow-lg relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-black text-white p-2 rounded-lg">💎</span>
          <h3 className="text-lg font-semibold">Ruby</h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base max-w-md">
          Reimagining website for B2B banking solution with a mature look and
          feel to meet modern e-commerce needs.
        </p>

        {/* Images */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-green-900 text-white p-6 rounded-lg">
            Ruby offers
          </div>
          <img
            src="/path-to-image.jpg"
            alt="Project preview"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Arrow Button */}
        <div className="absolute top-6 right-6">
          <ArrowRight className="text-gray-700" />
        </div>
      </div>
    </section>
  );
}
