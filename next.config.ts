import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    cpus: 2, // cap build workers; try 4 if 2 feels slow
  },
};

export default nextConfig;
