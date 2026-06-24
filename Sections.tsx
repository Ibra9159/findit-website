"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/* ---------- shared bits ---------- */
const SectionHead = ({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) => (
  <Reveal className="mx-auto mb-16 max-w-[640px] text-center">
    <div className="kicker">{kicker}</div>
    <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-[-0.02em]">{title}</h2>
    {sub && <p className="lead mt-3.5">{sub}</p>}
  </Reveal>
);

/* ---------- How It Works ---------- */
const STEPS = [
  ["01", "Tell us what you need", "Describe your product, budget, and how you'll use it — in your own words."],
  ["02", "AI understands your request", "Findit analyzes your needs, budget, and performance requirements."],
  ["03", "Get smart recommendations", "Receive suitable options without wasting hours researching."],
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Process" title="How Findit.jo Works" sub="Three steps from a plain-language request to recommendations you can act on." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([num, t, d]) => (
            <Reveal key={num} className="card group p-7 hover:-translate-y-1 hover:border-line-strong">
              <div className="font-mono text-[13px] font-semibold tracking-[0.1em] text-primary">{num}</div>
              <div className="my-5 h-px bg-line" />
              <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight">{t}</h3>
              <p className="text-[15px] text-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Example Requests ---------- */
const PromptIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mt-0.5 flex-none text-primary">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const EXAMPLES = [
  ["🎓 Student", "I need a laptop for engineering under 350 JOD."],
  ["🎮 Gamer", "I need a gaming headset around 40 JOD."],
  ["📱 Professional", "I need a phone with a great camera under 250 JOD."],
];

export function ExampleRequests() {
  return (
    <section id="examples" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Examples" title="Example Requests" sub="Describe your needs in your own words." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map(([tag, q]) => (
            <Reveal key={tag} className="card p-6 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_50px_-30px_rgba(0,194,255,0.35)]">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[13px] font-semibold text-muted">{tag}</span>
              <div className="flex items-start gap-3 rounded-[14px] border border-line bg-[#0a1525] px-4 py-3.5">
                <PromptIcon />
                <span className="font-mono text-sm leading-relaxed text-[#dbe7f5]">&quot;{q}&quot;</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
const I = (p: string, extra?: React.SVGProps<SVGSVGElement>) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...extra}>
    <path d={p} />
  </svg>
);

const FEATURES: { icon: React.ReactNode; t: string; d: string }[] = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v2M5.2 7.2 6.6 8.6M3 14h2M19 14h2M17.4 8.6l1.4-1.4" /><rect x="6" y="12" width="12" height="8" rx="3" /><circle cx="10" cy="16" r="1" /><circle cx="14" cy="16" r="1" /></svg>, t: "AI Assistant", d: "Natural language product search — just type what you're looking for." },
  { icon: I("M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"), t: "Smart Recommendations", d: "Personalized suggestions based on budget, use case, and performance needs." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>, t: "Product Details", d: "Clear product information to help you decide quickly." },
  { icon: I("M19 14c1.5-1.5 3-3.2 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"), t: "Favorites", d: "Save products you like and come back to them later." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>, t: "Order Requests", d: "Submit product requests directly through the platform." },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M21 3l-9 9" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>, t: "Order Tracking", d: "Track request status from request to delivery." },
];

export function Features() {
  return (
    <section id="features" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Features" title="Everything to decide with confidence" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Reveal key={f.t} className="card p-6 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_20px_50px_-30px_rgba(0,194,255,0.35)]">
              <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">{f.icon}</div>
              <h3 className="mb-2 text-[19px] font-semibold tracking-tight">{f.t}</h3>
              <p className="text-[14.5px] text-muted">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Categories ---------- */
const LIVE = ["Laptops", "Phones", "Headsets", "Monitors"];
const SOON = ["Gaming", "Electronics", "Home Products", "Accessories", "Appliances", "Automotive", "Fashion"];

export function Categories() {
  return (
    <section id="categories" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Categories" title="Starting focused, expanding fast" />
        <Reveal>
          <div className="mb-[18px] flex items-center gap-2.5 text-sm text-muted">
            <b className="font-semibold text-white">Available now</b>
            <span className="h-[7px] w-[7px] rounded-full bg-primary shadow-[0_0_12px_#00C2FF]" />
          </div>
          <div className="flex flex-wrap gap-3">
            {LIVE.map((c) => (
              <span key={c} className="flex items-center gap-2.5 rounded-[14px] border border-line bg-card px-[18px] py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_16px_40px_-26px_rgba(0,194,255,0.35)]">
                <span className="h-2 w-2 rounded-full bg-primary" /> {c}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-[46px]">
          <div className="mb-[18px] flex items-center gap-2.5 text-sm text-muted">
            <b className="font-semibold text-white">Coming soon</b>
            <span className="rounded-full border border-line px-2.5 py-[3px] text-[11px] font-semibold text-primary">Soon</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {SOON.map((c) => (
              <span key={c} className="flex items-center gap-2.5 rounded-[14px] border border-line bg-white/[0.015] px-[18px] py-3.5 text-[15px] font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-muted/50" /> {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Why Findit (comparison) ---------- */
const XMark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-[13px] w-[13px]"><path d="M18 6 6 18M6 6l12 12" /></svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-[13px] w-[13px]"><path d="M20 6 9 17l-5-5" /></svg>
);

const TRAD = ["Compare dozens of products", "Read endless specifications", "Visit multiple stores", "Spend hours researching", "Unsure what to buy"];
const SMART = ["Describe what you need", "Set your budget", "Get personalized recommendations", "Save time", "Buy with confidence"];

export function WhyFindit() {
  return (
    <section id="why" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Why Findit.jo" title="Why Findit.jo?" sub="Traditional shopping takes time. Findit.jo helps you discover the right product faster." />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="card p-8">
            <h3 className="mb-6 text-lg font-semibold text-muted">Traditional Shopping</h3>
            <ul className="flex flex-col gap-[15px]">
              {TRAD.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-muted">
                  <span className="mt-px grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] bg-white/[0.05] text-muted"><XMark /></span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-xl2 border border-primary/30 bg-gradient-to-b from-[#101e32] to-[#0c1726] p-8">
            <h3 className="mb-6 text-lg font-semibold">Findit<span className="grad-text">.jo</span></h3>
            <ul className="flex flex-col gap-[15px]">
              {SMART.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-px grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"><Check /></span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="relative py-[110px]">
      <div className="wrap grid items-start gap-12 md:grid-cols-2">
        <Reveal>
          <div className="kicker">About</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-[-0.02em]">Built to make shopping smarter in Jordan.</h2>
          <p className="lead mt-5">Findit.jo started with a simple idea: shopping should not require hours of research. People should be able to describe what they need and instantly receive personalized recommendations.</p>
        </Reveal>
        <div className="flex flex-col gap-[18px]">
          {[
            ["Mission", "Make product discovery simple, fast, and intelligent.",
              <svg key="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>],
            ["Vision", "Become Jordan's leading AI-powered product discovery platform, then expand across MENA.",
              <svg key="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>],
            ["Long-Term Goal", "Build Jordan's smartest product discovery platform and eventually expand across MENA.",
              <svg key="i" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>],
          ].map(([t, d, icon]) => (
            <Reveal key={t as string} className="card flex items-start gap-[18px] p-[26px]">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                {icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-[19px] font-semibold tracking-tight">{t as string}</h3>
                <p className="text-[14.5px] text-muted">{d as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
export function Founder() {
  return (
    <section id="founder" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Founder" title="Meet the Founder" sub="Building a smarter way to discover products in Jordan." />
        <div className="grid items-stretch gap-7 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="card p-[38px]">
            <div className="mb-6 grid h-[84px] w-[84px] place-items-center rounded-[22px] bg-brand-grad text-[28px] font-extrabold text-[#04101d] shadow-glow-lg">IM</div>
            <div className="text-2xl font-extrabold tracking-tight">Ibrahim Mansour</div>
            <span className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-[7px] text-[13px] font-semibold text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" /></svg>
              Founder &amp; CEO
            </span>
            <div className="mt-[22px] flex flex-col gap-3 border-t border-line pt-[22px]">
              <div className="flex items-center gap-2.5 text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" className="flex-none"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></svg>
                Company · <b className="font-semibold text-white">Findit.jo</b>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" strokeLinecap="round" className="flex-none"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                Amman, Jordan
              </div>
            </div>
          </Reveal>
          <Reveal className="card flex flex-col p-[38px]">
            <div className="mb-1.5 font-mono text-[44px] leading-none text-primary opacity-50">&quot;</div>
            <p className="mb-[15px] font-medium leading-relaxed text-white">Findit.jo started from a simple observation:</p>
            <p className="mb-[15px] text-[15.5px] leading-[1.7] text-muted">People spend too much time searching for products, comparing specifications, and visiting multiple stores before making a decision.</p>
            <p className="mb-[15px] text-[15.5px] leading-[1.7] text-muted">The vision is to create an AI-powered platform that understands what users actually need and helps them find the right products faster and more confidently.</p>
            <p className="font-medium leading-relaxed text-white">Starting in Jordan and expanding across the region.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Beta CTA ---------- */
export function BetaCTA() {
  const [joined, setJoined] = useState(false);
  return (
    <section id="beta" className="relative py-[110px]">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-b from-[#0d1c30] to-[#0a1422] px-6 py-16 text-center sm:px-10">
          <div className="pointer-events-none absolute -top-[260px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,87,255,0.6),transparent_70%)] opacity-40 blur-[100px]" />
          <div className="relative">
            <div className="kicker">Public beta</div>
            <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.02em]">Be part of the Findit.jo beta.</h2>
            <p className="lead mx-auto mb-7 max-w-[560px]">We're preparing the first public beta version in Jordan. Join early, test the platform, and help us improve smarter product discovery.</p>
            <div className="mx-auto flex max-w-[460px] flex-wrap justify-center gap-3">
              <input type="email" placeholder="you@email.com" aria-label="Email" className="min-w-[220px] flex-1 rounded-[14px] border border-line bg-white/5 px-[18px] py-3.5 text-[15px] text-white outline-none transition placeholder:text-muted focus:border-primary" />
              <button className="btn btn-primary" onClick={() => { setJoined(true); setTimeout(() => setJoined(false), 2200); }}>
                {joined ? "You're on the list ✓" : "Join the Waitlist"}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
const socials = [
  { label: "Instagram", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg> },
  { label: "LinkedIn", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-10h4v2a4 4 0 0 1 2-2z" /><rect x="2" y="9" width="4" height="11" /><circle cx="4" cy="4" r="2" /></svg> },
  { label: "TikTok", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg> },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-[110px]">
      <div className="wrap">
        <SectionHead kicker="Contact" title="Let's talk" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="card p-[34px]">
            <h3 className="mb-2 text-[19px] font-semibold tracking-tight">Get in touch</h3>
            <p className="mb-[22px] text-[14.5px] text-muted">Questions, feedback, or partnership ideas — reach us directly.</p>
            <div className="flex items-center gap-3 rounded-[14px] border border-line bg-white/[0.03] px-4 py-3.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C2FF" strokeWidth="2" className="flex-none"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
              <span className="font-medium">hello@findit.jo</span>
            </div>
          </Reveal>
          <Reveal className="card p-[34px]">
            <h3 className="mb-2 text-[19px] font-semibold tracking-tight">Follow along</h3>
            <p className="mb-[22px] text-[14.5px] text-muted">Stay updated on the beta launch and new categories.</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#" className="flex min-w-[140px] flex-1 items-center gap-2.5 rounded-[14px] border border-line bg-white/[0.03] px-4 py-[15px] font-medium text-white transition hover:-translate-y-0.5 hover:border-primary">
                  <span className="text-primary">{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Built in Jordan ---------- */
export function BuiltInJordan() {
  return (
    <Reveal className="wrap pt-10 text-center">
      <div className="inline-flex items-center gap-2.5 text-base font-bold tracking-tight">Built in Jordan 🇯🇴</div>
      <p className="mt-2 text-[14.5px] text-muted">For Jordan&apos;s next generation of smarter shoppers.</p>
    </Reveal>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const cols = [
    ["Product", [["Features", "#features"], ["Categories", "#categories"], ["How It Works", "#how"]]],
    ["Company", [["About", "#about"], ["Contact", "#contact"], ["Join the Waitlist", "#beta"]]],
    ["Legal", [["Privacy Policy", "#"], ["Terms of Service", "#"]]],
  ] as const;

  return (
    <footer className="mt-[30px] border-t border-line pb-10 pt-14">
      <div className="wrap">
        <div className="mb-10 flex flex-wrap justify-between gap-10">
          <div className="max-w-[280px]">
            <a href="#home" className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-tight">
              <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-brand-grad shadow-glow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#04101d" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></svg>
              </span>
              Findit<span className="grad-text">.jo</span>
            </a>
            <p className="lead mt-3 text-[14.5px]">Find smarter. Save more.</p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {cols.map(([title, items]) => (
              <div key={title}>
                <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">{title}</h4>
                {items.map(([label, href]) => (
                  <a key={label} href={href} className="mb-2.5 block text-[14.5px] text-muted transition hover:text-white">{label}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted">
          <span>© 2026 Findit.jo · Amman, Jordan</span>
          <span>Find smarter. Save more.</span>
        </div>
      </div>
    </footer>
  );
}
