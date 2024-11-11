import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "بالمصري",
  description:
    "بالمصري: منصة سوق مخصصة لدعم العلامات التجارية المحلية في مصر لبيع منتجاتها عبر الإنترنت بسهولة، مع توفير خدمات الشحن، ودعم العملاء، والإعلانات لزيادة الانتشار وجذب عملاء جدد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
    >
      <body
        className={cn(
          "min-h-screen text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
