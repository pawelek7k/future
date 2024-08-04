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
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "bg-settings": "radial-gradient(42% 53% at 67% 11%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #f5f5f5 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #f5f5f5 24%, #073AFF00 100%),radial-gradient(21% 37% at 30% 44%, #082F4970 2%, #073AFF00 100%),radial-gradient(33% 32% at 45% 54%, #082F4942 2%, #073AFF00 100%),radial-gradient(75% 75% at 175% 61%, #f5f5f5 3%, #F5F5F5D6 100%),radial-gradient(75% 75% at 50% 50%, #082f49 0%, #082f49 100%);",
      "dark-bg-settings": "radial-gradient(circle, rgba(9, 9, 11, 1) 0%, rgba(76, 5, 25, 1) 21%, rgba(9, 9, 11, 1) 35%)"
    },
    fontFamily: {
      'sans': ["Protest Revolution", 'sans-serif']
    }
  },
  plugins: [nextui()],
};
export default config;
