import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://dontlogin.vercel.app",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 1,
        },
        {
            url: "https://dontlogin.vercel.app/upload",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,
        },
        {
            url: "https://dontlogin.vercel.app/download",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,
        },
        {
            url: "https://dontlogin.vercel.app/rules",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.5,
        },
    ];
}
