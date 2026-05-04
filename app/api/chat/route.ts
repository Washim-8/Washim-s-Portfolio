// app/api/chat/route.ts — AI Chatbot API Route
// Uses Google Gemini Flash with graceful keyword fallback

import { NextRequest, NextResponse } from "next/server";
import {
  personal,
  careerObjective,
  education,
  skills,
  internships,
  projects,
  certifications,
  achievements,
  stats,
} from "@/lib/data";

// Build a rich portfolio context string for the AI system prompt
function buildPortfolioContext(): string {
  const techSkills = [
    ...skills.programmingLanguages,
    ...skills.webDevelopment,
    ...skills.backendFrameworks,
    ...skills.database,
    ...skills.aiml,
    ...skills.tools,
  ].join(", ");

  const projectNames = projects.map((p) => `${p.name} (${p.category})`).join(", ");
  const internshipNames = internships.map((i) => `${i.title} at ${i.company} (${i.period})`).join("; ");
  const certNames = certifications.map((c) => `${c.name} by ${c.issuer}`).join("; ");

  return `
You are Washim AI — an intelligent assistant embedded in Washim Shaikh's personal portfolio website.
Your purpose is to help visitors learn about Washim's skills, projects, experience, and background.
Be helpful, friendly, concise, and professional. Always speak positively about Washim.
Never make up information — only use what is provided below.

=== ABOUT WASHIM ===
Name: ${personal.name}
Title: ${personal.title}
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
GitHub: ${personal.github}
LinkedIn: ${personal.linkedin}
Roles: ${personal.roles.join(", ")}

=== CAREER OBJECTIVE ===
${careerObjective}

=== EDUCATION ===
${education.map((e) => `${e.degree} at ${e.institution} (${e.period}) — ${e.score}`).join("\n")}

=== SKILLS ===
${techSkills}

=== STATS ===
Projects Built: ${stats.projects}+
Internships Completed: ${stats.internships}
Languages Known: ${stats.languages}
CGPA: ${stats.cgpa}

=== INTERNSHIP EXPERIENCE ===
${internshipNames}

=== PROJECTS ===
${projectNames}

=== CERTIFICATIONS ===
${certNames}

=== ACHIEVEMENTS ===
${achievements.map((a) => a.title + ": " + a.description).join("\n")}

=== CONTACT ===
Email Washim at: ${personal.email}
Call/WhatsApp: ${personal.phone}
View his work on GitHub: ${personal.github}
Connect on LinkedIn: ${personal.linkedin}
`.trim();
}

// Keyword-based fallback response engine
function keywordFallback(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("stack") || (lower.includes("full") && lower.includes("stack"))) {
    return `Based on Washim's resume, his preferred tech stack includes **Python (FastAPI)** and **PHP (Laravel)** for scalable backend services securely tied to **MySQL** databases. On the frontend, he develops using **HTML5, CSS3, JavaScript, jQuery, and Bootstrap**. He also commands a strong programming foundation utilizing **Java, C, and C++**.`;
  }

  if (lower.includes("stand out") || lower.includes("unique") || lower.includes("different")) {
    return `What truly makes Washim stand out is his rare hybrid expertise. He doesn't just build beautiful, responsive web applications—he natively integrates advanced AI, Machine Learning models, and NLP directly into his software. He bridges the gap between complex algorithms and user-friendly full-stack products smoothly.`;
  }

  if (lower.includes("hire") || lower.includes("work") || lower.includes("available") || lower.includes("open") || lower.includes("opportunit")) {
    return `Yes! Washim is openly available for hiring. He is actively seeking full-time roles, internships, and collaborative work where he can apply his extensive skills in AI/ML and software engineering. You can email him directly at washimshaikh33@gmail.com to discuss opportunities!`;
  }

  if (lower.includes("ai") || lower.includes("machine") || lower.includes("ml ") || lower.includes("deep learning")) {
    return `Absolutely! Washim specializes in AI & Machine Learning. He builds robust predictive models and neural networks using TensorFlow, Keras, and OpenCV. He has also completed specialized ML internships at Inventeron Technologies, YHills, and Coincent.ai.`;
  }

  if (lower.includes("community") || lower.includes("bit ") || lower.includes("role at bit") || lower.includes("organizer")) {
    return `At Beary's Institute of Technology (BIT) Mangalore, Washim is an active tech community leader and Event Organizer. He coordinates technical seminars, hosts hackathons, and actively mentors peers in machine learning and algorithmic programming.`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("language") || lower.includes("know")) {
    return `Washim is skilled in Python, Java, C, C++, HTML/CSS, JavaScript, PHP, FastAPI, Laravel, MySQL, TensorFlow, Keras, OpenCV, and many more. His AI/ML expertise covers Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. Want to know about a specific skill?`;
  }
  if (lower.includes("project")) {
    const featured = projects.filter((p) => p.featured);
    return `Washim has built ${projects.length}+ projects! Featured ones include: ${featured.map((p) => p.name).join(", ")}. They span AI/ML, Web Development, and Data Science. Check the Projects section to explore all of them!`;
  }
  if (lower.includes("intern") || lower.includes("experience") || lower.includes("work")) {
    return `Washim has completed ${internships.length} internships including: Machine Learning at Inventeron Technologies (current), AWS at iStudio, Frontend & Backend development at 1Stop.ai/WoRisGo, ML at YHills, and AI at Coincent.ai. That's quite a track record for a final-year student!`;
  }
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("email")) {
    return `You can reach Washim at:\n📧 ${personal.email}\n📱 ${personal.phone}\n🔗 LinkedIn: ${personal.linkedin}\n💻 GitHub: ${personal.github}`;
  }
  if (lower.includes("education") || lower.includes("study") || lower.includes("college") || lower.includes("degree") || lower.includes("cgpa") || lower.includes("gpa")) {
    return `Washim is pursuing a B.E. in Computer Science and Engineering at Beary's Institute of Technology (BIT), Mangalore (VTU) — graduating in 2026 with a CGPA of 8.01/10. He previously scored 84.33% in PUC and 83.04% in SSLC.`;
  }
  if (lower.includes("cert") || lower.includes("qualification")) {
    return `Washim holds ${certifications.length} certifications including Generative AI for Beginners and Advanced Prompt Engineering (Simplilearn), Cybersecurity Fundamentals (CySecK), Basics of Python (Infosys Springboard), and a Computer Literacy Course scoring 190/200 (Skill India).`;
  }
  if (lower.includes("resume") || lower.includes("cv") || lower.includes("download")) {
    return `You can download Washim's resume directly from the portfolio — look for the "Resume" link in the hero section or navigation bar!`;
  }

  if (lower.includes("hobby") || lower.includes("interest") || lower.includes("karate") || lower.includes("sport")) {
    return `Beyond coding, Washim is a State-Level Karate competitor — demonstrating discipline and resilience that carries over into his technical work. He also actively participates in hackathons, technical workshops, and coding challenges.`;
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return `Hi there! 👋 I'm Washim AI — here to answer any questions about Washim Shaikh's skills, projects, experience, or how to get in touch. What would you like to know?`;
  }

  return `That's a great question! I'm Washim AI and I can tell you about Washim's:\n• Skills & technologies\n• Projects & GitHub repos\n• Internship experience\n• Education & certifications\n• Contact information\n\nWhat would you like to explore?`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body as { message: string };

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If no API key configured or it's the placeholder, use keyword fallback
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      const reply = keywordFallback(message);
      return NextResponse.json({ reply });
    }

    // Call Gemini Flash API
    const context = buildPortfolioContext();
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiBody = {
      contents: [
        {
          parts: [
            {
              text: `${context}\n\n=== USER QUESTION ===\n${message.trim()}\n\nAnswer concisely and helpfully. If the question is outside the portfolio context, gently redirect to what you know about Washim.`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 400,
        topP: 0.8,
      },
    };

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
    });

    if (!geminiRes.ok) {
      // Graceful degradation to keyword matching
      const reply = keywordFallback(message);
      return NextResponse.json({ reply });
    }

    const geminiData = await geminiRes.json();
    const reply =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ??
      keywordFallback(message);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Sorry, I'm having trouble connecting right now. Please try again or contact Washim directly at washimshaikh33@gmail.com" },
      { status: 200 }
    );
  }
}
