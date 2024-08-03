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
      "bg-settings": "radial-gradient(circle, rgba(245, 245, 245, 1) 0%, rgba(8, 47, 73, 1) 21%, rgba(245, 245, 245, 1) 35%)",
      "dark-bg-settings": "radial-gradient(circle, rgba(9, 9, 11, 1) 0%, rgba(76, 5, 25, 1) 21%, rgba(9, 9, 11, 1) 35%)"
    },
    fontFamily: {
      'sans': ["Protest Revolution", 'sans-serif']
    }
  },
  plugins: [nextui()],
};
export default config;
