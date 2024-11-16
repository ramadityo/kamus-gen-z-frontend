import React, { Suspense } from "react";

import FormResult from "@/components/form/FormResult";

export default function Search() {
    return (
        <div className="w-full mobile:pt-12 tablet:pt-24 desktop:pt-12 pt-[clamp(2.5rem,0.5634rem_+_6.1972vw,8rem)] ">
            <Suspense>
                <FormResult />
            </Suspense>
        </div>
    );
}
