export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { neon: "#00e0ff", dark: "#0a0f1f", accent: "#8b5cf6" },
      fontFamily: { orbitron: ["Orbitron","sans-serif"], inter: ["Inter","sans-serif"] },
      boxShadow: { neon: "0 0 20px rgba(0,224,255,0.35)" }
    },
  },
  plugins: [],
}
