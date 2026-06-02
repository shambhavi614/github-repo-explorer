type UserCardProps = {
  user: any;
};

export default function UserCard({ user }: UserCardProps) {
  if (!user) return null;

  return (
    <div className="
      mt-10
      bg-gradient-to-br from-white to-slate-50
      border border-slate-200
      rounded-3xl
      shadow-xl
      overflow-hidden
    ">

      {/* HEADER BANNER */}
      <div className="relative h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">

        {/* subtle pattern glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

      </div>

      <div className="px-8 pb-8 relative">

        {/* AVATAR */}
        <div className="-mt-16 flex justify-start">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="
              w-32 h-32
              rounded-full
              border-4 border-white
              shadow-xl
              object-cover
              bg-white
            "
          />
        </div>

        {/* NAME SECTION */}
        <div className="mt-5">
          <h2 className="text-3xl font-bold text-slate-800">
            {user.name || user.login}
          </h2>

          <p className="text-indigo-600 font-medium">
            @{user.login}
          </p>

          <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
            {user.bio || "No bio available"}
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="
            bg-white
            border border-slate-200
            rounded-2xl
            p-4
            text-center
            shadow-sm
            hover:shadow-md
            transition
          ">
            <h3 className="text-2xl font-bold text-slate-800">
              {user.followers}
            </h3>
            <p className="text-slate-500 text-sm">Followers</p>
          </div>

          <div className="
            bg-white
            border border-slate-200
            rounded-2xl
            p-4
            text-center
            shadow-sm
            hover:shadow-md
            transition
          ">
            <h3 className="text-2xl font-bold text-slate-800">
              {user.following}
            </h3>
            <p className="text-slate-500 text-sm">Following</p>
          </div>

          <div className="
            bg-white
            border border-slate-200
            rounded-2xl
            p-4
            text-center
            shadow-sm
            hover:shadow-md
            transition
          ">
            <h3 className="text-2xl font-bold text-slate-800">
              {user.public_repos}
            </h3>
            <p className="text-slate-500 text-sm">Repos</p>
          </div>

        </div>

        {/* BADGES */}
        <div className="flex flex-wrap gap-3 mt-6">

          {user.location && (
            <span className="
              bg-indigo-50
              text-indigo-600
              px-4 py-2
              rounded-full
              text-sm
              border border-indigo-100
            ">
              📍 {user.location}
            </span>
          )}

          {user.company && (
            <span className="
              bg-emerald-50
              text-emerald-600
              px-4 py-2
              rounded-full
              text-sm
              border border-emerald-100
            ">
              🏢 {user.company}
            </span>
          )}

        </div>

        {/* BUTTON */}
        <a
          href={user.html_url}
          target="_blank"
          className="
            inline-flex
            items-center
            justify-center
            mt-7
            px-6 py-3
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r from-slate-900 to-slate-700
            hover:from-indigo-600 hover:to-purple-600
            shadow-lg
            hover:shadow-2xl
            transition
          "
        >
          View GitHub Profile →
        </a>

      </div>
    </div>
  );
}