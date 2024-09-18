/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: "https://inventories-node-js.onrender.com",
    JWT_KEY: "inventory_app_jwt",
  },
};

export default nextConfig;
