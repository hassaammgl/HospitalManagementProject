import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/client/Header";

export const metadata: Metadata = {
  title: "Hospitals Management System",
  description: "Created by Hassaam Mughal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
