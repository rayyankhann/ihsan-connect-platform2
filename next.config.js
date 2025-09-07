/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
