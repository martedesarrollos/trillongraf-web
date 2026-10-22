/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'trillongraf-web.vercel.app',
          },
        ],
        destination: 'https://trillongraf.com.ar/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
