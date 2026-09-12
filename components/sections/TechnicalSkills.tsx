"use client";

import React, { useState, useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightGlassCard from "@/components/ui/LightGlassCard";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiFramer,
  SiFlask,
  SiFastapi,
  SiLaravel,
  SiApache,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiChartdotjs,
  SiDocker,
  SiGithub,
  SiJupyter,
  SiComposer,
  SiNpm,
  SiStreamlit,
  SiAxios,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { FaJava, FaBrain, FaRobot, FaCss3Alt } from "react-icons/fa6";
import {
  Search,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Database,
  Wrench,
  Globe2,
  Shield,
  FileText,
  FileSpreadsheet,
  Film,
  Network,
  Terminal,
  Eye,
  BarChart3,
  Binary,
  Lock,
  Braces,
  MessageSquareCode,
  X,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { IconType } from "react-icons";

export interface TechSkill {
  name: string;
  category:
    | "Programming Languages"
    | "Web Development"
    | "Backend Frameworks"
    | "Databases & Storage"
    | "AI / ML"
    | "Specialized AI"
    | "Computer Vision"
    | "Data Processing"
    | "Data Visualization"
    | "NLP"
    | "Auth & Security"
    | "Media Processing"
    | "APIs & Architecture"
    | "Tools & Platforms"
    | "Emerging Tech"
    | "Other";
  icon: IconType | React.ElementType;
  iconColor: string;
  bgLight: string;
  tag: string;
  featured?: boolean;
}

export const allProjectSkills: TechSkill[] = [
  // ── 💻 1. PROGRAMMING LANGUAGES ──────────────────────────────────
  { name: "Python (3.x / 3.10+ / 3.12)", category: "Programming Languages", icon: SiPython, iconColor: "#3776AB", bgLight: "rgba(55, 118, 171, 0.14)", tag: "Core Language", featured: true },
  { name: "JavaScript (ES6+)", category: "Programming Languages", icon: SiJavascript, iconColor: "#EAB308", bgLight: "rgba(234, 179, 8, 0.14)", tag: "Web & Scripting", featured: true },
  { name: "TypeScript", category: "Programming Languages", icon: SiTypescript, iconColor: "#3178C6", bgLight: "rgba(49, 120, 198, 0.14)", tag: "Typed JavaScript", featured: true },
  { name: "PHP (Core PHP / PHP 8.x)", category: "Programming Languages", icon: SiPhp, iconColor: "#777BB4", bgLight: "rgba(119, 123, 180, 0.14)", tag: "Backend Scripting" },
  { name: "HTML5", category: "Programming Languages", icon: SiHtml5, iconColor: "#E34F26", bgLight: "rgba(227, 79, 38, 0.14)", tag: "Semantic Markup" },
  { name: "CSS3", category: "Programming Languages", icon: FaCss3Alt, iconColor: "#1572B6", bgLight: "rgba(21, 114, 182, 0.14)", tag: "Modern Styling" },
  { name: "Java", category: "Programming Languages", icon: FaJava, iconColor: "#ED8B00", bgLight: "rgba(237, 139, 0, 0.14)", tag: "OOP & Systems" },
  { name: "C", category: "Programming Languages", icon: SiC, iconColor: "#A8B9CC", bgLight: "rgba(168, 185, 204, 0.15)", tag: "Low-level Systems" },
  { name: "C++", category: "Programming Languages", icon: SiCplusplus, iconColor: "#00599C", bgLight: "rgba(0, 89, 156, 0.14)", tag: "Algorithms & DS" },

  // ── 🌐 2. WEB DEVELOPMENT ───────────────────────────────────────
  { name: "React (Vite)", category: "Web Development", icon: SiReact, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "SPA Architecture", featured: true },
  { name: "Next.js 16.2", category: "Web Development", icon: SiNextdotjs, iconColor: "#000000", bgLight: "rgba(0, 0, 0, 0.10)", tag: "App Router / SSR", featured: true },
  { name: "Tailwind CSS", category: "Web Development", icon: SiTailwindcss, iconColor: "#06B6D4", bgLight: "rgba(6, 182, 212, 0.14)", tag: "Utility Styling", featured: true },
  { name: "Bootstrap 4 / 5", category: "Web Development", icon: SiBootstrap, iconColor: "#7952B3", bgLight: "rgba(121, 82, 179, 0.14)", tag: "Grid & UI" },
  { name: "jQuery", category: "Web Development", icon: SiJquery, iconColor: "#0769AD", bgLight: "rgba(7, 105, 173, 0.14)", tag: "DOM & Ajax" },
  { name: "Vanilla JavaScript", category: "Web Development", icon: SiJavascript, iconColor: "#EAB308", bgLight: "rgba(234, 179, 8, 0.14)", tag: "Core DOM" },
  { name: "Blade Templating Engine", category: "Web Development", icon: SiLaravel, iconColor: "#FF2D20", bgLight: "rgba(255, 45, 32, 0.14)", tag: "Laravel Views" },
  { name: "Jinja2", category: "Web Development", icon: Code2, iconColor: "#B41717", bgLight: "rgba(180, 23, 23, 0.14)", tag: "Flask Templates" },
  { name: "shadcn/ui", category: "Web Development", icon: Layers, iconColor: "#000000", bgLight: "rgba(0, 0, 0, 0.10)", tag: "Accessible UI" },
  { name: "Framer Motion", category: "Web Development", icon: SiFramer, iconColor: "#0055FF", bgLight: "rgba(0, 85, 255, 0.14)", tag: "Motion Engine" },
  { name: "Lucide React", category: "Web Development", icon: Sparkles, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Vector Icons" },
  { name: "Font Awesome 6", category: "Web Development", icon: Code2, iconColor: "#528DD7", bgLight: "rgba(82, 141, 215, 0.14)", tag: "Icon Suite" },
  { name: "Bootstrap Icons", category: "Web Development", icon: SiBootstrap, iconColor: "#7952B3", bgLight: "rgba(121, 82, 179, 0.14)", tag: "UI Glyphs" },
  { name: "Google Fonts", category: "Web Development", icon: Globe2, iconColor: "#4285F4", bgLight: "rgba(66, 133, 244, 0.14)", tag: "Typography" },
  { name: "React Hook Form", category: "Web Development", icon: Code2, iconColor: "#EC5990", bgLight: "rgba(236, 89, 144, 0.14)", tag: "Form State" },
  { name: "Zod", category: "Web Development", icon: Shield, iconColor: "#3E67B1", bgLight: "rgba(62, 103, 177, 0.14)", tag: "Schema Validation" },
  { name: "next-themes", category: "Web Development", icon: Sparkles, iconColor: "#8B5CF6", bgLight: "rgba(139, 92, 246, 0.14)", tag: "Theme Engine" },

  // ── ⚙️ 3. BACKEND FRAMEWORKS ─────────────────────────────────────
  { name: "Flask (3.0+)", category: "Backend Frameworks", icon: SiFlask, iconColor: "#000000", bgLight: "rgba(0, 0, 0, 0.10)", tag: "Microframework", featured: true },
  { name: "FastAPI (Async)", category: "Backend Frameworks", icon: SiFastapi, iconColor: "#059669", bgLight: "rgba(5, 150, 105, 0.14)", tag: "Async Model APIs", featured: true },
  { name: "Laravel 10.x", category: "Backend Frameworks", icon: SiLaravel, iconColor: "#FF2D20", bgLight: "rgba(255, 45, 32, 0.14)", tag: "PHP Enterprise" },
  { name: "Uvicorn (ASGI Server)", category: "Backend Frameworks", icon: Cpu, iconColor: "#059669", bgLight: "rgba(5, 150, 105, 0.14)", tag: "ASGI Gateway" },
  { name: "Waitress (WSGI Server)", category: "Backend Frameworks", icon: Globe2, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "WSGI Server" },
  { name: "Apache (mod_rewrite)", category: "Backend Frameworks", icon: SiApache, iconColor: "#D22128", bgLight: "rgba(210, 33, 40, 0.14)", tag: "Web Server" },

  // ── 🗄️ 4. DATABASES & STORAGE ───────────────────────────────────
  { name: "MySQL", category: "Databases & Storage", icon: SiMysql, iconColor: "#4479A1", bgLight: "rgba(68, 121, 161, 0.14)", tag: "Relational DB", featured: true },
  { name: "SQLite / SQLite3", category: "Databases & Storage", icon: SiSqlite, iconColor: "#003B57", bgLight: "rgba(0, 59, 87, 0.14)", tag: "Embedded DB", featured: true },
  { name: "MongoDB", category: "Databases & Storage", icon: SiMongodb, iconColor: "#47A248", bgLight: "rgba(71, 162, 72, 0.14)", tag: "Document NoSQL", featured: true },
  { name: "Mongoose (ODM)", category: "Databases & Storage", icon: SiMongodb, iconColor: "#47A248", bgLight: "rgba(71, 162, 72, 0.14)", tag: "Object Modeling" },
  { name: "Eloquent ORM", category: "Databases & Storage", icon: Database, iconColor: "#FF2D20", bgLight: "rgba(255, 45, 32, 0.14)", tag: "ActiveRecord ORM" },
  { name: "Flask-SQLAlchemy", category: "Databases & Storage", icon: Database, iconColor: "#003B57", bgLight: "rgba(0, 59, 87, 0.14)", tag: "Python ORM" },
  { name: "JSON File System", category: "Databases & Storage", icon: FileText, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Flat-File DB" },
  { name: "Browser LocalStorage", category: "Databases & Storage", icon: Database, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Client Persistence" },
  { name: "PDO (Prepared Statements)", category: "Databases & Storage", icon: Shield, iconColor: "#777BB4", bgLight: "rgba(119, 123, 180, 0.14)", tag: "Secure SQL" },

  // ── 🧠 5. AI / ML ───────────────────────────────────────────────
  { name: "TensorFlow (2.x)", category: "AI / ML", icon: SiTensorflow, iconColor: "#FF6F00", bgLight: "rgba(255, 111, 0, 0.14)", tag: "Deep Learning", featured: true },
  { name: "Keras", category: "AI / ML", icon: SiKeras, iconColor: "#D00000", bgLight: "rgba(208, 0, 0, 0.14)", tag: "Neural Networks" },
  { name: "PyTorch (2.0+)", category: "AI / ML", icon: SiPytorch, iconColor: "#EE4C2C", bgLight: "rgba(238, 76, 44, 0.14)", tag: "Deep Learning", featured: true },
  { name: "Scikit-learn", category: "AI / ML", icon: SiScikitlearn, iconColor: "#F7931E", bgLight: "rgba(247, 147, 30, 0.14)", tag: "Machine Learning", featured: true },
  { name: "XGBoost", category: "AI / ML", icon: Cpu, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Gradient Boost" },
  { name: "Imbalanced-learn (SMOTE)", category: "AI / ML", icon: Layers, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Resampling" },
  { name: "SHAP", category: "AI / ML", icon: Cpu, iconColor: "#8B5CF6", bgLight: "rgba(139, 92, 246, 0.14)", tag: "Explainable AI" },
  { name: "YOLOv8", category: "AI / ML", icon: FaRobot, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Object Detection" },
  { name: "YOLOv11", category: "AI / ML", icon: FaRobot, iconColor: "#06B6D4", bgLight: "rgba(6, 182, 212, 0.14)", tag: "SOTA Vision", featured: true },
  { name: "SAHI", category: "AI / ML", icon: FaRobot, iconColor: "#10AB7C", bgLight: "rgba(16, 171, 124, 0.14)", tag: "Sliced Inference" },
  { name: "Wav2Lip (GAN Model)", category: "AI / ML", icon: FaRobot, iconColor: "#EC4899", bgLight: "rgba(236, 72, 153, 0.14)", tag: "Lip Sync GAN" },
  { name: "rembg (U²-Net)", category: "AI / ML", icon: FaRobot, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Background AI" },
  { name: "joblib", category: "AI / ML", icon: Wrench, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Model Dump" },
  { name: "tqdm", category: "AI / ML", icon: Wrench, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Training Loops" },

  // ── 🔬 6. SPECIALIZED AI ─────────────────────────────────────────
  { name: "Vision Transformer (ViT)", category: "Specialized AI", icon: FaBrain, iconColor: "#6366F1", bgLight: "rgba(99, 102, 241, 0.14)", tag: "Self-Attention", featured: true },
  { name: "CNN (Convolutional Neural Network)", category: "Specialized AI", icon: FaBrain, iconColor: "#8B5CF6", bgLight: "rgba(139, 92, 246, 0.14)", tag: "Conv Layers" },
  { name: "Object Detection Pipelines", category: "Specialized AI", icon: FaRobot, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Detection Flows" },
  { name: "Neural Network Architecture Design", category: "Specialized AI", icon: FaBrain, iconColor: "#EC4899", bgLight: "rgba(236, 72, 153, 0.14)", tag: "Layer Topology" },
  { name: "Feature Engineering (Vision Models)", category: "Specialized AI", icon: Cpu, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Feature Vectors" },
  { name: "Predictive Modeling", category: "Specialized AI", icon: Cpu, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Supervised AI" },
  { name: "Regression Modeling", category: "Specialized AI", icon: Cpu, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Valuation Estimator" },

  // ── 👁️ 7. COMPUTER VISION ───────────────────────────────────────
  { name: "OpenCV", category: "Computer Vision", icon: SiOpencv, iconColor: "#5C3EE8", bgLight: "rgba(92, 62, 232, 0.14)", tag: "Image Processing", featured: true },
  { name: "dlib", category: "Computer Vision", icon: Eye, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Landmark Mesh" },
  { name: "face_recognition", category: "Computer Vision", icon: Eye, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Biometric Auth" },
  { name: "torchvision", category: "Computer Vision", icon: SiPytorch, iconColor: "#EE4C2C", bgLight: "rgba(238, 76, 44, 0.14)", tag: "PyTorch Vision" },
  { name: "Pillow (PIL)", category: "Computer Vision", icon: Layers, iconColor: "#3776AB", bgLight: "rgba(55, 118, 171, 0.14)", tag: "Image Engine" },
  { name: "imutils", category: "Computer Vision", icon: Wrench, iconColor: "#06B6D4", bgLight: "rgba(6, 182, 212, 0.14)", tag: "CV Utilities" },

  // ── 🔢 8. DATA PROCESSING ────────────────────────────────────────
  { name: "NumPy (1.24+)", category: "Data Processing", icon: SiNumpy, iconColor: "#013243", bgLight: "rgba(1, 50, 67, 0.14)", tag: "Vector Arrays", featured: true },
  { name: "Pandas", category: "Data Processing", icon: SiPandas, iconColor: "#150458", bgLight: "rgba(21, 4, 88, 0.14)", tag: "DataFrames", featured: true },

  // ── 📈 9. DATA VISUALIZATION ─────────────────────────────────────
  { name: "Matplotlib (3.7+)", category: "Data Visualization", icon: BarChart3, iconColor: "#11557C", bgLight: "rgba(17, 85, 124, 0.14)", tag: "Scientific Plots" },
  { name: "Seaborn", category: "Data Visualization", icon: BarChart3, iconColor: "#4C72B0", bgLight: "rgba(76, 114, 176, 0.14)", tag: "Statistical Viz" },
  { name: "Plotly", category: "Data Visualization", icon: SiPlotly, iconColor: "#3F4F75", bgLight: "rgba(63, 79, 117, 0.14)", tag: "Interactive Charts" },
  { name: "Chart.js (4.4)", category: "Data Visualization", icon: SiChartdotjs, iconColor: "#FF6384", bgLight: "rgba(255, 99, 132, 0.14)", tag: "Dynamic Canvas" },

  // ── 💬 10. NLP ───────────────────────────────────────────────────
  { name: "Stanza (Hindi / Kannada NLP)", category: "NLP", icon: MessageSquareCode, iconColor: "#8B5CF6", bgLight: "rgba(139, 92, 246, 0.14)", tag: "Indic Pipelines" },
  { name: "Text Classification", category: "NLP", icon: FaBrain, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Sentiment & Topic" },
  { name: "Tokenization & Preprocessing", category: "NLP", icon: Binary, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "NLP Preprocessing" },

  // ── 🔐 11. AUTH & SECURITY ───────────────────────────────────────
  { name: "NextAuth.js 4", category: "Auth & Security", icon: Lock, iconColor: "#6366F1", bgLight: "rgba(99, 102, 241, 0.14)", tag: "OAuth & JWT Auth" },
  { name: "Flask-Login", category: "Auth & Security", icon: Shield, iconColor: "#000000", bgLight: "rgba(0, 0, 0, 0.10)", tag: "Session Guard" },
  { name: "Flask-Bcrypt", category: "Auth & Security", icon: Shield, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Crypto Hashing" },
  { name: "PDO Prepared Statements", category: "Auth & Security", icon: Shield, iconColor: "#777BB4", bgLight: "rgba(119, 123, 180, 0.14)", tag: "SQLi Defense" },
  { name: "Cybersecurity Fundamentals", category: "Auth & Security", icon: Shield, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "CySecK Certified" },

  // ── 🎬 12. MEDIA PROCESSING ──────────────────────────────────────
  { name: "FFmpeg", category: "Media Processing", icon: Film, iconColor: "#007808", bgLight: "rgba(0, 120, 8, 0.14)", tag: "Video Transcoding" },
  { name: "jsPDF", category: "Media Processing", icon: FileText, iconColor: "#E11D48", bgLight: "rgba(225, 29, 72, 0.14)", tag: "PDF Generator" },
  { name: "jsPDF-AutoTable", category: "Media Processing", icon: FileSpreadsheet, iconColor: "#E11D48", bgLight: "rgba(225, 29, 72, 0.14)", tag: "Table Exporter" },
  { name: "playsound", category: "Media Processing", icon: Film, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Audio Alert System" },
  { name: "threading", category: "Media Processing", icon: Cpu, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Multi-threading" },

  // ── 📡 13. APIS & ARCHITECTURE ───────────────────────────────────
  { name: "REST APIs", category: "APIs & Architecture", icon: Network, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "HTTP Microservices" },
  { name: "AJAX (XMLHttpRequest)", category: "APIs & Architecture", icon: Network, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Async Transfer" },
  { name: "Axios (HTTP Client)", category: "APIs & Architecture", icon: SiAxios, iconColor: "#5A29E4", bgLight: "rgba(90, 41, 228, 0.14)", tag: "HTTP Client" },
  { name: "WebWorker-based Inference", category: "APIs & Architecture", icon: Cpu, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Client Inference" },
  { name: "JSON", category: "APIs & Architecture", icon: Braces, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Data Exchange" },
  { name: "DOM Manipulation", category: "APIs & Architecture", icon: Code2, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Dynamic UI" },
  { name: "Responsive Web Design", category: "APIs & Architecture", icon: Globe2, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Mobile First" },

  // ── 🛠️ 14. TOOLS & PLATFORMS ────────────────────────────────────
  { name: "Git & GitHub", category: "Tools & Platforms", icon: SiGithub, iconColor: "#181717", bgLight: "rgba(24, 23, 23, 0.10)", tag: "Version Control", featured: true },
  { name: "Docker", category: "Tools & Platforms", icon: SiDocker, iconColor: "#2496ED", bgLight: "rgba(36, 150, 237, 0.14)", tag: "Containerization", featured: true },
  { name: "VS Code", category: "Tools & Platforms", icon: Terminal, iconColor: "#007ACC", bgLight: "rgba(0, 122, 204, 0.14)", tag: "IDE Environment" },
  { name: "Jupyter Notebook", category: "Tools & Platforms", icon: SiJupyter, iconColor: "#F37626", bgLight: "rgba(243, 118, 38, 0.14)", tag: "ML Prototyping" },
  { name: "Nodemailer", category: "Tools & Platforms", icon: Wrench, iconColor: "#22C55E", bgLight: "rgba(34, 197, 94, 0.14)", tag: "SMTP Mailer" },
  { name: "Composer", category: "Tools & Platforms", icon: SiComposer, iconColor: "#885630", bgLight: "rgba(136, 86, 48, 0.14)", tag: "PHP Packages" },
  { name: "npm", category: "Tools & Platforms", icon: SiNpm, iconColor: "#CB3837", bgLight: "rgba(203, 56, 55, 0.14)", tag: "Node Ecosystem" },
  { name: "XAMPP / WAMP", category: "Tools & Platforms", icon: Wrench, iconColor: "#FB7A24", bgLight: "rgba(251, 122, 36, 0.14)", tag: "Local Web Stack" },
  { name: "MS Excel", category: "Tools & Platforms", icon: FileSpreadsheet, iconColor: "#107C41", bgLight: "rgba(16, 124, 65, 0.14)", tag: "Spreadsheets" },
  { name: "MS Word", category: "Tools & Platforms", icon: FileText, iconColor: "#185ABD", bgLight: "rgba(24, 90, 189, 0.14)", tag: "Documentation" },
  { name: "MS PowerPoint", category: "Tools & Platforms", icon: FileText, iconColor: "#C43E1C", bgLight: "rgba(196, 62, 28, 0.14)", tag: "Presentations" },
  { name: "Streamlit", category: "Tools & Platforms", icon: SiStreamlit, iconColor: "#FF4B4B", bgLight: "rgba(255, 75, 75, 0.14)", tag: "ML Web Apps" },

  // ── 🚀 15. EMERGING TECH ────────────────────────────────────────
  { name: "Generative AI", category: "Emerging Tech", icon: FaBrain, iconColor: "#10AB7C", bgLight: "rgba(16, 171, 124, 0.14)", tag: "LLMs & GenAI", featured: true },
  { name: "Prompt Engineering", category: "Emerging Tech", icon: FaBrain, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Context Tuning", featured: true },
  { name: "WebWorker Inference", category: "Emerging Tech", icon: Cpu, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Browser ML" },

  // ── 📦 16. OTHER ────────────────────────────────────────────────
  { name: "Data Analysis", category: "Other", icon: BarChart3, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Analytics & EDA" },
  { name: "Data Preparation", category: "Other", icon: Database, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Data Pipeline" },
  { name: "Technical Writing", category: "Other", icon: FileText, iconColor: "#8B5CF6", bgLight: "rgba(139, 92, 246, 0.14)", tag: "Documentation" },
  { name: "Zustand", category: "Other", icon: Layers, iconColor: "#443E38", bgLight: "rgba(68, 62, 56, 0.14)", tag: "Global State" },
  { name: "React Query", category: "Other", icon: Network, iconColor: "#FF4154", bgLight: "rgba(255, 65, 84, 0.14)", tag: "Server State" },
  { name: "Owl Carousel 2", category: "Other", icon: Layers, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Carousel UI" },
  { name: "WOW.js", category: "Other", icon: Sparkles, iconColor: "#F59E0B", bgLight: "rgba(245, 158, 11, 0.14)", tag: "Scroll Reveal" },
  { name: "Animate.css", category: "Other", icon: Sparkles, iconColor: "#3B82F6", bgLight: "rgba(59, 130, 246, 0.14)", tag: "Keyframes" },
  { name: "Tempus Dominus", category: "Other", icon: Wrench, iconColor: "#10B981", bgLight: "rgba(16, 185, 129, 0.14)", tag: "Date Pickers" },
  { name: "Glassmorphism Design Systems", category: "Other", icon: Layers, iconColor: "#00BFE8", bgLight: "rgba(0, 191, 232, 0.14)", tag: "Tactile UI" },
];

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const categories = [
    { id: "All", label: "All Stack", count: allProjectSkills.length },
    { id: "Programming Languages", label: "Languages", count: 9 },
    { id: "AI / ML", label: "AI / ML", count: 14 },
    { id: "Specialized AI", label: "Specialized AI", count: 7 },
    { id: "Computer Vision", label: "Computer Vision", count: 6 },
    { id: "Web Development", label: "Web Dev", count: 17 },
    { id: "Backend Frameworks", label: "Backend", count: 6 },
    { id: "Databases & Storage", label: "Databases", count: 9 },
    { id: "Data Processing", label: "Data Processing", count: 2 },
    { id: "Data Visualization", label: "Data Viz", count: 4 },
    { id: "NLP", label: "NLP", count: 3 },
    { id: "Auth & Security", label: "Security & Auth", count: 5 },
    { id: "Media Processing", label: "Media Processing", count: 5 },
    { id: "APIs & Architecture", label: "APIs & Arch", count: 7 },
    { id: "Tools & Platforms", label: "Tools & Platforms", count: 12 },
    { id: "Emerging Tech", label: "Emerging Tech", count: 3 },
    { id: "Other", label: "Other", count: 10 },
  ];

  const filteredSkills = useMemo(() => {
    return allProjectSkills.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <div id="skills" className="mb-24 scroll-mt-24">
      {/* ─── SECTION HEADING ────────────────────────────────────────────── */}
      <SectionHeading
        badge="COMPREHENSIVE STACK"
        badgeVariant="cyan"
        title="Engineering Expertise &"
        highlightedWord="Technology Stack."
        description="Every verified language, framework, ML model, database, and platform deployed across my production projects and engineering workflows."
      />

      {/* ─── 4 MASTER DOMAIN PILLARS (HERO CARDS) ────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Pillar 1: AI / ML */}
        <LightGlassCard
          variant="elevated"
          className="p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group border-t-2 border-t-[#00BFE8]/40 hover:border-t-[#00BFE8] dark:bg-slate-900/80 dark:backdrop-blur-md dark:border dark:border-slate-800/80 hover:dark:border-cyan-500/40"
        >
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#00BFE8]/15 blur-2xl group-hover:bg-[#00BFE8]/30 transition-all pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#CCEFF9] dark:bg-slate-800/90 flex items-center justify-center text-[#00BFE8] shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/80 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                <FaBrain className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#00BFE8] dark:text-cyan-400 bg-[#CCEFF9]/90 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-[#00BFE8]/30 dark:border-cyan-500/20 shadow-sm">
                <Zap className="w-3 h-3 fill-[#00BFE8] dark:fill-cyan-400" /> AI/ML & Vision
              </span>
            </div>
            <h4 className="text-[15px] sm:text-base font-extrabold text-[#2A354F] dark:text-slate-100 mb-1.5 group-hover:text-[#00BFE8] transition-colors">
              AI, ML & Computer Vision
            </h4>
            <p className="text-xs text-[#5A6A85] dark:text-slate-400 leading-relaxed mb-4 font-medium">
              YOLOv8/v11, PyTorch, OpenCV, ViT, TensorFlow & Deep Learning inference.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-3.5 border-t border-black/5 dark:border-slate-800/80">
            {["YOLOv11", "PyTorch", "OpenCV", "FastAPI"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-white/90 dark:border-slate-700/60 text-[9.5px] sm:text-[10px] font-bold text-[#5A6A85] dark:text-slate-300 shadow-sm whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </LightGlassCard>

        {/* Pillar 2: Web & Cloud */}
        <LightGlassCard
          variant="elevated"
          className="p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group border-t-2 border-t-[#10B981]/40 hover:border-t-[#10B981] dark:bg-slate-900/80 dark:backdrop-blur-md dark:border dark:border-slate-800/80 hover:dark:border-emerald-500/40"
        >
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#10B981]/15 blur-2xl group-hover:bg-[#10B981]/30 transition-all pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#D1FAE5] dark:bg-slate-800/90 flex items-center justify-center text-[#10B981] shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/80 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#10B981] dark:text-emerald-400 bg-[#D1FAE5]/90 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-[#10B981]/30 dark:border-emerald-500/20 shadow-sm">
                <CheckCircle2 className="w-3 h-3" /> Full-Stack
              </span>
            </div>
            <h4 className="text-[15px] sm:text-base font-extrabold text-[#2A354F] dark:text-slate-100 mb-1.5 group-hover:text-[#10B981] transition-colors">
              Web & Cloud Systems
            </h4>
            <p className="text-xs text-[#5A6A85] dark:text-slate-400 leading-relaxed mb-4 font-medium">
              Next.js 16.2, React Vite, TypeScript, Tailwind, Flask, Laravel & Docker.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-3.5 border-t border-black/5 dark:border-slate-800/80">
            {["Next.js", "React", "Tailwind", "Flask"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-white/90 dark:border-slate-700/60 text-[9.5px] sm:text-[10px] font-bold text-[#5A6A85] dark:text-slate-300 shadow-sm whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </LightGlassCard>

        {/* Pillar 3: Data Science */}
        <LightGlassCard
          variant="elevated"
          className="p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group border-t-2 border-t-[#3B82F6]/40 hover:border-t-[#3B82F6] dark:bg-slate-900/80 dark:backdrop-blur-md dark:border dark:border-slate-800/80 hover:dark:border-blue-500/40"
        >
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#3B82F6]/15 blur-2xl group-hover:bg-[#3B82F6]/30 transition-all pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] dark:bg-slate-800/90 flex items-center justify-center text-[#3B82F6] shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/80 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#3B82F6] dark:text-blue-400 bg-[#E0F2FE]/90 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-[#3B82F6]/30 dark:border-blue-500/20 shadow-sm">
                <BarChart3 className="w-3 h-3" /> Data Science
              </span>
            </div>
            <h4 className="text-[15px] sm:text-base font-extrabold text-[#2A354F] dark:text-slate-100 mb-1.5 group-hover:text-[#3B82F6] transition-colors">
              Data Science & Analytics
            </h4>
            <p className="text-xs text-[#5A6A85] dark:text-slate-400 leading-relaxed mb-4 font-medium">
              Scikit-learn, XGBoost, SHAP, Pandas, NumPy, MySQL, MongoDB & SQLite.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-3.5 border-t border-black/5 dark:border-slate-800/80">
            {["Pandas", "XGBoost", "MySQL", "MongoDB"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-white/90 dark:border-slate-700/60 text-[9.5px] sm:text-[10px] font-bold text-[#5A6A85] dark:text-slate-300 shadow-sm whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </LightGlassCard>

        {/* Pillar 4: GenAI & Security */}
        <LightGlassCard
          variant="elevated"
          className="p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group border-t-2 border-t-[#8B5CF6]/40 hover:border-t-[#8B5CF6] dark:bg-slate-900/80 dark:backdrop-blur-md dark:border dark:border-slate-800/80 hover:dark:border-purple-500/40"
        >
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#8B5CF6]/15 blur-2xl group-hover:bg-[#8B5CF6]/30 transition-all pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] dark:bg-slate-800/90 flex items-center justify-center text-[#8B5CF6] shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/80 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#8B5CF6] dark:text-purple-400 bg-[#EDE9FE]/90 dark:bg-purple-500/10 px-3 py-1 rounded-full border border-[#8B5CF6]/30 dark:border-purple-500/20 shadow-sm">
                <Lock className="w-3 h-3" /> Certified
              </span>
            </div>
            <h4 className="text-[15px] sm:text-base font-extrabold text-[#2A354F] dark:text-slate-100 mb-1.5 group-hover:text-[#8B5CF6] transition-colors">
              Generative AI & Security
            </h4>
            <p className="text-xs text-[#5A6A85] dark:text-slate-400 leading-relaxed mb-4 font-medium">
              Prompt Engineering, LLM Agents, NextAuth, Bcrypt & CySecK certified.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-3.5 border-t border-black/5 dark:border-slate-800/80">
            {["GenAI", "CySecK", "NextAuth", "APIs"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/80 border border-white/90 dark:border-slate-700/60 text-[9.5px] sm:text-[10px] font-bold text-[#5A6A85] dark:text-slate-300 shadow-sm whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </LightGlassCard>
      </div>

      {/* ─── CONTROL HUB: SEARCH & CATEGORIES & SCROLL BUTTONS ───────────── */}
      <div className="p-4 sm:p-5 rounded-3xl bg-[#E6ECF5]/90 dark:bg-slate-900/80 backdrop-blur-md shadow-[-6px_-6px_16px_rgba(255,255,255,0.95),6px_8px_20px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/80 dark:border-slate-800/80 mb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search technologies (e.g. YOLO, Python, Next.js, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold bg-[#E6ECF5] dark:bg-slate-800/90 text-[#2A354F] dark:text-slate-100 placeholder-[#7E8BA0] dark:placeholder-slate-400 shadow-inner border border-white/80 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-[#00BFE8]/50 transition-all"
            />
            <Search className="w-4 h-4 text-[#7E8BA0] absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E8BA0] hover:text-[#2A354F] dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Counter and Scroll Navigation Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <span className="text-xs font-bold text-[#7E8BA0] dark:text-slate-300 bg-[#E6ECF5] dark:bg-slate-800/80 px-3 py-1.5 rounded-xl shadow-inner border border-white/60 dark:border-slate-700/60">
              <strong className="text-[#00BFE8] dark:text-cyan-300">{filteredSkills.length}</strong> Skills • 3 Rows
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#E6ECF5] dark:bg-slate-800/80 text-[#2A354F] dark:text-slate-100 hover:text-[#00BFE8] shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-slate-700/60 transition-all cursor-pointer font-bold"
                aria-label="Scroll left"
                title="Scroll Left"
              >
                ◀
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#E6ECF5] dark:bg-slate-800/80 text-[#2A354F] dark:text-slate-100 hover:text-[#00BFE8] shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(166,180,200,0.45)] hover:shadow-inner border border-white/80 dark:border-slate-700/60 transition-all cursor-pointer font-bold"
                aria-label="Scroll right"
                title="Scroll Right"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-black/5 dark:border-slate-800/80 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? "bg-[#00BFE8] text-white shadow-[-2px_-2px_6px_rgba(255,255,255,0.85),2px_3px_10px_rgba(0,191,232,0.45)] scale-[1.02]"
                    : "bg-[#E6ECF5] dark:bg-slate-800/80 text-[#5A6A85] dark:text-slate-300 shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.35)] dark:shadow-none border border-white/80 dark:border-slate-700/60 hover:text-[#2A354F] dark:hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-black/5 dark:bg-slate-700/50 text-[#7E8BA0] dark:text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 3 HORIZONTAL ROWS WITH HORIZONTAL SCROLL ────────────────────── */}
      {filteredSkills.length === 0 ? (
        <div className="text-center py-16 bg-[#E6ECF5] dark:bg-slate-900/80 rounded-3xl p-8 border border-white/80 dark:border-slate-800/80 shadow-inner">
          <p className="text-base font-extrabold text-[#2A354F] dark:text-slate-100 mb-2">
            No technical skills found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-[#5A6A85] dark:text-slate-400 mb-4">
            Try adjusting your search terms or selecting &ldquo;All Stack&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-full btn-coral text-xs font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="relative group/scroll">
          {/* Scrollable Container with Exactly 3 Horizontal Rows */}
          <div
            ref={scrollContainerRef}
            className="grid grid-rows-3 grid-flow-col auto-cols-[175px] sm:auto-cols-[190px] md:auto-cols-[205px] gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#00BFE8 transparent",
            }}
          >
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-3.5 sm:p-4 rounded-3xl bg-[#E6ECF5] dark:bg-slate-900/80 dark:backdrop-blur-md shadow-[-5px_-5px_12px_rgba(255,255,255,0.95),5px_6px_14px_rgba(166,180,200,0.45)] dark:shadow-none border border-white/95 dark:border-slate-800/80 hover:-translate-y-1.5 hover:shadow-[-3px_-3px_10px_rgba(255,255,255,0.95),3px_8px_20px_rgba(0,191,232,0.32)] hover:dark:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between items-center text-center cursor-default h-[156px] snap-start relative overflow-hidden shrink-0 select-none"
                >
                  {/* Subtle hover background radial glow tint */}
                  <div
                    className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.bgLight}, transparent 70%)`,
                    }}
                  />

                  {/* Top Row: Icon and Feature Badge */}
                  <div className="relative w-full flex items-center justify-center">
                    {skill.featured && (
                      <span className="absolute top-0 right-0 inline-flex items-center gap-1 text-[8px] font-black uppercase text-[#00BFE8] dark:text-cyan-300 bg-[#CCEFF9]/80 dark:bg-cyan-500/15 px-1.5 py-0.5 rounded-full border border-[#00BFE8]/30 dark:border-cyan-500/30">
                        <span className="w-1 h-1 rounded-full bg-[#00BFE8] dark:bg-cyan-400 animate-pulse" />
                        PRO
                      </span>
                    )}

                    {/* Tactile Brand Icon squircle */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(166,180,200,0.4)] dark:shadow-inner border border-white/90 dark:border-slate-700/60 dark:bg-slate-800/90 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shrink-0"
                      style={{ backgroundColor: skill.bgLight }}
                    >
                      <Icon
                        className="w-6 h-6 shrink-0 transition-transform"
                        style={{ color: skill.iconColor }}
                      />
                    </div>
                  </div>

                  {/* Skill Name & Subtitle Tag */}
                  <div className="w-full relative z-10">
                    <h5
                      className="text-xs sm:text-[13px] font-extrabold text-[#2A354F] dark:text-slate-100 leading-snug line-clamp-2 mb-1.5 group-hover:text-[#00BFE8] dark:group-hover:text-cyan-300 transition-colors"
                      title={skill.name}
                    >
                      {skill.name}
                    </h5>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold text-[#5A6A85] dark:text-cyan-300 bg-white/70 dark:bg-cyan-500/10 border border-white/90 dark:border-cyan-500/25 shadow-sm max-w-full truncate">
                      {skill.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Scroll Peek Overlay */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-14 bg-gradient-to-l from-[#E6ECF5] dark:from-[#111622] to-transparent flex items-center justify-end pr-1 opacity-80 group-hover/scroll:opacity-100 transition-opacity">
            <span className="text-sm text-[#00BFE8] dark:text-cyan-300 font-black animate-pulse">▶</span>
          </div>
        </div>
      )}
    </div>
  );
}
