"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("stars");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) setRecentSearches(JSON.parse(stored));
  }, []);

  const handleSearch = async () => {
    if (!username.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`/api/github/${username}`);

      setUser(response.data.user);
      setRepos(response.data.repos);

      const updatedSearches = [
        username,
        ...recentSearches.filter((item) => item !== username),
      ].slice(0, 5);

      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    } catch (err) {
      setError("GitHub user not found");
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "updated")
      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      );
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* SEARCH SECTION */}
      <div className="
        relative overflow-hidden
        bg-white/80
        backdrop-blur-2xl
        border border-white
        rounded-[32px]
        shadow-2xl
        p-6 md:p-8
      ">

        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="🔍 Search GitHub username..."
            className="
              flex-1
              px-6 py-4
              rounded-2xl
              border border-slate-200
              bg-white
              text-slate-700
              placeholder:text-slate-400
              text-lg
              shadow-sm
              focus:outline-none
              focus:ring-4
              focus:ring-indigo-100
              focus:border-indigo-400
              transition-all
            "
          />

          <button
            onClick={handleSearch}
            className="
              px-8 py-4
              rounded-2xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-cyan-500
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </div>

        {/* RECENT SEARCHES */}
        {recentSearches.length > 0 && (
          <div className="mt-7">

            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3 font-medium">
              Recent Searches
            </p>

            <div className="flex flex-wrap gap-3">

              {recentSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => setUsername(item)}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-white
                    border border-slate-200
                    text-slate-600
                    text-sm
                    shadow-sm
                    hover:border-indigo-300
                    hover:text-indigo-600
                    hover:shadow-md
                    transition-all
                  "
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}
      </div>

      {/* ERROR */}
      {error && (
        <div className="
          bg-red-50
          border border-red-200
          text-red-600
          rounded-3xl
          p-5
          shadow-sm
        ">
          ❌ {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {!user && !loading && !error && (
        <div className="
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          rounded-[32px]
          shadow-xl
          p-14
          text-center
        ">

          <div className="text-7xl mb-5">
            🚀
          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Explore GitHub Developers
          </h3>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Search any GitHub username and instantly discover profiles,
            repositories, stars, and activity.
          </p>

        </div>
      )}

      {/* USER CARD */}
      {user && <UserCard user={user} />}

      {/* REPOSITORIES */}
      {repos.length > 0 && (
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <div>

              <h2 className="
                text-4xl
                font-extrabold
                bg-gradient-to-r
                from-slate-900
                via-indigo-700
                to-purple-600
                bg-clip-text
                text-transparent
              ">
                Repositories
              </h2>

              <p className="text-slate-500 mt-1">
                {repos.length} repositories found
              </p>

            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                px-5 py-3
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                font-medium
                text-slate-700
                focus:outline-none
                focus:ring-4
                focus:ring-indigo-100
              "
            >
              <option value="stars">⭐ Top Stars</option>
              <option value="name">🔤 Name</option>
              <option value="updated">🕒 Recently Updated</option>
            </select>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {sortedRepos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
              />
            ))}

          </div>
        </>
      )}
    </div>
  );
}