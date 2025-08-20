// 🛑 DEV WARNING PATCH
if (process.env.NODE_ENV === "development") {
  const suppressedErrors = [
    "Received `true` for a non-boolean attribute", // example warning
    "React does not recognize the",                // prop warning
  ];

  const originalError = console.error;
  console.error = (...args) => {
    if (suppressedErrors.some((msg) => args[0]?.toString().includes(msg))) {
      return;
    }
    originalError(...args);
  };
}


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// ⬇️ Patch console.error to silence specific warnings in dev mode
if (process.env.NODE_ENV === "development") {
  const suppressedErrors = [
    "Received `true` for a non-boolean attribute", // Example warning
  ];

  const originalError = console.error;
  console.error = (...args) => {
    if (suppressedErrors.some((msg) => args[0]?.toString().includes(msg))) {
      return; // ignore
    }
    originalError(...args); // still log other errors
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imperium Gold Capital",
  description: "Inspired by FNB App Acadamy competition",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
