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
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";
import { PinContainer } from "@/components/3d-pin";

import React, { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Team", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <Link href="/">
            <NavbarLogo />
          </Link>
          <NavItems items={navLinks} />
          <div className="ml-auto hidden lg:flex space-x-4">
            <NavbarButton href="https://zarmilli.github.io/Squarre" variant="secondary">
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <Link href="/">
              <NavbarLogo />
            </Link>
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
            <NavbarButton href="https://zarmilli.github.io/Squarre" variant="secondary">
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero */}
      <section id="projects-hero">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-20 pb-10">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl font-sans font-bold tracking-tight">
            My Projects
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            A collection of some of the projects I've worked on, showcasing my skills in web development and design. Each project is a testament to my passion for creating innovative solutions.
          </p>
        </BackgroundLines>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 px-4 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-start">
            
            {/* Project 1 - Squarre */}
            <PinContainer
            title="Squarre"
            href="https://zarmilli.github.io/Squarre"
            containerClassName="flex justify-center"
            >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/90 w-[20rem] h-[22rem]">
                <h3 className="font-bold text-base text-white mb-1">Squarre</h3>
                <p className="text-sm text-slate-400 mb-2">
                A first of it's kind and my most recent project. An agricultural investment app that allows users to invest in agricultural assets while also functioning as a standard virtual bank. Give it a look from your mobile device!
                </p>
                <div className="flex-1 w-full mt-4 rounded-lg overflow-hidden">
                <img
                    src="/images/squarre.jpeg"
                    alt="Squarre preview"
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            </div>
            </PinContainer>

            {/* Project 2 - Zarmilli */}
            <PinContainer
            title="Zarmilli"
            href="https://zarmilli.github.io/Zarmilli"
            containerClassName="flex justify-center"
            >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/90 w-[20rem] h-[22rem]">
                <h3 className="font-bold text-base text-white mb-1">Zarmilli</h3>
                <p className="text-sm text-slate-400 mb-2">
                An interior design studio website built to showcase products to clients. Yes I tried interior design too don't judge me.
                </p>
                <div className="flex-1 w-full mt-4 rounded-lg overflow-hidden">
                <img
                    src="/images/zarmilli.jpeg"
                    alt="Zarmilli preview"
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            </div>
            </PinContainer>

            {/* Project 3 - Thube */}
            <PinContainer
            title="Thube"
            href="https://zarmilli.github.io/Thube"
            containerClassName="flex justify-center"
            >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/90 w-[20rem] h-[22rem]">
                <h3 className="font-bold text-base text-white mb-1">Thube</h3>
                <p className="text-sm text-slate-400 mb-2">
                Literally just about me, who I am, and what I do. This was my first portfolio site, which shows just how much I've grown since then.
                </p>
                <div className="flex-1 w-full mt-4 rounded-lg overflow-hidden">
                <img
                    src="/images/thube.jpeg"
                    alt="Thube preview"
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            </div>
            </PinContainer>
            
        </div>
        </section>


      {/* Footer */}
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
