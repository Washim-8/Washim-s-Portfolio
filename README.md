<div align="center">

<!-- Typing SVG -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=6366F1&center=true&vCenter=true&width=700&lines=Washim+Shaikh+%E2%80%94+Portfolio;Aspiring+Software+Engineer;AI+%2F+ML+%7C+Full+Stack+%7C+Data+Science;CSE+%2726+%7C+Building+Real-World+Systems)](https://github.com/Washim-8)

<br/>

<!-- Badges -->
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0DB2?style=for-the-badge&logo=framer&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

<br/>

![GitHub stars](https://img.shields.io/github/stars/Washim-8/Portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/Washim-8/Portfolio?style=social)
![Profile views](https://komarev.com/ghpvc/?username=Washim-8&color=6366F1&style=flat-square&label=Profile+Views)

</div>

---

## 📌 Overview

This is my **personal developer portfolio** — a full-stack web application built to showcase my projects, skills, internships, certifications, and more. It's designed to give recruiters, collaborators, and curious developers a real picture of what I've been building over the past few years.

Rather than a static HTML page, this is a fully dynamic Next.js app with a working AI chatbot, contact form with email delivery, dark/light mode, smooth animations, and a structured data layer that makes updating everything effortless.

> **Live at →** _[Coming soon / Add your deployment URL here]_

---

## ✨ Features

- 🎨 **Premium UI/UX** — Dark & light mode, glassmorphism cards, smooth Framer Motion animations
- 🤖 **AI Resume Chatbot** — "Washim AI" answers questions about my experience, skills, and projects in real time
- 🌌 **Animated Skills Orbit** — Canvas-free SVG orbit that rotates 20 technologies continuously via direct DOM mutation (no re-render stalls)
- 📬 **Working Contact Form** — React Hook Form + Zod validation + Nodemailer email delivery
- 🗂️ **Project Explorer** — Filter 20 real projects by category (AI/ML, Web Dev, Data Science) with modal detail view
- 🏆 **Certifications & Achievements** — Cleanly presented credentials and internship timeline
- 📱 **Fully Responsive** — Works across all screen sizes without layout breaks
- ⚡ **Typewriter Hero** — Animated role titles using a lightweight custom hook
- 🔝 **Scroll-to-Top** — Smooth floating button with visibility trigger
- 🛡️ **Admin Panel** — Protected route for managing submitted messages

---

## 🛠 Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16.2 (App Router) |
| **Language** | TypeScript 5.x |
| **Frontend** | React 19, Tailwind CSS 4, Framer Motion 12 |
| **UI Components** | Lucide React, shadcn/ui patterns, custom HoverCard |
| **Forms** | React Hook Form, Zod, @hookform/resolvers |
| **Database** | MongoDB via Mongoose (contact submissions) |
| **Auth** | NextAuth.js 4 (admin panel) |
| **Email** | Nodemailer |
| **HTTP Client** | Axios |
| **Themes** | next-themes (dark/light with system preference) |
| **Animation** | Framer Motion + rAF-based SVG orbit (ref-driven) |

---

## 📂 Project Structure

```
washim-portfolio/
│
├── app/                    # Next.js App Router
│   ├── page.tsx            # Main portfolio page (all sections assembled)
│   ├── layout.tsx          # Root layout, fonts, theme provider, metadata
│   ├── globals.css         # Design tokens, custom utilities, animations
│   ├── admin/              # Protected admin dashboard
│   └── api/                # API routes (contact form, chatbot)
│
├── components/
│   ├── sections/           # About, Projects, Certifications, Contact, etc.
│   ├── Navbar.tsx          # Responsive navigation with active-link tracking
│   ├── SkillsOrbit.tsx     # SVG orbit animation (ref-based, cursor-safe)
│   ├── ResumeChatbot.tsx   # AI chatbot widget (floating, collapsible)
│   ├── ProjectCard.tsx     # Project card with category badge + modal trigger
│   ├── ProjectModal.tsx    # Full-detail project modal overlay
│   ├── ContactForm.tsx     # Validated contact form with email delivery
│   ├── TypewriterTitle.tsx # Role typewriter animation hook
│   ├── HoverCard.tsx       # Reusable glassmorphism card with glow effect
│   ├── ThemeToggle.tsx     # Dark/light mode switcher
│   └── Footer.tsx          # Links, copyright, social icons
│
├── lib/
│   └── data.ts             # Single source of truth — all profile data
│
├── models/                 # Mongoose schemas (contact messages)
└── public/                 # Static assets (logo, favicon, OG image)
```

---

## ⚙️ How It Works

**1. Data Layer (`lib/data.ts`)**
All content — personal info, 20 projects, 6 internships, skills, certifications, education — lives in a single typed TypeScript file. Updating the portfolio means editing one file, no CMS needed.

**2. Page Assembly (`app/page.tsx`)**
The main page imports section components and renders them in order. Each section is wrapped in a `SectionWrapper` that handles scroll-triggered entrance animations.

**3. Skills Orbit**
14 technology nodes orbit a central badge in 3 rings using a `requestAnimationFrame` loop that mutates SVG `cx`/`cy` attributes directly via React refs — completely bypassing React's rendering cycle so mouse events can't interrupt the animation.

**4. AI Chatbot**
The floating "Washim AI" widget sends user questions to an API route, which responds with contextual answers about my experience, skills, and projects.

**5. Contact Form**
Submissions are validated client-side with Zod, sent to an API route that stores them in MongoDB and triggers a Nodemailer email notification simultaneously.

**6. Admin Panel**
A NextAuth-protected route at `/admin` lets me view all contact form submissions.

---

## ▶️ Installation & Setup

### Prerequisites
- Node.js 18+
- A MongoDB connection string (Atlas free tier works fine)
- An email account for Nodemailer (Gmail app password recommended)

### Clone & Install

```bash
git clone https://github.com/Washim-8/Portfolio.git
cd Portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=washimshaikh33@gmail.com

# NextAuth
NEXTAUTH_SECRET=your_random_secret_string
NEXTAUTH_URL=http://localhost:3000

# Admin credentials
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

---

## 📸 Screenshots / Demo

> 💡 **To add screenshots:** Place images in `/public/screenshots/` and embed them below.

```
| Hero Section | Projects Grid | Skills Orbit |
|---|---|---|
| ![hero](/public/screenshots/hero.png) | ![projects](/public/screenshots/projects.png) | ![skills](/public/screenshots/skills.png) |
```

**Demo GIF Ideas:**
- 🎥 Screen-record scrolling through the full page (hero → skills → projects → contact)
- 🎥 The skills orbit spinning while hovering individual nodes
- 🎥 The AI chatbot answering "What are Washim's top projects?"
- 🎥 Dark ↔ Light mode toggle transition
- Use [ScreenToGif](https://www.screentogif.com/) or [LICEcap](https://www.cockos.com/licecap/) to record

---

## 🚀 Future Improvements

- [ ] **Deploy to Vercel** with a custom domain
- [ ] **Blog section** — write technical articles directly in the portfolio
- [ ] **GitHub stats integration** — live commit graphs and language breakdown
- [ ] **Project live demo embeds** — iframe or link preview cards
- [ ] **Multilingual support** — Hindi/English toggle
- [ ] **Visitor analytics** — lightweight self-hosted stats (Umami / Plausible)
- [ ] **Resume PDF download** — one-click download from the hero section

---

## 📊 GitHub Stats

<div align="center">

[![Washim's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Washim-8&show_icons=true&theme=tokyonight&hide_border=true&count_private=true)](https://github.com/Washim-8)

[![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Washim-8&layout=compact&theme=tokyonight&hide_border=true)](https://github.com/Washim-8)

[![GitHub Streak](https://streak-stats.demolab.com/?user=Washim-8&theme=tokyonight&hide_border=true)](https://github.com/Washim-8)

</div>

---

## 👨‍💻 About the Developer

Hey, I'm **Washim Shaikh** — a CSE final-year student (batch of 2026) who genuinely enjoys building things that work in the real world, not just pass tests.

I started with Python and basic web dev, but over the past couple of years I've worked on everything from farmer auction platforms and fraud detection systems to AI-powered attendance trackers and deep learning models. Six internships later — in AI, ML, Full Stack, and AWS — I've had the chance to go from "learning the concept" to "shipping the thing."

My sweet spot is the intersection of **machine learning and practical engineering** — building systems that don't just predict well in a notebook, but actually run, make sense to users, and solve something meaningful.

When I'm not coding, I'm probably reading about new AI architectures, debugging something that *should* work, or thinking about the next project.

**What I work with:**
`Python` · `JavaScript` · `TypeScript` · `PHP` · `React` · `Next.js` · `Flask` · `FastAPI` · `Laravel` · `TensorFlow` · `PyTorch` · `Scikit-learn` · `OpenCV` · `MySQL` · `MongoDB` · `Docker` · `AWS`

---

## 📬 Contact

I'm always open to good conversations — whether it's about a project, an opportunity, or just a technical problem you're stuck on.

| | |
|---|---|
| 📧 **Email** | [washimshaikh33@gmail.com](mailto:washimshaikh33@gmail.com) |
| 📞 **Phone** | +91 8884958185 |
| 💼 **LinkedIn** | [linkedin.com/in/washim-shaikh](https://www.linkedin.com/in/washim-shaikh-349868281/) |
| 🐙 **GitHub** | [github.com/Washim-8](https://github.com/Washim-8) |

> **Feel free to connect for collaborations, internships, or just to say hi.** I respond to every message.

---

<div align="center">

**⭐ If this portfolio inspired you, drop a star — it genuinely helps!**

Made with focus, caffeine, and a lot of `console.log()` — by [Washim Shaikh](https://github.com/Washim-8)

</div>
