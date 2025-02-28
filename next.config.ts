/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/businessweb2',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
