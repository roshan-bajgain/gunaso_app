import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Create the plugin
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* other config options */
};

export default withNextIntl(nextConfig);
