import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com",
            },
            {
                protocol: "https",
                hostname: 'minio-api-electricilies.kevinnitro.id.vn',
            }
        ]
    }
};

export default nextConfig;
