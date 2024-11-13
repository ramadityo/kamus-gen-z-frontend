import Menu from "@/components/navbar/Menu";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { OutfitReg, OutfitMed, OutfitSemBold, OutfitBold } from "@/font/fonts";
import FormSearch from "@/components/form/FormSearch";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-6 desktop:px-4 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    {/* <span className="sr-only text-blue">Acme Inc</span> */}
                    <h1 className={`${OutfitBold.className} text-2xl`}>Ini Logo</h1>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full mobile:py-12 tablet:py-24 desktop:py-32 py-48">
                    <div className="container mx-auto mobile:px-4 tablet:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center ">
                            <div className="space-y-2">
                                <img alt="Logo" className="mx-auto h-24 w-24" src="/placeholder.svg?height=96&width=96" />
                                <div className="space-y-4">
                                    <h1 className={`mobile:text-3xl tracking-tighter tablet:text-4xl desktop:text-5xl text-6xl ${OutfitSemBold.className} text-red`}>Selamat datang di Kamus Gen Z</h1>
                                    <p className={`mx-auto max-w-[700px] text-gray-500 text-xl dark:text-gray-400 ${OutfitReg.className}`}>Cari bahasa gaul Gen Z beserta artinya.</p>
                                </div>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <FormSearch />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
