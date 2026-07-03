"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import portfolio from "../data/portfolio.json";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { personal, socials } = portfolio;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const profiles = [
    { label: "LinkedIn", handle: "darshansatapara", href: socials.linkedin, icon: Linkedin, color: "bg-white" },
    { label: "GitHub", handle: "darshansatapara", href: socials.github, icon: Github, color: "bg-[#facc15]" },
    { label: "LeetCode", handle: "darshansatapara", href: socials.leetcode, icon: Code2, color: "bg-[#4ecdc4]" }
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] py-12 px-4 md:px-8 font-mono text-black">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="border-l-8 border-black pl-6 md:pl-12 py-2">
          <div className="flex items-center gap-2 mb-3 text-gray-500 font-bold text-sm uppercase tracking-widest"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{personal.availability}</div>
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">GET IN<br /><span className="text-[#ff6b6b]">TOUCH.</span></h1>
        </div>
        <div className="flex items-center gap-2 border-2 border-black px-4 py-2 bg-white shadow-[4px_4px_0_#000]"><MapPin className="w-4 h-4 text-[#ff6b6b]" /><span className="font-bold text-xs uppercase">{personal.location}</span></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 border-4 border-black bg-white shadow-[8px_8px_0_#000]">
          <div className="bg-black text-white p-3 flex justify-between items-center"><div className="flex gap-2"><span className="w-3 h-3 rounded-full bg-[#ff6b6b]" /><span className="w-3 h-3 rounded-full bg-[#facc15]" /><span className="w-3 h-3 rounded-full bg-[#4ecdc4]" /></div><span className="text-xs font-bold uppercase">direct-contact</span></div>
          <div className="p-8 md:p-10"><p className="text-gray-400 font-bold mb-4">{"// Click to copy or send directly"}</p><h2 className="text-3xl md:text-5xl font-black break-all mb-8">{personal.email}</h2>
            <div className="flex flex-col sm:flex-row gap-4"><Link href={`mailto:${personal.email}`} className="flex-1 bg-black text-white px-6 py-4 font-bold uppercase border-2 border-black flex items-center justify-center gap-2"><Mail className="w-5 h-5" />Send mail</Link><button onClick={copyEmail} className="flex-1 bg-[#f0f0f0] px-6 py-4 font-bold uppercase border-2 border-black hover:bg-[#4ecdc4] flex items-center justify-center gap-2">{copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}{copied ? "Copied!" : "Copy email"}</button></div>
          </div>
        </section>

        <Link href={`tel:${personal.phoneLink}`} className="lg:col-span-5 group border-4 border-black bg-[#ff6b6b] p-8 md:p-10 shadow-[8px_8px_0_#000] flex flex-col justify-between min-h-[340px]">
          <div className="flex justify-between"><span className="bg-white border-2 border-black px-3 py-1 font-bold text-xs uppercase">Direct line</span><Phone className="w-10 h-10 fill-black" /></div>
          <div><p className="font-bold uppercase mb-3">Call or WhatsApp</p><h2 className="text-4xl md:text-5xl font-black">{personal.phone}</h2></div>
          <div className="pt-5 border-t-4 border-black flex justify-between font-black uppercase">Call now <ArrowUpRight /></div>
        </Link>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map(({ label, handle, href, icon: Icon, color }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className={`border-4 border-black ${color} p-7 shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform`}>
            <div className="flex justify-between items-center mb-5"><span className="font-black uppercase border-b-2 border-black">{label}</span><Icon className="w-8 h-8" /></div><p className="text-2xl font-black break-all">{handle}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
