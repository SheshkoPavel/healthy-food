/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    const url = process.env.FUNCTION_BASE_URL
    const signalRUrl = process.env.SIGNALR_HUB_URL

    return [
      {
        source: '/api/functions/:path*',
        destination: `${url}/api/functions/:path*`,
      },
      {
        source: '/Hub/:path*',
        destination: `${signalRUrl}/Hub/:path*`,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.contentstack.io',
        // port: '',
        pathname: '/v3/assets/**',
      },
      {
        protocol: 'http',
        hostname: 'pbs.twimg.com',
        // port: '',
        pathname: '**',
        // pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: process.env.IMAGES_HOST_NAME || '',
        // port: '',
        pathname: '/api/functions/**/**',
      },
    ],
  },
  env: {
    PRODUCTION: process.env.PRODUCTION,
    HOST_URL: process.env.HOST_URL,
    FUNCTION_URL: process.env.FUNCTION_URL,
    PORTAL_URL: process.env.PORTAL_URL,
    FUNCTION_BASE_URL: process.env.FUNCTION_BASE_URL,
    AUTH_API_KEY: process.env.AUTH_API_KEY,
    MEMBER_API_KEY: process.env.MEMBER_API_KEY,
    SIGNALR_HUB_URL: process.env.SIGNALR_HUB_URL,
    SEN_SOURCE_HUB: process.env.SEN_SOURCE_HUB,
    CATERED_EVENT_HUB: process.env.CATERED_EVENT_HUB,
    IMAGES_HOST_NAME: process.env.IMAGES_HOST_NAME,
  }
}

module.exports = nextConfig
