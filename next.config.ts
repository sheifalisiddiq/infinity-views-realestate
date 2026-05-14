import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/properties.html",
        destination: "/properties",
        permanent: true,
      },
      {
        source: "/property-single.html",
        destination: "/property-single",
        permanent: true,
      },
      {
        source: "/buy.html",
        destination: "/buy",
        permanent: true,
      },
      {
        source: "/rent.html",
        destination: "/rent",
        permanent: true,
      },
      {
        source: "/off-plan.html",
        destination: "/off-plan",
        permanent: true,
      },
      {
        source: "/insights.html",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/hot-offers.html",
        destination: "/hot-offers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
