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
import { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/spotlight-new";
import { HeroParallax } from "@/components/hero-parallax";

const products = [
    { title: "Instagram", link: "https://www.instagram.com/thee.goldenone", thumbnail: "/images/insta.png" },
    { title: "Email me", link: "mailto:tlihle351@gmail.com", thumbnail: "/images/email.png" },
    { title: "Call me", link: "tel:+27719692533", thumbnail: "/images/call.png" },
    { title: "Instagram", link: "https://www.instagram.com/thee.goldenone", thumbnail: "/images/insta.png" },
    { title: "Email me", link: "mailto:tlihle351@gmail.com", thumbnail: "/images/email.png" },
    { title: "Text me", link: "https://wa.me/+27682734215", thumbnail: "/images/chat.png" },
    { title: "Instagram", link: "https://www.instagram.com/thee.goldenone", thumbnail: "/images/insta.png" },
    { title: "Text me", link: "https://wa.me/+27682734215", thumbnail: "/images/chat.png" },
    { title: "Email me", link: "mailto:tlihle351@gmail.com", thumbnail: "/images/email.png" },
    { title: "Instagram", link: "https://www.instagram.com/thee.goldenone", thumbnail: "/images/insta.png" },
    { title: "Email me", link: "mailto:tlihle351@gmail.com", thumbnail: "/images/email.png" },
    { title: "Call me", link: "tel:+27719692533", thumbnail: "/images/call.png" },
    { title: "Instagram", link: "https://www.instagram.com/thee.goldenone", thumbnail: "/images/insta.png" },
    { title: "Text me", link: "https://wa.me/+27682734215", thumbnail: "/images/chat.png" },
    { title: "Call me", link: "tel:+27719692533", thumbnail: "/images/call.png" },
  ];

export default function ContactPage() {
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

      {/* HeroParallax */}
      <HeroParallax products={products} />

      {/* Footer */}
      <footer className="relative bg-black overflow-hidden h-[200px]">
        <div className="relative z-10 text-center text-white pt-20 pb-40">
          <h2 className="text-3xl font-bold mb-4">Yey! You're gonna hire me!</h2>
          <p className="text-sm text-neutral-400">
            © 2025 Thubelihle Zulu. All rights reserved.
          </p>
        </div>
        <Spotlight />
      </footer>
    </>
  );
}
