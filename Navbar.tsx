"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["How It Works", "#how"],
  ["Features", "#features"],
  ["Categories", "#categories"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const Logo = () => (
  <a href="#home" className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-tight">
    <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-brand-grad shadow-glow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#04101d" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" />
      </svg>
    </span>
    Findit<span className="grad-text">.jo</span>
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[15px] font-medium text-muted transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5">
          <a href="#beta" className="btn btn-primary hidden md:inline-flex">Join the Waitlist</a>
          <button className="p-2 text-white md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-1.5 border-b border-line bg-bg/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-2.5 font-medium text-muted">
              {label}
            </a>
          ))}
          <a href="#beta" onClick={() => setOpen(false)} className="btn btn-primary mt-3">Join the Waitlist</a>
        </div>
      )}
    </header>
  );
}
