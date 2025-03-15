import { Mail, Instagram, Dribbble, Linkedin, X } from "lucide-react";

export default function Chat() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6">
      {/* Teks Kecil di Atas */}
      <p className="text-gray-500 italic text-sm text-center">
        Tap this ‘tiny’ button to highlight your product =)
      </p>

      {/* Tombol Connect */}
      <button className="relative mt-4 px-8 py-4 bg-black text-white text-2xl font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300">
        Connect
        <span className="absolute inset-0 rounded-full bg-gray-500 blur-lg opacity-30"></span>
      </button>

      {/* Email & Sosial Media */}
      <div className="mt-10 flex flex-col items-center w-full max-w-lg">
        <div className="bg-gray-100 flex items-center px-4 py-2 rounded-full shadow-md w-full justify-center">
          <Mail size={18} className="text-gray-700 mr-2" />
          <span className="text-gray-800 text-sm">abdul.tamsis@gmail.com</span>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex mt-4 space-x-3">
          <button className="p-2 bg-gray-900 text-white rounded-full hover:opacity-80 transition">
            <X size={18} />
          </button>
          <button className="p-2 bg-pink-600 text-white rounded-full hover:opacity-80 transition">
            <Instagram size={18} />
          </button>
          <button className="p-2 bg-pink-400 text-white rounded-full hover:opacity-80 transition">
            <Dribbble size={18} />
          </button>
          <button className="p-2 bg-blue-700 text-white rounded-full hover:opacity-80 transition">
            <Linkedin size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
