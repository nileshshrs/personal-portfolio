import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import Experience from "@/components/Home/Experience";
import Introduction from "@/components/Home/Introduction";
import Project from "@/components/Home/Project";
import { getSiteOrigin, siteDescription, siteName } from "@/lib/site";

export default async function Home() {
  const siteOrigin = await getSiteOrigin();
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Frontend Engineer",
    url: siteOrigin,
    description: siteDescription,
    sameAs: [
      "https://github.com/nileshshrs",
      "https://www.linkedin.com/in/nileshshrs/",
      "https://www.instagram.com/nileshshrs_/",
      "https://www.facebook.com/nilesh.shrestha.3152/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteOrigin,
    description: siteDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              ...personJsonLd,
              url: siteOrigin,
              sameAs: personJsonLd.sameAs,
            },
            {
              ...websiteJsonLd,
              url: siteOrigin,
            },
          ]),
        }}
      />
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Introduction />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Project />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
