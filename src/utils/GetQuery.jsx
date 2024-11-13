"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GetQuery() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>{query}</Suspense>
        </>
    );
}

export default GetQuery;
