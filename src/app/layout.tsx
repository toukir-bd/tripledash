import type { Metadata } from "next";
import "./globals.scss";

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
      <body className={`antialiased`}>
        <main className="flex items-center justify-center min-h-screen bg-linear-90 from-[#FFB800]/[.2] to-[#0047FF]/[.2]">
          {children}
        </main>
      </body>
    </html>
  );
}
