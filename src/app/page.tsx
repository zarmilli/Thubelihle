"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/resizable-navbar";
import { HeroParallax } from "@/components/hero-parallax";
import { GoogleGeminiEffect } from "@/components/google-gemini-effect";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";
import { HoverEffect } from "@/components/card-hover-effect";

import React, { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Skills", link: "/#Skills" },
    { name: "About", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  const products = [
    { title: "Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/squarre", thumbnail: "/images/squarre.png" },
    { title: "Zarmilli", link: "https://zarmilli.github.io/Zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "See Zarmilli", link: "https://zarmilli.github.io/zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "See Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Visit Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "See Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Visit Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Visit Zarmilli", link: "https://zarmilli.github.io/Zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "Check Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Open Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "Open Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengths = Array.from({ length: 5 }, () =>
    useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
      stiffness: 400,
      damping: 90,
    })
  );

  const skills = [
  {
    title: "JavaScript / TypeScript",
    description: "Building dynamic, modern web apps with strong fundamentals.",
    link: "https://www.typesriptlang.org",
  },
  {
    title: "Next.js",
    description: "Full-stack React framework for scalable applications.",
    link: "https://nextjs.org",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling for rapid and responsive UI development.",
    link: "https://tailwindcc.com",
  },
  {
    title: "Java",
    description: "Solid foundation in OOP and backend systems.",
    link: "https://www.java.com",
  },
  {
    title: "Figma",
    description: "Designing clean, user-friendly interfaces and prototypes.",
    link: "https://www.figma.com",
  },
  {
    title: "Git & GitHub",
    description: "Version control, collaboration, and open-source contribution.",
    link: "https://github.com",
  },
];

  return (
    <>
      <Navbar>
        <NavBody>
          <Link href="/">
            <NavbarLogo />
          </Link>
          <NavItems items={navLinks} />
          <div className="ml-auto hidden lg:flex space-x-4">
            <NavbarButton
              href="https://zarmilli.github.io/Squarre"
              variant="secondary"
            >
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileOpen}
            onClose={() => setIsMobileOpen(false)}
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-neutral-700 dark:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="https://zarmilli.github.io/Squarre"
              variant="secondary"
            >
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <HeroParallax products={products} />

      {/* Sticky scroll section with animation */}
      <div ref={ref} className="relative h-[400vh]">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title="About Me"
          description="I'm a 21 year old self-taught developer. I started coding in 2022 and have been on a journey to learn and grow ever since. My passion lies in creating dynamic, modern, and visually appealing web applications. which bridge the gap between functionality and aesthetics. I love experimenting with new technologies and pushing the boundaries of what's possible in web development."
        />
      </div>

      <section id="skills" className="bg-black py-20 mt-40">
          <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
            My Skills
          </h2>
          <HoverEffect items={skills} />
        </div>
      </section>

      {/* Background lines */}
      <section id="background-lines">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Why Hire Me?
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            As a passionate and driven software developer, I bring creativity, adaptability, and a strong problem-solving mindset to every project. My commitment to continuous learning and delivering high-quality solutions makes me a valuable asset to any team. I thrive in collaborative environments and am dedicated to helping companies achieve their goals through innovative technology.
          </p>
          <a
            href="/public/ThubeResume.pdf"
            download
            className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-neutral-800 transition z-30 relative"
          >
            Download My Resume
          </a>
        </BackgroundLines>
      </section>

      <footer className="relative bg-black overflow-hidden h-[200px]">
        <div className="relative z-10 text-center text-white pt-20 pb-40">
          <h2 className="text-3xl font-bold mb-4">Footers shouldn't be boring</h2>
          <p className="text-sm text-neutral-400">
            © 2025 Thubelihle Zulu. All rights reserved.
          </p>
        </div>

        <Spotlight />
      </footer>
    </>
  );
}
