import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="px-6 desktop:px-4 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Image
          width={50}
          height={50}
          alt="Logo"
          className="w-full max-w-xs mx-auto h-auto object-contain"
          src="/logo.webp"
        />
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
  )
}
