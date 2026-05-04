"use client";
import { Mail, MapPin, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-darkbg-secondary text-darktext-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg overflow-hidden bg-white shadow-sm">
                <img
                  src="/logo.png"
                  alt="WS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-darktext-primary text-xl font-bold">Washim Shaikh</span>
            </div>
            <p className="text-darktext-muted text-sm leading-relaxed max-w-xs">
              Aspiring Software Engineer passionate about AI/ML, Full Stack Web Development, and
              building data-driven applications that solve real-world problems.
            </p>
            <div className="flex items-center gap-1 mt-4 text-darktext-muted text-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-darkbg-tertiary flex items-center justify-center text-darktext-muted hover:text-darktext-primary hover:bg-white/10 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-darkbg-tertiary flex items-center justify-center text-darktext-muted hover:text-primary-light hover:bg-primary/20 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-darkbg-tertiary flex items-center justify-center text-darktext-muted hover:text-accent-green hover:bg-accent-green/20 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-darktext-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#certifications", label: "Certifications" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-darktext-muted hover:text-darktext-primary text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-darktext-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-darktext-muted hover:text-darktext-primary text-sm transition-colors break-all"
                >
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-darktext-muted hover:text-darktext-primary text-sm transition-colors"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary-light text-sm font-medium hover:bg-primary/20 transition-all border border-primary/30"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Send a Message
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-darktext-muted text-sm flex items-center gap-1.5">
            © {year} Washim Shaikh. Built with{" "}
            <Heart className="w-3.5 h-3.5 text-accent-pink inline" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-darktext-muted/60 text-xs">CSE&apos;26 | BIT Mangalore | VTU</p>
        </div>
      </div>
    </footer>
  );
}
