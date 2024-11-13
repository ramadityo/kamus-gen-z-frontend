import React, { Suspense } from "react";

import GetQuery from "@/utils/GetQuery";

export default function Search() {
    return (
        <div className="w-full h-screen bg-red">
            <Suspense fallback={<div>Loading...</div>}>
                <p>
                    Search: <GetQuery />
                </p>
            </Suspense>
        </div>
    );
}
