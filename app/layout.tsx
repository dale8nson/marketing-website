import type { Metadata } from "next";
import "./globals.css";
import { AppBar } from "@/components/AppBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased #fafaf9`}
      >
        <AppBar />
        {children}
      </body>
    </html>
  );
}
