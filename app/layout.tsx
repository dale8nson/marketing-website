import type { Metadata } from "next";
import "./globals.css";
import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Smarcomms",
  description: "Grow your business with Smarcomms social media management services from just $99/mo. Sign up in 2 minutes. Zero-Risk, Money-Back Guarantee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#fafaf9] min-h-screen w-screen relative font-[manrope] `}>
        <AppBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
