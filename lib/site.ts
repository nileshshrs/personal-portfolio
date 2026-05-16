import { headers } from "next/headers";

export const siteName = "Nilesh Shrestha";
export const siteDescription =
  "Frontend Engineer portfolio showcasing experience, projects, and work built with React, Next.js, TypeScript, and modern UI tooling.";

export async function getSiteOrigin() {
  const headersList = await headers();
  const host =
    headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "localhost:3000";
  const protocol =
    headersList.get("x-forwarded-proto") ??
    (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

  return `${protocol}://${host}`;
}
