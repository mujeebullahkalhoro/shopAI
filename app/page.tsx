import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main id="main-content" className="site-main">
        <div className="page home">
          <h1>{SITE_NAME}</h1>
          <p>
            AI-powered lead qualification and customer engagement automation,
            integrated with Facebook/Meta and n8n workflows.
          </p>
          <Link className="home__cta" href="/privacy-policy">
            View Privacy Policy
          </Link>
        </div>
      </main>
    </>
  );
}
