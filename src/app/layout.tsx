import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilmTitles — Your Production Team's Creative Team",
  description:
    "World-class title sequences, motion graphics, and visual identities for film, TV, and streaming — powered by top-tier talent and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
