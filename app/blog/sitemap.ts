import { getPublishedBlogs } from "@/lib/notion";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "https://www.mrjeevan.dev";
  const blogs = await getPublishedBlogs();
  return blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedDate),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
