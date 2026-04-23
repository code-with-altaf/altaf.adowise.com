import { getBlogPosts } from "@/data/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mohammadaltaf.dev";
  const posts = await getBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString().split("T")[0],
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogPosts];
}
