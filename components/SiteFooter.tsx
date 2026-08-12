import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
        <nav className="site-footer__links" aria-label="Footer">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
