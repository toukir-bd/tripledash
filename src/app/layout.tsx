import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accountity",
  description: "Accountity- Accounting Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex items-center justify-center min-h-screen bg-linear-90 from-[#FFB800]/[.2] to-[#0047FF]/[.2]">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
