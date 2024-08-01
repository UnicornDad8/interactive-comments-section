import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Interactive Comments Section - Frontend Mentor Challenge",
  description:
    "Interactive Comments Section using Next JS and TypeScript - Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
