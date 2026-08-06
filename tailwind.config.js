/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F3A5F",
          hover: "#162C49",
          light: "#EAEFF5",
        },
        dark: {
          DEFAULT: "#16181D",
          muted: "#4B5262",
          subtle: "#71798B",
        },
        bg: {
          DEFAULT: "#FAFAF9",
          card: "#FFFFFF",
          subtle: "#F4F4F2",
        },
        accent: {
          DEFAULT: "#2E9E8F",
          hover: "#247E72",
          light: "#EBF6F5",
        },
        border: {
          DEFAULT: "#E5E5E0",
          strong: "#D1D1C9",
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
