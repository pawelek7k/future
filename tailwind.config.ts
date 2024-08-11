import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {

    backgroundImage: {
      "hero-bg": "radial-gradient(18% 28% at 24% 50%, rgba(245, 245, 245, 0.1) 7%, rgba(7, 58, 255, 0) 100%),radial-gradient(18% 28% at 18% 71%, rgba(245, 245, 245, 0.1) 6%, rgba(7, 58, 255, 0) 80%),radial-gradient(70% 53% at 36% 76%, rgba(245, 245, 245, 0.05) 0%, rgba(7, 58, 255, 0) 80%),radial-gradient(42% 53% at 15% 94%, rgba(255, 255, 255, 0.1) 7%, rgba(7, 58, 255, 0) 80%),radial-gradient(42% 53% at 34% 72%, rgba(255, 255, 255, 0.1) 7%, rgba(7, 58, 255, 0) 80%),radial-gradient(18% 28% at 35% 87%, rgba(255, 255, 255, 0.1) 7%, rgba(7, 58, 255, 0) 100%),radial-gradient(31% 43% at 7% 98%, rgba(255, 255, 255, 0.1) 24%, rgba(7, 58, 255, 0) 100%),radial-gradient(21% 37% at 72% 23%, rgba(245, 245, 245, 0.05) 24%, rgba(7, 58, 255, 0) 100%),radial-gradient(35% 56% at 91% 74%, rgba(76, 5, 25, 0.1) 0%, rgba(7, 58, 255, 0) 100%),radial-gradient(74% 86% at 67% 38%, rgba(245, 245, 245, 0.4) 24%, rgba(7, 58, 255, 0) 100%),linear-gradient(125deg, rgba(76, 5, 25, 0.3) 1%, rgba(76, 5, 25, 0.2) 80%);"
      ,
      "hero-marketing-bg": "linear-gradient(0deg, rgba(11,9,5,0.7455357142857143) 0%, rgba(10,8,5,1) 91%), url('/images/hero-moon.jpg')",
      "bg-settings": "radial-gradient(42% 53% at 67% 11%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #f5f5f5 24%, #073AFF00 100%),radial-gradient(21% 37% at 30% 44%, #082F4970 2%, #073AFF00 100%),radial-gradient(33% 32% at 45% 54%, #082F4942 2%, #073AFF00 100%),radial-gradient(75% 75% at 175% 61%, #f5f5f5 3%, #F5F5F5D6 100%),radial-gradient(75% 75% at 50% 50%, #082f49 0%, #082f49 100%);",
      "dark-bg-settings": "radial-gradient(42% 53% at 79% 20%, #4C0519FF 1%, #09090BD6 100%),radial-gradient(75% 75% at 42% 53%, #09090B38 1%, #4C0519FF 100%),radial-gradient(21% 37% at 30% 44%, #4c0519 2%, #4c0519 100%),radial-gradient(75% 75% at 50% 50%, #4c0519 0%, #4c0519 99%),radial-gradient(33% 32% at 45% 54%, #4c0519 2%, #4C051991 100%),radial-gradient(18% 28% at 35% 87%, #4c0519 7%, #09090B8A 100%),radial-gradient(31% 43% at 7% 98%, #4c0519 24%, #09090b 100%);"
    },
    fontFamily: {
      'sans': ["Protest Revolution", 'sans-serif']
    }
  },
  plugins: [nextui()],
};
export default config;
