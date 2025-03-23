/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  // distDir: "build",
  images: {
    domains: [
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
    ], // Notion & AWS
  },
};

export default nextConfig;
