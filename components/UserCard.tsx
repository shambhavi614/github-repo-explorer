type UserCardProps = {
  user: any;
};

export default function UserCard({ user }: UserCardProps) {
  if (!user) return null;

  return (
    <div
      className="
      mt-10
      relative
      overflow-hidden
      bg-white/80
      backdrop-blur-xl
      border border-white
      rounded-[32px]
      shadow-2xl
    "
    >
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>

      {/* Cover */}
      <div className="relative h-44 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent)] opacity-20"></div>

        <div className="absolute top-6 right-6">
          <div className="bg-white/20 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20">
            GitHub Profile
          </div>
        </div>

      </div>

      <div className="px-8 pb-8 relative">

        {/* Avatar */}
        <div className="-mt-16 flex justify-start">

          <div className="relative">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="
                w-36 h-36
                rounded-full
                border-[6px]
                border-white
                shadow-2xl
                object-cover
                bg-white
              "
            />

            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

        </div>

        {/* User Info */}
        <div className="mt-5">

          <h2 className="text-4xl font-extrabold text-slate-900">
            {user.name || user.login}
          </h2>

          <p className="text-indigo-600 font-semibold text-lg">
            @{user.login}
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            {user.bio || "No bio available"}
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mt-8">

          <div
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-5
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
            "
          >
            <h3 className="text-3xl font-bold text-slate-900">
              {user.followers}
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              Followers
            </p>
          </div>

          <div
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-5
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
            "
          >
            <h3 className="text-3xl font-bold text-slate-900">
              {user.following}
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              Following
            </p>
          </div>

          <div
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-5
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
            "
          >
            <h3 className="text-3xl font-bold text-slate-900">
              {user.public_repos}
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              Repositories
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-7">

          {user.location && (
            <span
              className="
                bg-indigo-50
                text-indigo-600
                px-4 py-2
                rounded-full
                text-sm
                border border-indigo-100
                font-medium
              "
            >
              📍 {user.location}
            </span>
          )}

          {user.company && (
            <span
              className="
                bg-emerald-50
                text-emerald-600
                px-4 py-2
                rounded-full
                text-sm
                border border-emerald-100
                font-medium
              "
            >
              🏢 {user.company}
            </span>
          )}

        </div>

        {/* CTA */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            mt-8
            px-8
            py-3.5
            rounded-2xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-700
            hover:from-indigo-600
            hover:via-purple-600
            hover:to-cyan-500
            shadow-lg
            hover:shadow-2xl
            transition-all duration-300
          "
        >
          View GitHub Profile →
        </a>

      </div>
    </div>
  );
}