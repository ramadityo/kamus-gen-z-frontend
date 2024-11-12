import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
    title: "Kamus Gen Z | IMPHNEN",
    description: "Pengen tau kata-kata gen-z yang belum kamu ketahui? Cari disini!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
