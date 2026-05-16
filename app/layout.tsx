import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import Script from "next/script";
import { InitialLoader } from "@/components/ui/Loader/InitialLoader";
import { Spotlight } from "@/components/ui/Spotlight/Spotlight";
import { loaderStorageKey } from "@/lib/loader";
import { getSiteOrigin, siteDescription, siteName } from "@/lib/site";
import "./globals.css";
import { Orbs } from "@/components/Home/Orbs";

const forceLoaderVisibleInDev = process.env.NODE_ENV !== "production";

const poppins = localFont({
  display: "swap",
  src: [
    { path: "../public/fonts/Poppins-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Poppins-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/Poppins-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Poppins-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../public/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Poppins-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Poppins-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../public/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Poppins-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteOrigin = await getSiteOrigin();

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    keywords: [
      "Nilesh Shrestha",
      "Frontend Engineer",
      "Portfolio",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "UI Development",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName,
      title: siteName,
      description: siteDescription,
      images: [
        {
          url: "/images/3_HD.webp",
          width: 1200,
          height: 630,
          alt: `${siteName} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: siteDescription,
      images: ["/images/3_HD.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const loaderSeen = cookieStore.get(loaderStorageKey)?.value === "true";
  const shouldShowLoader = forceLoaderVisibleInDev || !loaderSeen;
  const loaderStateScript = forceLoaderVisibleInDev
    ? "(function(){document.documentElement.dataset.loaderActive='true';})()"
    : "(function(){try{var cookies=document.cookie.split('; ');var seen=false;for(var i=0;i<cookies.length;i++){if(cookies[i].indexOf('" +
      loaderStorageKey +
      "=')===0){seen=true;break;}}document.documentElement.dataset.loaderActive=seen?'false':'true';}catch(e){document.documentElement.dataset.loaderActive='true';}})();";

  return (
    <html
      lang="en"
      data-loader-active={shouldShowLoader ? "true" : "false"}
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="portfolio-loader-state" strategy="beforeInteractive">
          {loaderStateScript}
        </Script>
        <InitialLoader />
        <Spotlight />
        {children}
        <Orbs />
      </body>
    </html>
  );
}
