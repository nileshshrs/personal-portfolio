import type { Metadata } from "next";
import "./globals.scss";



export const metadata: Metadata = {
  title: "Nilesh's Portfolio",
  description: "Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-400 leading-relaxed antialiased selection:bg-purple-300 selection:text-purple-900">{children}</body>
    </html>
  );
}
