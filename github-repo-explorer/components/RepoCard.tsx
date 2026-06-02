export default function RepoCard({ repo }: any) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-white/80
      backdrop-blur-xl
      border border-slate-200
      rounded-3xl
      p-6
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all duration-300
    "
    >
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>

      {/* Header */}
      <div className="flex justify-between items-start gap-3">

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📦</span>

            <h3
              className="
                font-bold
                text-xl
                text-slate-900
                group-hover:text-indigo-600
                transition
                break-all
              "
            >
              {repo.name}
            </h3>
          </div>

          <p className="text-xs text-slate-400">
            GitHub Repository
          </p>
        </div>

        <span
          className="
            flex items-center gap-1
            bg-yellow-50
            text-yellow-700
            px-3 py-1
            rounded-full
            text-sm
            font-semibold
            border border-yellow-200
            shadow-sm
          "
        >
          ⭐ {repo.stargazers_count}
        </span>

      </div>

      {/* Description */}
      <p className="text-slate-600 mt-4 min-h-[72px] leading-relaxed text-sm">
        {repo.description || "No description available"}
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-5"></div>

      {/* Footer */}
      <div className="flex justify-between items-center">

        <div
          className="
            flex items-center gap-2
            bg-indigo-50
            text-indigo-600
            px-3 py-1.5
            rounded-full
            text-xs
            font-semibold
            border border-indigo-100
          "
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          {repo.language || "Unknown"}
        </div>

        <span className="text-slate-400 text-xs">
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>

      </div>

      {/* Button */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          text-center
          mt-6
          py-3
          rounded-2xl
          font-semibold
          bg-gradient-to-r
          from-slate-900
          via-slate-800
          to-slate-700
          text-white
          hover:from-indigo-600
          hover:via-purple-600
          hover:to-cyan-500
          transition-all duration-300
          shadow-md
        "
      >
        View Repository →
      </a>
    </div>
  );
}