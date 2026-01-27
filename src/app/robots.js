/**
 * todo: Robots.txt Configuration
 * description: Configure search engine crawler access rules for SEO optimization
 */
export default function robots() {
  const baseUrl = "https://arthritiscare.com.bd";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
