"use client";
// components/SkillsOrbit.tsx — Animated skills constellation (ref-based, no setState in rAF)
import { useEffect, useRef, useState } from "react";

const ORBIT_SKILLS = [
  { label: "Python",     emoji: "🐍", color: "#3B82F6", ring: 1, speed: 22, offset: 0   },
  { label: "TensorFlow", emoji: "🧠", color: "#F97316", ring: 1, speed: 22, offset: 120 },
  { label: "React",      emoji: "⚛️", color: "#06B6D4", ring: 1, speed: 22, offset: 240 },
  { label: "FastAPI",    emoji: "⚡", color: "#22C55E", ring: 2, speed: 35, offset: 0   },
  { label: "ML",         emoji: "🤖", color: "#8B5CF6", ring: 2, speed: 35, offset: 72  },
  { label: "OpenCV",     emoji: "👁️", color: "#10B981", ring: 2, speed: 35, offset: 144 },
  { label: "MySQL",      emoji: "🗄️", color: "#6366F1", ring: 2, speed: 35, offset: 216 },
  { label: "GitHub",     emoji: "🐙", color: "#EC4899", ring: 2, speed: 35, offset: 288 },
  { label: "NLP",        emoji: "💬", color: "#F59E0B", ring: 3, speed: 50, offset: 0   },
  { label: "Detection",  emoji: "🔍", color: "#0EA5E9", ring: 3, speed: 50, offset: 60  },
  { label: "Git",        emoji: "🔀", color: "#EF4444", ring: 3, speed: 50, offset: 120 },
  { label: "PHP",        emoji: "🐘", color: "#7C3AED", ring: 3, speed: 50, offset: 180 },
  { label: "Java",       emoji: "☕", color: "#D97706", ring: 3, speed: 50, offset: 240 },
  { label: "AWS",        emoji: "☁️", color: "#64748B", ring: 3, speed: 50, offset: 300 },
];

const RING_RADII: Record<1 | 2 | 3, number> = { 1: 80, 2: 138, 3: 190 };
const CX = 220, CY = 220;
const N = ORBIT_SKILLS.length;

export default function SkillsOrbit() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Per-node SVG element refs — mutated directly in rAF, never via setState
  const glowRefs = useRef<(SVGCircleElement | null)[]>(Array(N).fill(null));
  const nodeRefs = useRef<(SVGCircleElement | null)[]>(Array(N).fill(null));
  const lineRefs = useRef<(SVGLineElement | null)[]>(Array(N).fill(null));
  // Store last positions so tooltip can read them on hover-induced re-render
  const posRef   = useRef<{ x: number; y: number }[]>(
    ORBIT_SKILLS.map(() => ({ x: CX, y: CY }))
  );
  const rafRef = useRef<number>(0);

  useEffect(() => { setIsMounted(true); }, []);

  // rAF loop — mutates DOM directly → zero React re-renders from animation
  useEffect(() => {
    if (!isMounted) return;
    let start: number | null = null;

    const animate = (ts: number) => {
      if (start === null) start = ts;
      const tick = ts - start;

      ORBIT_SKILLS.forEach((skill, i) => {
        const radius = RING_RADII[skill.ring as 1 | 2 | 3];
        const angle  = (tick / (skill.speed * 1000)) * 2 * Math.PI
                     + skill.offset * (Math.PI / 180);
        const x = CX + radius * Math.cos(angle);
        const y = CY + radius * Math.sin(angle);

        // Save for tooltip reads
        posRef.current[i] = { x, y };

        // Direct DOM mutation — no setState, no re-render
        const g = glowRefs.current[i];
        const n = nodeRefs.current[i];
        const l = lineRefs.current[i];
        if (g) { g.setAttribute("cx", String(x)); g.setAttribute("cy", String(y)); }
        if (n) { n.setAttribute("cx", String(x)); n.setAttribute("cy", String(y)); }
        if (l) { l.setAttribute("x2", String(x)); l.setAttribute("y2", String(y)); }
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

        {/* SVG */}
        <svg
          viewBox="0 0 440 440"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Orbit rings */}
          {([80, 138, 190] as const).map((r, i) => (
            <circle
              key={r} cx={CX} cy={CY} r={r}
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeDasharray="5 10"
              className="text-slate-200 dark:text-white/10"
              opacity={0.6 - i * 0.1}
            />
          ))}

          {/* Lines centre → node */}
          {isMounted && ORBIT_SKILLS.map((skill, i) => (
            <line
              key={`line-${skill.label}`}
              ref={(el) => { lineRefs.current[i] = el; }}
              x1={CX} y1={CY} x2={CX} y2={CY}
              stroke={skill.color} strokeWidth="0.5"
              opacity={hovered === skill.label ? 0.4 : 0.08}
              className="transition-opacity duration-300"
            />
          ))}

          {/* Nodes */}
          {isMounted && ORBIT_SKILLS.map((skill, i) => {
            const isHov = hovered === skill.label;
            const pos   = posRef.current[i];
            return (
              <g
                key={skill.label}
                onMouseEnter={() => setHovered(skill.label)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow */}
                <circle
                  ref={(el) => { glowRefs.current[i] = el; }}
                  cx={CX} cy={CY}
                  r={isHov ? 22 : 16}
                  fill={skill.color}
                  opacity={isHov ? 0.2 : 0.08}
                  className="transition-all duration-300"
                />
                {/* Dot */}
                <circle
                  ref={(el) => { nodeRefs.current[i] = el; }}
                  cx={CX} cy={CY}
                  r={isHov ? 9 : 7}
                  fill={skill.color}
                  opacity={isHov ? 1 : 0.85}
                  className="transition-all duration-300"
                />
                {/* Tooltip — reads last stored position */}
                {isHov && (
                  <g>
                    <rect
                      x={pos.x - 30} y={pos.y - 28}
                      width={60} height={18} rx={5}
                      fill={skill.color} opacity={0.9}
                    />
                    <text
                      x={pos.x} y={pos.y - 15}
                      textAnchor="middle" fontSize="9"
                      fontWeight="700" fill="white"
                      fontFamily="Space Grotesk, Inter, sans-serif"
                    >
                      {skill.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Central hub */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div
              className="absolute rounded-full animate-ping"
              style={{
                width: 88, height: 88,
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                background: "rgba(99,102,241,0.15)",
                animationDuration: "3s",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 80, height: 80,
                top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
              }}
            />
            <div className="w-[60px] h-[60px] rounded-2xl bg-white shadow-2xl shadow-primary/40 flex items-center justify-center overflow-hidden border border-slate-100">
              <img src="/logo.png" alt="WS Logo" className="w-full h-full object-contain p-1" />
            </div>
          </div>
        </div>

        {/* Pill legend */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 w-full px-4 pointer-events-none">
          {ORBIT_SKILLS.slice(0, 6).map((s) => (
            <span
              key={s.label}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
              style={{ color: s.color, borderColor: `${s.color}40`, background: `${s.color}12` }}
            >
              {s.emoji} {s.label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
