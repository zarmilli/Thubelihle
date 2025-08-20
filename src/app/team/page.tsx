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
import { Carousel, Card } from "@/components/apple-cards-carousel";

import React, { useState } from "react";
import Link from "next/link";

export default function TeamPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  const teamCards = [
    {
      src: "/images/team1.png",
      title: "My business acumen",
      category: "Business Development",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              An entrepreneur at heart
            </span>{" "}
            I have engaged in a plethora of business development tools such as psychology, finance, economics, and entrepreneurship books, documentaries, and conferences with a mission to learn how to create future-forward investment ecosystems. With a background in property development and startup incubation, I bring passion and purpose to any workspace.
          </p>
        </div>
      ),
    },
    {
      src: "/images/team2.png",
      title: "A little fun fact",
      category: "Personality",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              You'd be surprised
            </span>{" "}
            I'm a very dynamic being who loves taking on new challanges that stimulate growth. This is why I have expert level knowledge across multiple fields such as business development, real estate acquisitions, web development, high ticket M&As, and recreational therapy. I am a firm believer in the power of continuous learning and personal growth, and I strive to bring this mindset to every project I undertake.
          </p>
        </div>
      ),
    },
    {
      src: "/images/team3.png",
      title: "How I stay updated",
      category: "AI Integration",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Turning concepts to reality.
            </span>{" "}
            Artificial Intelligence is at the core of Web3, and having the skills to integrate it makes a developer's websites modern and efficient. AI has revolutionised the way users interact with the internet, and a valuable developer should be able to leverage AI tools to enhance user experience and streamline processes within the company's websites.
          </p>
        </div>
      ),
    },
    {
      src: "/images/team4.png",
      title: "My second passion",
      category: "Qualification",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The therapist you need.
            </span>{" "}
            I actually just graduated for a BHSc in Recreation Sciences in April and I'm a qualified Recreational Therapist trained in skills such as inclusive recreation, corporate recreation, as well as team building. This qualification has equipped me with the skills to create inclusive and engaging recreational programs for employees that promote well-being and social interaction. A healthy working environment is a powerful tool for enhancing quality of life for employees, boosting productivity for the company, and I am passionate about using my knowledge to make a positive impact in the social workspace.
          </p>
        </div>
      ),
    },
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

      {/* Hero (BackgroundLines) */}
      <section id="team-hero">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-20 pb-10">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl font-sans font-bold tracking-tight">
            About Your New Hire
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            (wink wink) I am the new hire.
          </p>
        </BackgroundLines>
      </section>

      {/* Team Carousel Section */}
      <section className="relative z-10 py-10">
        <div className="w-full h-full py-10">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Click on card for more
          </h2>
          <Carousel
            items={teamCards.map((card, i) => (
              <Card key={i} index={i} card={card} layout />
            ))}
          />
        </div>
      </section>

      {/* Footer Spotlight */}
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
