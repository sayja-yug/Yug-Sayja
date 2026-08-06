/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          void: "#070A12",
          card: "#0B0F19",
          border: "#1E293B",
          cyan: "#00F2FE",
          purple: "#7F00FF",
          emerald: "#10B981",
        },
        primary: {
          DEFAULT: "#00F2FE",
          hover: "#4FACFE",
          light: "rgba(0, 242, 254, 0.1)",
        },
        dark: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
        bg: {
          DEFAULT: "#070A12",
          card: "rgba(15, 23, 42, 0.85)",
          subtle: "rgba(30, 41, 59, 0.6)",
        },
        accent: {
          DEFAULT: "#00F2FE",
          hover: "#4FACFE",
          light: "rgba(0, 242, 254, 0.15)",
        },
        border: {
          DEFAULT: "rgba(51, 65, 85, 0.6)",
          strong: "rgba(0, 242, 254, 0.4)",
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 242, 254, 0.35)',
        'neon-purple': '0 0 20px rgba(127, 0, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
