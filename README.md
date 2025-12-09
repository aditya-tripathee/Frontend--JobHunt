# JobHunt (Frontend)

A modern, responsive job-listing web application frontend built with **React**, **Tailwind CSS**, **shadcn/ui**, **Redux**, **Axios**, and **React Router DOM**.

---

## 🚀 Overview
JobHunt is a frontend interface for a job portal where users can browse and apply for jobs, while recruiters can post and manage listings. This README contains all frontend-related details: tech stack, features, folder structure, and setup instructions.

---

## ✨ Features
- Browse latest job listings with filters & pagination
- Full-text search with keyword suggestions
- Job details page with apply flow
- Login/Signup with protected routes
- Applicant dashboard: saved jobs, applied jobs, profile
- Recruiter dashboard: post/edit job, view applications
- Responsive UI for all screen sizes
- Error handling & alerts with smooth UX
- Accessible components (keyboard + ARIA support)

---

## 🧰 Tech Stack
- **JavaScript (ES6+)**
- **React**
- **Tailwind CSS**
- **shadcn/ui** (UI components)
- **React Router DOM** (routing)
- **Redux Toolkit** (state management)
- **Axios** (API communication)
- **React Icons**
- **Vite** (bundler & dev server)

---

## 📁 Project Structure
frontend/
├─ public/
├─ src/
│ ├─ api/
│ ├─ app/
│ ├─ assets/
│ ├─ components/
│ ├─ features/
│ ├─ pages/
│ ├─ routes/
│ ├─ utils/
│ └─ styles/
├─ .env
├─ tailwind.config.js
└─ package.json

## ⚙️ Installation
```bash
git clone https://github.com/<your-org>/Backend-JobHunt.git
cd Backend-JobHunt/frontend
npm install
npm run dev
