"use client";

import { useSearchParams } from "next/navigation";

function GetQuery() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return <>{query}</>;
}

export default GetQuery;
