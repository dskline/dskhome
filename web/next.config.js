/** @type {import('next').NextConfig} */
const nextConfig = {
  // To bypass prisma client issues and speed up deployment times
  // linting will be ensured during CI/CD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
