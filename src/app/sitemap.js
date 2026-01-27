import { ARTICLES_DB } from "@/lib/articlesData";

/**
 * todo: XML Sitemap Generator
 * description: Generates dynamic sitemap for search engine crawling with all articles and static pages
 */
export default function sitemap() {
  const baseUrl = "https://arthritiscare.com.bd";

  /**
   * todo: Static Pages Configuration
   * description: Define all static pages with their last modified dates and priority
   */
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/writer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/site-map`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  /**
   * todo: Dynamic Article Pages
   * description: Generate sitemap entries for all articles from database
   */
  const articlePages = ARTICLES_DB.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  /**
   * todo: Category Pages
   * description: Generate sitemap entries for category filtered pages
   */
  const categories = [
    ...new Set(ARTICLES_DB.map((article) => article.category)),
  ];
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/articles?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...categoryPages];
}
