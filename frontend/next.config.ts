import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors:true,
  },
  async rewrites(){
    return[
      {
      source:"/api/:path*",
      destination: "https://digital-cattle-marketplace.onrender.com/:path*"
      },
    ]
  }
};



export default nextConfig;
