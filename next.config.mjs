/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    unsplash_client_id: "-P4bcnxdZLfcs8H3qU3InIvj5vkCAZb3uERTy4jlhm4"
  }
};

export default nextConfig;
