/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      ]
      },
    ]
  },

  // Enable static exports for the App Router.
  output: "export",

  // Set base path. This is the slug of your GitHub repository.
  basePath: "/nextjs-github-pages",

  // Disable server-based image optimization. Next.js does not support
  // dynamic features with static exports.
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig
