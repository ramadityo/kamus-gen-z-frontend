"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="space-y-4">
        <h1 className="font-sans font-bold capitalize text-center text-blue mobile:text-3xl tablet:text-4xl desktop:text-5xl text-9xl">
          Error!
        </h1>
        <p className="font-sans font-medium text-red text-center text-3xl">
          Sepertinya terjadi kesalahan, silahkan coba lagi!
        </p>
      </div>
      <Button
        className="bg-sapphire hover:bg-blue/90 rounded-full font-bold"
        onClick={reset}
      >
        Coba lagi
      </Button>
    </div>
  );
}
