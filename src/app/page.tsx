import Link from "next/link";
import React from "react";
import Particles from "@/components/Particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-radial from-black via-zinc-700/25 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 text-sm duration-500 text-zinc-500">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
          <form method="get" action="/resume/resume.pdf" target="_blank" className="hover:text-zinc-300">
            <button>Resume</button>
          </form>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        YKM
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I&apos;m building {" "}
          <Link
            target="_blank"
            href="https://github.com/Yadu-M/events_TO"
            className="underline duration-500 hover:text-zinc-300"
          >
            Events TO
          </Link> to showcase events happening around Toronto.
        </h2>
      </div>
    </div>
  );

}