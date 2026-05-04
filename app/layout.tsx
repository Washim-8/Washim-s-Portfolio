// app/layout.tsx — Root layout
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Washim Shaikh — Software Engineer & AI/ML Developer",
    template: "%s | Washim Shaikh",
  },
  description:
    "Portfolio of Washim Shaikh — CSE student at BIT Mangalore, aspiring Software Engineer with skills in Python, Full Stack Web Development, AI & ML, and Data Analysis. 20+ projects, 6 internships.",
  keywords: [
    "Washim Shaikh",
    "Software Engineer",
    "AI ML Developer",
    "Full Stack Web Developer",
    "Python Developer",
    "BIT Mangalore",
    "CSE 2026",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "FastAPI",
    "Portfolio",
    "Resume",
    "Internship",
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
    title: "Washim Shaikh — Software Engineer & AI/ML Developer",
    description:
      "CSE student at BIT Mangalore. 20+ projects spanning AI/ML, Full Stack Web Dev, and Data Science. 6 internships. Open to opportunities.",
    type: "website",
    locale: "en_IN",
    siteName: "Washim Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washim Shaikh — Software Engineer & AI/ML Developer",
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
    jobTitle: "Aspiring Software Engineer",
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
      name: "Beary's Institute of Technology, Mangalore",
    },
    knowsAbout: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "NLP",
      "Computer Vision",
      "Full Stack Web Development",
      "FastAPI",
      "AI/ML",
      "Data Analysis",
      "Generative AI",
      "Prompt Engineering",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Generative AI for Beginners",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "Simplilearn" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Advanced Prompt Engineering",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "Simplilearn" },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Fonts preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        {/* JSON-LD Structured Data (Person schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col antialiased bg-white dark:bg-darkbg-primary text-slate-900 dark:text-darktext-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
