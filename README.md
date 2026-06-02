# 🚀 GitHub Repo Explorer

A modern GitHub repository explorer built with Next.js and Tailwind CSS. This application allows users to search for any GitHub profile, view user information, and explore repositories with sorting options. The project demonstrates API integration, responsive UI design, state management, and full-stack capabilities using Next.js API routes.

---
<img width="1415" height="1534" alt="image" src="https://github.com/user-attachments/assets/c78076d3-e58e-4d9f-a784-6fc617acce2f" />
<img width="1465" height="1830" alt="image" src="https://github.com/user-attachments/assets/a3545c11-3635-4ff7-8b75-fa2e305a701b" />

---
## 🌐 Live Demo

🔗 Live Application: https://YOUR_VERCEL_LINK.vercel.app

💻 GitHub Repository: https://github.com/shambhavi614/github-repo-explorer

---

## ✨ Features

- 🔍 Search GitHub users by username
- 👤 View profile information
  - Avatar
  - Name
  - Username
  - Bio
  - Followers
  - Following
  - Public Repositories
  - Location
  - Company
- 📦 Explore repositories
- ⭐ Sort repositories by stars
- 🔤 Sort repositories alphabetically
- 🕒 Sort repositories by last updated date
- 💾 Recent search history using Local Storage
- 📱 Responsive design
- 🎨 Modern UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes

### Libraries
- Axios

### External APIs
- GitHub REST API

### Why These Technologies?

- **Next.js**: Full-stack framework with built-in API routes.
- **React**: Component-based UI development.
- **TypeScript**: Better type safety and maintainability.
- **Tailwind CSS**: Fast and modern UI styling.
- **Axios**: Simplified API requests.
- **GitHub API**: Real-time GitHub data.

---

## 📡 API Documentation

### Get GitHub User and Repositories

**Method**

```http
GET
```

**Endpoint**

```http
/api/github/[username]
```

**Example**

```http
/api/github/octocat
```

### Response

```json
{
  "user": {
    "login": "octocat",
    "name": "The Octocat",
    "avatar_url": "https://...",
    "followers": 100,
    "following": 10,
    "public_repos": 20,
    "bio": "GitHub mascot"
  },
  "repos": [
    {
      "id": 1,
      "name": "hello-world",
      "description": "My first repository",
      "stargazers_count": 50,
      "language": "JavaScript",
      "updated_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

---

## 📁 Project Structure

```text
app/
│
├── api/
│   └── github/
│       └── [username]/
│           └── route.ts
│
├── page.tsx
│
components/
│
├── SearchBar.tsx
├── UserCard.tsx
├── RepoCard.tsx
│
public/
│
README.md
```

---

## ▶️ How to Run Locally

### Clone the Repository

```bash
git clone https://github.com/shambhavi614/github-repo-explorer.git
```

### Navigate to Project Directory

```bash
cd github-repo-explorer
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:3000
```

---

## 🚀 Next Steps

Future improvements that can be added:

- 🌙 Dark mode support
- 🔐 GitHub OAuth authentication
- 📊 Repository analytics dashboard
- ⚡ Infinite scrolling for repositories
- 📱 Enhanced mobile experience
- 🏷️ Repository filtering by language
- 📈 Charts and visual statistics
- 🚀 Better caching and performance optimizations

---

## 🧪 Testing

The application has been tested for:

- User search functionality
- API integration
- Repository sorting
- Responsive layout
- Error handling
- Empty states

---

## 👩‍💻 Author

**Shambhavi Jha**

Final Year Computer Science Engineering Student

Aspiring AI Engineer

---

## ⭐ Support

If you found this project useful:

- Star the repository ⭐
- Fork the project 🍴
- Share feedback 🚀

---

Built with ❤️ using Next.js and Tailwind CSS.
