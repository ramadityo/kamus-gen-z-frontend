import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const baseMetadata = {
  title: "Kamus Gen Z | IMPHNEN",
  description:
    "Pengen tau kata-kata gen-z yang belum kamu ketahui? Cari disini!",
  url: "https://kamusgenz.vercel.app",
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: "https://kamusgenz.vercel.app/banner.webp",
        alt: "OG Image",
      },
    ],
    siteName: "kamusgenz.vercel.app",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("antialiased bg-white", outfit.variable)}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
