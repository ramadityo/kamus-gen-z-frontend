"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return <h1>Ini hasilnya = {query}</h1>;
}

export default function Search() {
    return (
        <div className="w-full h-screen bg-red">
            <Suspense fallback={<div>Loading...</div>}>
                <SearchContent />
            </Suspense>
        </div>
    );
}
