import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VMS - Visitor Management System",
  description: "Osborne Estate Visitor Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <header className="p-4 shadow-sm shadow-b bg-background text-text-primary">
          <Navbar />
        </header>
        <main className=" mx-auto w-full lg:w-[70%] px-2 lg:px-0 flex flex-col min-h-screen justify-between">
          {children}
        </main>
        <footer className="p-4 border-t text-center">
          &copy; {new Date().getFullYear()} Visitor Management System. All
          rights reserved.
        </footer>
      </body>
    </html>
  );
}
