import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "ShopAI is an AI-powered lead qualification and customer engagement automation project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="site-shell">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
