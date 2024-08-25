import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-bg": "radial-gradient(42% 53% at 67% 11%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #f5f5f5 24%, #073AFF00 100%),radial-gradient(21% 37% at 30% 44%, #082F4970 2%, #073AFF00 100%),radial-gradient(33% 32% at 45% 54%, #082F4942 2%, #073AFF00 100%),radial-gradient(75% 75% at 175% 61%, #f5f5f5 3%, #F5F5F5D6 100%),radial-gradient(75% 75% at 50% 50%, #082f49 0%, #082f49 100%);",
        "dark-primary-bg": "radial-gradient(42% 53% at 79% 20%, #4C0519FF 1%, #09090BD6 100%),radial-gradient(75% 75% at 42% 53%, #09090B38 1%, #4C0519FF 100%),radial-gradient(21% 37% at 30% 44%, #4c0519 2%, #4c0519 100%),radial-gradient(75% 75% at 50% 50%, #4c0519 0%, #4c0519 99%),radial-gradient(33% 32% at 45% 54%, #4c0519 2%, #4C051991 100%),radial-gradient(18% 28% at 35% 87%, #4c0519 7%, #09090B8A 100%),radial-gradient(31% 43% at 7% 98%, #4c0519 24%, #09090b 100%);",
        "hero-bg": "radial-gradient(18% 28% at 24% 50%, #09090b 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #09090b 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #09090b 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #09090b 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #09090b 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #09090b 7%, #073AFF00 100%),radial-gradient(31% 43% at -17% 107%, #4c0519 1%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #09090b 1%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #082f49 1%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #09090b 18%, #073AFF00 100%),linear-gradient(326deg, #4C0519FF 90%, #09090b 100%);')",
        "home-img": "url('/images/fantasy.jpg')"
      },
    },
    fontFamily: {
      'sans': ["Spicy Rice", 'serif']
    }
  },
  plugins: [],
};
export default config;
