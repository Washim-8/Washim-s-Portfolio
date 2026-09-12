// app/layout.tsx — Root layout
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityGuard from "@/components/SecurityGuard";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "WASHIM SHAIKH",
    template: "%s | Washim Shaikh",
  },
  description:
    "Portfolio of Washim Shaikh — B.E. CSE student at BIT Mangalore / VTU. Software Engineer focused on AI/ML, Full-Stack Web Development, and Data-Driven Systems. 20+ projects, 6 internships.",
  keywords: [
    "Washim Shaikh",
    "Software Engineer",
    "AI ML Developer",
    "Full Stack Web Developer",
    "Python Developer",
    "FastAPI",
    "React",
    "Next.js",
    "Computer Vision",
    "Machine Learning",
    "BIT Mangalore",
    "CSE 2026",
    "Bengaluru",
  ],
  authors: [{ name: "Washim Shaikh", url: "https://github.com/Washim-8" }],
  creator: "Washim Shaikh",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "WASHIM SHAIKH",
    description:
      "CSE student at BIT Mangalore / VTU. 20+ projects spanning AI/ML, Full Stack Web Dev, and Data Science. 6 internships. Open to opportunities.",
    type: "website",
    locale: "en_IN",
    siteName: "Washim Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "WASHIM SHAIKH",
    description: "CSE student at BIT Mangalore. 20+ projects. AI & Web developer portfolio.",
    creator: "@washimshaikh",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://washim-shaikh.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Washim Shaikh",
    url: "https://github.com/Washim-8",
    jobTitle: "Software Engineer & AI/ML Developer",
    description:
      "CSE student at BIT Mangalore specializing in Python, AI/ML, and Full Stack Web Development. Completed 6 internships and built 20+ projects.",
    email: "washimshaikh33@gmail.com",
    telephone: "+91 8884958185",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Washim-8",
      "https://www.linkedin.com/in/washim-shaikh/",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bearys Institute of Technology, Mangalore (VTU)",
    },
    knowsAbout: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "OpenCV",
      "Full Stack Web Development",
      "FastAPI",
      "React",
      "Next.js",
      "Data Analysis",
      "Generative AI",
      "Prompt Engineering",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased light-canvas-mesh bg-[#E6ECF5] dark:bg-[#111622] text-[#2A354F] dark:text-[#F3F4F6] selection:bg-[#CCEFF9] selection:text-[#00BFE8]"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SecurityGuard />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
