"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

const ORBIT_SKILLS = [
  { label: "Python", emoji: "🐍", color: "#3B82F6", ring: 1, speed: 22, offset: 0 },
  { label: "TensorFlow", emoji: "🧠", color: "#00BFE8", ring: 1, speed: 22, offset: 120 },
  { label: "React", emoji: "⚛️", color: "#06B6D4", ring: 1, speed: 22, offset: 240 },
  { label: "FastAPI", emoji: "⚡", color: "#10B981", ring: 2, speed: 35, offset: 0 },
  { label: "PyTorch", emoji: "🔥", color: "#EF4444", ring: 2, speed: 35, offset: 72 },
  { label: "OpenCV", emoji: "👁️", color: "#1CE0FD", ring: 2, speed: 35, offset: 144 },
  { label: "MySQL", emoji: "🗄️", color: "#0284C7", ring: 2, speed: 35, offset: 216 },
  { label: "GitHub", emoji: "🐙", color: "#202225", ring: 2, speed: 35, offset: 288 },
  { label: "Next.js", emoji: "▲", color: "#202225", ring: 3, speed: 50, offset: 0 },
  { label: "YOLO", emoji: "🔍", color: "#F59E0B", ring: 3, speed: 50, offset: 60 },
  { label: "Git", emoji: "🔀", color: "#00BFE8", ring: 3, speed: 50, offset: 120 },
  { label: "PHP", emoji: "🐘", color: "#475569", ring: 3, speed: 50, offset: 180 },
  { label: "Java", emoji: "☕", color: "#D97706", ring: 3, speed: 50, offset: 240 },
  { label: "AWS", emoji: "☁️", color: "#2C75AF", ring: 3, speed: 50, offset: 300 },
];

const RING_RADII: Record<1 | 2 | 3, number> = { 1: 80, 2: 138, 3: 190 };
const CX = 220,
  CY = 220;
const N = ORBIT_SKILLS.length;

function subscribe(callback: () => void) {
  return () => {
    callback();
  };
}

export default function SkillsOrbit() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [hovered, setHovered] = useState<string | null>(null);

  const glowRefs = useRef<(SVGCircleElement | null)[]>(Array(N).fill(null));
  const nodeRefs = useRef<(SVGCircleElement | null)[]>(Array(N).fill(null));
  const lineRefs = useRef<(SVGLineElement | null)[]>(Array(N).fill(null));
  const labelRefs = useRef<(SVGTextElement | null)[]>(Array(N).fill(null));

  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isMounted) return;
    let start: number | null = null;

    const animate = (ts: number) => {
      if (start === null) start = ts;
      const tick = ts - start;

      ORBIT_SKILLS.forEach((skill, i) => {
        const radius = RING_RADII[skill.ring as 1 | 2 | 3];
        const angle =
          (tick / (skill.speed * 1000)) * 2 * Math.PI +
          skill.offset * (Math.PI / 180);
        const x = CX + radius * Math.cos(angle);
        const y = CY + radius * Math.sin(angle);

        const g = glowRefs.current[i];
        const n = nodeRefs.current[i];
        const l = lineRefs.current[i];
        const t = labelRefs.current[i];

        if (g) {
          g.setAttribute("cx", String(x));
          g.setAttribute("cy", String(y));
        }
        if (n) {
          n.setAttribute("cx", String(x));
          n.setAttribute("cy", String(y));
        }
        if (l) {
          l.setAttribute("x2", String(x));
          l.setAttribute("y2", String(y));
        }
        if (t) {
          t.setAttribute("x", String(x));
          t.setAttribute("y", String(y - 12));
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMounted]);

  return (
    <div
      className="w-full flex items-center justify-center py-6 overflow-hidden"
      aria-label="Animated skills visualization"
    >
      <div className="relative select-none w-full max-w-[440px] aspect-square">
        <svg
          viewBox="0 0 440 440"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Orbit rings */}
          {([80, 138, 190] as const).map((r, i) => (
            <circle
              key={r}
              cx={CX}
              cy={CY}
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 8"
              className="text-[#A3A6A0]/40 dark:text-white/10"
              opacity={0.8 - i * 0.15}
            />
          ))}

          {/* Connection lines */}
          {isMounted &&
            ORBIT_SKILLS.map((skill, i) => (
              <line
                key={`line-${skill.label}`}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                x1={CX}
                y1={CY}
                x2={CX}
                y2={CY}
                stroke={skill.color}
                strokeWidth="0.8"
                opacity={hovered === skill.label ? 0.4 : 0.08}
                className="transition-opacity duration-300"
              />
            ))}

          {/* Nodes */}
          {isMounted &&
            ORBIT_SKILLS.map((skill, i) => {
              const isHov = hovered === skill.label;
              return (
                <g
                  key={skill.label}
                  onMouseEnter={() => setHovered(skill.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    ref={(el) => {
                      glowRefs.current[i] = el;
                    }}
                    cx={CX}
                    cy={CY}
                    r={isHov ? 20 : 14}
                    fill={skill.color}
                    opacity={isHov ? 0.25 : 0.12}
                    className="transition-all duration-300"
                  />
                  <circle
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                    cx={CX}
                    cy={CY}
                    r={isHov ? 8 : 6}
                    fill={skill.color}
                    opacity={isHov ? 1 : 0.85}
                    className="transition-all duration-300"
                  />
                  <text
                    ref={(el) => {
                      labelRefs.current[i] = el;
                    }}
                    x={CX}
                    y={CY - 12}
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="700"
                    fill={skill.color}
                    fontFamily="Space Grotesk, Inter, sans-serif"
                    opacity={isHov ? 1 : 0}
                    className="transition-opacity duration-200 pointer-events-none"
                  >
                    {skill.label}
                  </text>
                </g>
              );
            })}
        </svg>

        {/* Central Hub in Soft Liquid Glass */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div
              className="absolute rounded-full"
              style={{
                width: 74,
                height: 74,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(0,191,232,0.25) 0%, transparent 70%)",
              }}
            />
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-darkbg-secondary shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(163,166,160,0.22)] flex items-center justify-center overflow-hidden border border-white/90 dark:border-white/10 p-1">
              <Image
                src="/logo.png"
                alt="Washim Shaikh"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Pill Legend */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 w-full px-4 pointer-events-none">
          {ORBIT_SKILLS.slice(0, 6).map((s) => (
            <span
              key={s.label}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-white/80 dark:bg-darkbg-secondary/80 text-[#202225] dark:text-white border-black/5 dark:border-white/10 shadow-sm"
            >
              {s.emoji} {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
