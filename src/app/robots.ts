import type { MetadataRoute } from "next";
import { env } from "@/env/server";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === "production";
  const appUrl = env.NEXT_PUBLIC_APP_URL;

  return {
    rules: isProd
      ? { userAgent: "*", allow: "/", disallow: ["/api/"] }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${appUrl}/sitemap.xml`,
    host: appUrl,
  };
}
