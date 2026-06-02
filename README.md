# 🚀 GitHub Repo Explorer

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=4F46E5&center=true&vCenter=true&width=600&lines=Search+GitHub+Users;Explore+Repositories+Instantly;Modern+Next.js+Dashboard+App" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styled-blue?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/API-GitHub-lightgrey?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---

## 📌 Project Overview

GitHub Repo Explorer is a **modern web app built with Next.js** that allows users to search any GitHub profile, view user details, and explore repositories in a clean dashboard UI.

This project was built as part of a frontend/full-stack assignment to demonstrate API integration, UI design, and state management skills.

---

## 🌐 Live Demo

👉 **Frontend (Vercel):**  
https://your-vercel-link.vercel.app

👉 **GitHub Repository:**  
[https://github.com/shambhavi614/github-repo-explorer](https://github.com/shambhavi614/github-repo-explorer)

---

## ⚙️ Tech Stack

| Tech | Purpose |
|------|--------|
| Next.js | Full-stack React framework |
| React.js | UI development |
| Tailwind CSS | Modern styling |
| Axios | API requests |
| GitHub API | Data source |

---

## ✨ Features

- 🔍 Search any GitHub user instantly  
- 👤 View profile (avatar, bio, followers, repos)  
- 📦 Repository listing with sorting  
- ⭐ Sort by stars, name, or update time  
- 🕒 Recent search history (localStorage)  
- ⚡ Fast API integration  
- 🎨 Clean responsive UI  

---

## 📡 API Documentation

### 1. Get GitHub User Data

**Endpoint:**
GET /api/github/[username]


**Example:**

/api/github/octocat


**Response:**
```json
{
  "user": {
    "login": "octocat",
    "avatar_url": "...",
    "followers": 120,
    "following": 10,
    "public_repos": 5
  },
  "repos": [
    {
      "id": 1,
      "name": "repo-name",
      "stargazers_count": 50,
      "language": "JavaScript",
      "updated_at": "2025-01-01"
    }
  ]
}
📁 Project Structure
app/
 ├── page.tsx
 ├── api/github/[username]

components/
 ├── SearchBar.tsx
 ├── UserCard.tsx
 ├── RepoCard.tsx
▶️ How to Run Locally
git clone https://github.com/shambhavi614/github-repo-explorer.git
cd github-repo-explorer
npm install
npm run dev

Then open:

http://localhost:3000
🚀 Future Improvements
🌙 Dark mode support
📊 GitHub analytics dashboard
🔐 OAuth login integration
⚡ Infinite scroll for repositories
📱 Mobile UI improvements
🎯 Better caching for API calls
👩‍💻 Author

Shambhavi Jha
Final Year CSE Student | Aspiring AI Engineer

⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Improve it further
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4F46E5,100:9333EA&height=120&section=footer"/> </p> ```
