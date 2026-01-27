import { ARTICLES_DB } from "@/lib/articlesData";

/**
 * todo: Dynamic Metadata Generation
 * description: Generate SEO metadata for each article page based on slug
 */
export async function generateMetadata({ params }) {
  const article = ARTICLES_DB.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "নিবন্ধ পাওয়া যায়নি",
      description: "অনুরোধকৃত নিবন্ধটি খুঁজে পাওয়া যায়নি।",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      article.category,
      "আর্থ্রাইটিস",
      "বাতরোগ",
      "জয়েন্ট ব্যথা",
      article.type,
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url:
            typeof article.coverImage === "string"
              ? article.coverImage
              : "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [
        typeof article.coverImage === "string"
          ? article.coverImage
          : "/og-image.jpg",
      ],
    },
    alternates: {
      canonical: `https://arthritiscare.com.bd/articles/${article.slug}`,
    },
  };
}

/**
 * todo: Static Params Generation
 * description: Pre-generate static params for all articles for better SEO
 */
export async function generateStaticParams() {
  return ARTICLES_DB.map((article) => ({
    slug: article.slug,
  }));
}

export { default } from "./ArticleDetailClient";
