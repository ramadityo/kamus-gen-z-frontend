import Menu from "@/components/navbar/Menu";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-screen bg-background">
            <nav className="w-5/6 py-5 mx-auto flex items-center justify-between">
                <h1 className="text-3xl text-blue">Ini Judul</h1>

                <Menu />
            </nav>
        </div>
    );
}
