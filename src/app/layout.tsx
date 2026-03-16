import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prologue — Where Stories Begin",
  description:
    "Award-winning title sequences, motion design, and visual storytelling for film, television, and streaming — crafted by world-class artists.",
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
