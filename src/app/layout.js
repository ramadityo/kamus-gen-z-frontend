import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const metadata = {
    title: "Kamus Gen Z | IMPHNEN",
    description: "Pengen tau kata-kata gen-z yang belum kamu ketahui? Cari disini!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased ${outfit.variable}`}>{children}</body>
        </html>
    );
}
