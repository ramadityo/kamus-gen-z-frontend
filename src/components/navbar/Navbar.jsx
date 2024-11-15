import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <header className="px-6 desktop:px-4 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                {/* <span className="sr-only text-blue">Acme Inc</span> */}
                <h1 className={`font-sans font-bold text-2xl`}>Ini Logo</h1>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Features
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    About
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                    Contact
                </Link>
            </nav>
        </header>
    );
}
