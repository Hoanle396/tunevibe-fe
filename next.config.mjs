/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['localhost']
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}

export default nextConfig;
