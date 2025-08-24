/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
