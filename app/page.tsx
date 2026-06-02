import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-50 px-6 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center relative">

          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-400/20 blur-[140px] rounded-full"></div>
          <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
          <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-md text-indigo-600 font-medium text-sm">
              ✨ Developer Productivity Tool
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Explore{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                GitHub
              </span>
              <br />
              Like Never Before
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Search developers, discover repositories, analyze profiles,
              and explore open-source projects through a beautifully crafted
              modern dashboard.
            </p>

          </div>
        </div>

        {/* SEARCH CONTAINER */}
        <div className="mt-14">
          <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] p-8 md:p-10">

            <div className="flex items-center gap-3 mb-6">

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="text-sm text-slate-500 font-medium">
                GitHub Search Console
              </div>

            </div>

            <SearchBar />

          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="group bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

            <div className="text-4xl mb-4">⚡</div>

            <h3 className="font-bold text-xl text-slate-800">
              Lightning Fast
            </h3>

            <p className="text-slate-500 mt-3">
              Instantly fetch GitHub profiles, repositories,
              stars, and user information.
            </p>

          </div>

          <div className="group bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

            <div className="text-4xl mb-4">📡</div>

            <h3 className="font-bold text-xl text-slate-800">
              Real-Time Data
            </h3>

            <p className="text-slate-500 mt-3">
              Powered directly by the GitHub API
              for fresh and accurate repository information.
            </p>

          </div>

          <div className="group bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

            <div className="text-4xl mb-4">🚀</div>

            <h3 className="font-bold text-xl text-slate-800">
              Developer Friendly
            </h3>

            <p className="text-slate-500 mt-3">
              Modern user experience designed for
              quick exploration and productivity.
            </p>

          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-16 pb-6">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border">
            <span>⚙️</span>
            <span className="text-sm text-slate-600">
              Powered by GitHub API • Built with Next.js
            </span>
          </div>

        </div>

      </div>
    </main>
  );
}