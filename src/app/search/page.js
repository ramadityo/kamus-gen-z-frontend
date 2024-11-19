import FormResult from "@/components/form/FormResult";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Search() {
  return (
    <div className="w-full mobile:pt-12 tablet:pt-24 desktop:pt-12 pt-[clamp(2.5rem,0.5634rem_+_6.1972vw,8rem)] ">
      <Suspense
        fallback={
          <div className="flex justify-center items-center flex-col space-y-6">
            <Skeleton className="w-[450px] h-[200px] rounded-md bg-gray-200" />
            <Skeleton className="w-[450px] h-[40px] rounded-full bg-gray-200" />
          </div>
        }
      >
        <FormResult />
      </Suspense>
    </div>
  );
}
