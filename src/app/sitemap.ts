import type { MetadataRoute } from "next";
import { blogPosts, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/projects", "/insights", "/about", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const blogRoutes = blogPosts.map((post) => `/insights/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-06-11"),
    changeFrequency: route.startsWith("/insights") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
