import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  pageExtensions: ["js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
