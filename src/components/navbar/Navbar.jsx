import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-6 py-2 desktop:px-4 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        {/* <span className="sr-only text-blue">Acme Inc</span> */}
        <Image src="/logo.webp" width={60} height={60} alt="logo" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
