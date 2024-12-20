"use client";

import GetData from "@/api/GetData";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import FormSearch from "./FormSearch";

function FormResult() {
  const [word, setWord] = useState("");
  const [desc, setDesc] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    async function fetchData() {
      const data = await GetData(query);

      if (data && data.data && data.data.length > 0) {
        const dataWord = data.data[0].word;
        const dataDesc = data.data[0].wordDescription;
        setWord(dataWord);
        setDesc(dataDesc);
      } else {
        setWord("404");
        setDesc("Belum ada cuy, coba cari yang lain.");
      }
    }
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="space-y-4">
        <h1 className="font-sans font-bold capitalize text-center text-blue mobile:text-3xl tablet:text-4xl desktop:text-5xl text-9xl">
          {word}
        </h1>
        <p className="font-sans font-medium text-red text-center text-3xl">
          {desc}
        </p>
      </div>
      <div
        className={cn(
          "transition-all ease-in-out delay-100",
          word && desc
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4",
        )}
      >
        <FormSearch
          placeholder="Cari kata gaul lagi..."
          useButton={false}
          newClassname="w-[400px] rounded-full border border-mauve"
        />
      </div>
    </div>
  );
}

export default FormResult;
