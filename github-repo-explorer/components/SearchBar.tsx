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
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* SEARCH CARD */}
      <div className="
        bg-gradient-to-br from-white to-slate-50
        border border-slate-200
        shadow-xl
        rounded-3xl
        p-6 md:p-8
      ">

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="🔍 Search GitHub username..."
            className="
              flex-1
              px-5 py-4
              rounded-2xl
              border border-slate-300
              bg-white
              text-gray-700
              text-lg
              shadow-sm
              focus:outline-none
              focus:ring-4 focus:ring-indigo-200
              transition
            "
          />

          <button
            onClick={handleSearch}
            className="
              px-8 py-4
              rounded-2xl
              font-semibold
              text-white
              bg-gradient-to-r from-indigo-600 to-purple-600
              shadow-lg
              hover:scale-[1.03]
              hover:shadow-2xl
              transition
            "
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </div>

        {/* RECENT SEARCHES */}
        {recentSearches.length > 0 && (
          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
              Recent searches
            </p>

            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => setUsername(item)}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-indigo-50
                    text-indigo-600
                    text-sm
                    border border-indigo-100
                    hover:bg-indigo-100
                    transition
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
          rounded-2xl
          p-4
          shadow-sm
        ">
          ❌ {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {!user && !loading && !error && (
        <div className="
          bg-white
          border border-slate-200
          rounded-3xl
          shadow-lg
          p-12
          text-center
        ">
          <div className="text-6xl mb-4">🚀</div>

          <h3 className="text-2xl font-bold text-slate-800">
            Explore GitHub Developers
          </h3>

          <p className="text-slate-500 mt-2">
            Search any username to discover profiles and repositories instantly
          </p>
        </div>
      )}

      {/* USER */}
      {user && <UserCard user={user} />}

      {/* REPOSITORIES */}
      {repos.length > 0 && (
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">

            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Repositories
              </h2>

              <p className="text-slate-500">
                {repos.length} repositories found
              </p>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                px-4 py-3
                rounded-xl
                border border-slate-300
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-2 focus:ring-indigo-200
              "
            >
              <option value="stars">⭐ Top Stars</option>
              <option value="name">🔤 Name</option>
              <option value="updated">🕒 Recently Updated</option>
            </select>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}

    </div>
  );
}