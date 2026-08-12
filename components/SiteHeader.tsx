import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          {SITE_NAME}
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link
            href="/privacy-policy"
            aria-current={currentPath === "/privacy-policy" ? "page" : undefined}
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
