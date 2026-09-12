import type { MetadataRoute } from "next";
import { blogPosts, projectTypes, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/projects", "/insights", "/about", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const projectTypeRoutes = projectTypes.map((projectType) => `/projects/${projectType.slug}`);

  const staticAndServiceEntries = [...staticRoutes, ...serviceRoutes, ...projectTypeRoutes].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date("2026-06-29"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : route.startsWith("/projects/") ? 0.85 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const blogEntries = blogPosts.map((post) => ({
    url: `${site.domain}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticAndServiceEntries, ...blogEntries];
}
