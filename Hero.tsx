"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const QUERY = "I need a laptop for engineering under 400 JOD.";

const RECS = [
  { name: "Acer Aspire 7 · Ryzen 5", spec: "16GB RAM · RTX graphics · 512GB SSD", price: "379", match: "96%" },
  { name: "Lenovo IdeaPad Gaming 3", spec: "16GB RAM · 6-core CPU · fast SSD", price: "395", match: "92%" },
  { name: "ASUS Vivobook Pro", spec: "Great for coding · all-day battery", price: "360", match: "89%" },
];

const LaptopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" />
  </svg>
);

function Demo() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "thinking" | "done">("typing");
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(QUERY);
      setPhase("done");
      setShown(RECS.length);
      return;
    }
    let i = 0;
    const start = setTimeout(function type() {
      if (i <= QUERY.length) {
        setTyped(QUERY.slice(0, i));
        i++;
        setTimeout(type, 42);
      } else {
        setPhase("thinking");
        setTimeout(() => {
          setPhase("done");
          RECS.forEach((_, idx) => setTimeout(() => setShown((s) => Math.max(s, idx + 1)), idx * 180));
        }, 1100);
      }
    }, 650);
    return () => clearTimeout(start);
  }, []);

  return (
    <div className="relative rounded-xl3 border border-line-strong bg-gradient-to-b from-[#101e32] to-[#0c1726] p-5 shadow-[0_40px_90px_-30px_rgba(0,40,90,0.8)]">
      <div className="flex items-center gap-2 px-1 pb-4 pt-1 text-[13px] text-muted">
        <span className="mr-1.5 flex gap-1.5">
          {[0, 1, 2].map((i) => <i key={i} className="block h-2.5 w-2.5 rounded-full bg-white/15" />)}
        </span>
        Findit Assistant
      </div>

      <div className="flex items-center gap-3 rounded-[14px] border border-line bg-[#0a1525] px-4 py-3.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" className="flex-none">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
        </svg>
        <span className="font-mono text-[14.5px] text-[#dbe7f5]">{typed}</span>
        {phase === "typing" && <span className="ml-px inline-block h-[18px] w-0.5 animate-blink bg-primary align-[-3px]" />}
      </div>

      {phase === "thinking" && (
        <div className="flex items-center gap-2.5 px-1 pb-2 pt-4 text-[13px] text-muted">
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <i key={i} className="h-1.5 w-1.5 animate-bounce2 rounded-full bg-primary" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </span>
          Analyzing your budget &amp; use case…
        </div>
      )}

      {phase === "done" && (
        <div className="mt-1.5 flex flex-col gap-2.5">
          {RECS.map((r, i) => (
            <div
              key={r.name}
              className="flex items-center gap-3.5 rounded-[14px] border border-line bg-[#0a1525] px-3.5 py-3 transition-all duration-500"
              style={{ opacity: i < shown ? 1 : 0, transform: i < shown ? "none" : "translateY(10px)" }}
            >
              <div className="grid h-[42px] w-[42px] flex-none place-items-center rounded-[11px] bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                <LaptopIcon />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="mt-0.5 font-mono text-xs text-muted">{r.spec}</div>
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-bold">{r.price} <span className="text-[11px] font-medium text-muted">JOD</span></div>
                <div className="mt-0.5 text-[11px] font-semibold text-primary">{r.match} match</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative z-[1] pb-[90px] pt-[150px] md:pt-[150px]">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-[120px] -top-[180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.45),transparent_70%)] blur-[90px]" />
        <div className="absolute -bottom-[220px] -left-[140px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.28),transparent_70%)] blur-[90px]" />
      </div>

      <div className="wrap relative grid items-center gap-[54px] md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal as="span" className="eyebrow">
            <span className="h-[7px] w-[7px] rounded-full bg-primary shadow-[0_0_12px_#00C2FF]" /> AI product discovery · Jordan
          </Reveal>
          <Reveal as="h1" className="my-6 text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Find smarter.<br /><span className="grad-text">Save more.</span>
          </Reveal>
          <Reveal as="p" className="lead mb-8 max-w-[520px]">
            AI-powered product discovery for Jordan. Describe what you need, set your budget, and get smarter product recommendations — without browsing endless pages.
          </Reveal>
          <Reveal className="flex flex-wrap gap-3.5">
            <a href="#beta" className="btn btn-primary">
              Join the Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#how" className="btn btn-ghost">Learn More</a>
          </Reveal>
        </div>

        <Reveal className="order-first md:order-none">
          <Demo />
        </Reveal>
      </div>
    </section>
  );
}
