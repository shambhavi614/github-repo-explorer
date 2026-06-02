export default function RepoCard({ repo }: any) {
  return (
    <div className="
      group
      bg-gradient-to-br from-white to-slate-50
      border border-slate-200
      rounded-2xl
      p-6
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-2
      transition-all duration-300
    ">

      {/* HEADER */}
      <div className="flex justify-between items-start gap-3">

        <h3 className="
          font-bold text-xl text-slate-900
          group-hover:text-indigo-600
          transition
        ">
          {repo.name}
        </h3>

        <span className="
          flex items-center gap-1
          bg-yellow-50
          text-yellow-700
          px-3 py-1
          rounded-full
          text-sm
          border border-yellow-200
        ">
          ⭐ {repo.stargazers_count}
        </span>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-3 min-h-[60px] leading-relaxed">
        {repo.description || "No description available"}
      </p>

      {/* FOOTER INFO */}
      <div className="flex justify-between items-center mt-6">

        <span className="
          bg-indigo-50
          text-indigo-600
          px-3 py-1
          rounded-full
          text-xs font-medium
          border border-indigo-100
        ">
          {repo.language || "Unknown"}
        </span>

        <span className="text-gray-400 text-xs">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>

      </div>

      {/* BUTTON */}
      <a
        href={repo.html_url}
        target="_blank"
        className="
          block
          text-center
          mt-6
          bg-gradient-to-r from-slate-900 to-slate-700
          text-white
          py-2.5
          rounded-xl
          font-medium
          tracking-wide
          hover:from-indigo-600 hover:to-purple-600
          transition-all duration-300
        "
      >
        View Repository →
      </a>

    </div>
  );
}