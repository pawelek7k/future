/** @type {import('next').NextConfig} */
const nextConfig = {
  rules: {
    "no-unused-vars": "warn",
    "no-unused-imports/no-unused-imports": "warn",
  },
  plugins: ["no-unused-imports"],
};

export default nextConfig;
