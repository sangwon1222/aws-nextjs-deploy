import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: [
      "lsw-private-test-bucket.s3-website.ap-northeast-2.amazonaws.com",
      "d1a1zdgqqsy8ds.cloudfront.net",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
