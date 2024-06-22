import type { Metadata } from "next";
import { Abril_Fatface, Alumni_Sans } from "next/font/google";
import "./globals.css";

const abrilFatFace = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--abrilFatFaceFont",
});

export const alumni = Alumni_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--alumniFont",
});

export const metadata: Metadata = {
  title: "Todolist",
  description: "add necessary tasks to todos list",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abrilFatFace.variable} ${alumni.variable}`}>{children}</body>
    </html>
  );
}
