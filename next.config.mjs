/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: ["*.loca.lt", "*.ngrok-free.app", "*.ngrok.io"],
  },
};

export default nextConfig;
