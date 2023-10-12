/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  serverRuntimeConfig: {
    LOCAL_URL: "http://localhost:3000",
    NEXT_PUBLIC_VERCEL_URL: "https://toraneko.vercel.app",
  },
};

module.exports = nextConfig;
