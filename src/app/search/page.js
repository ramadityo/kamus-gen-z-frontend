"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <div className="w-full h-screen bg-red">
            <h1>Ini hasilnya = {query}</h1>
        </div>
    );
}
