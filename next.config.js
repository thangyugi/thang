/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
})

const nextConfig = withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['media.graphassets.com'],
        formats: ['image/webp'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        scrollRestoration: false,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
})

module.exports = nextConfig
