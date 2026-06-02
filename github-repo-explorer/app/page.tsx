import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center relative">

          {/* Glow blobs */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-300/30 blur-3xl rounded-full"></div>
          <div className="absolute top-20 right-10 w-60 h-60 bg-cyan-300/30 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <span className="px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600 font-medium">
              ⚡ Developer Tool
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-5 leading-tight">
              GitHub <span className="text-indigo-600">Repo</span> Explorer
            </h1>

            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Discover developers, explore repositories, and analyze GitHub profiles in a beautiful interactive dashboard.
            </p>

          </div>
        </div>

        {/* SEARCH CARD */}
        <div className="mt-12">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-500 ml-2">
                GitHub Search Console
              </span>
            </div>

            <SearchBar />

          </div>
        </div>

        {/* FEATURE STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">

          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-indigo-600">Fast Search</h3>
            <p className="text-sm text-gray-500 mt-2">
              Instantly fetch GitHub profiles and repos
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-cyan-600">Live Data</h3>
            <p className="text-sm text-gray-500 mt-2">
              Real-time GitHub API integration
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-purple-600">Developer Friendly</h3>
            <p className="text-sm text-gray-500 mt-2">
              Clean UI for easy exploration
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}