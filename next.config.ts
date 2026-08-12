import type { NextConfig } from "next";

/** Set automatically in the GitHub Actions deploy workflow. */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "shopAI";

const nextConfig: NextConfig = {
  // Static export + basePath only for GitHub Pages.
  // On Vercel, use a normal Next.js build (no basePath).
  ...(isGithubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
