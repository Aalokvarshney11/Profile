/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#edf5ff",
        ink: {
          DEFAULT: "#0c1017",
          muted: "#455163",
          subtle: "#6b7c93",
        },
        grid: {
          line: "rgba(180, 205, 235, 0.35)",
          circle: "rgba(165, 195, 230, 0.45)",
        },
      },
      fontFamily: {
        sans: ["var(--font-albert)", "Albert Sans", "sans-serif"],
        mono: ["var(--font-fragment)", "Fragment Mono", "monospace"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
