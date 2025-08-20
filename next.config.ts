import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

/** @type {import('next').NextConfig} */

module.exports = nextConfig;
