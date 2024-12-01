import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'img.daisyui.com',
         port: '',
       },
       {
         protocol: 'https',
         hostname: 'res.cloudinary.com',
         port: '',
       },
       {
         protocol: 'https',
         hostname: 'lh3.googleusercontent.com',
         port: '',
       }
     ]
  }
};

export default nextConfig;