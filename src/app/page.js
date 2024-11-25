import FormSearch from "@/components/form/FormSearch";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full mobile:pt-12 tablet:pt-24 desktop:pt-12 pt-[clamp(2.5rem,0.5634rem_+_6.1972vw,8rem)] ">
          <div className="container mx-auto mobile:px-4 tablet:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center ">
              <div className="space-y-2">
                <Image
                  width={400}
                  height={400}
                  alt="Logo"
                  className="w-full max-w-xs mx-auto h-auto object-contain"
                  src="/logo.webp"
                />
                <div className="space-y-4">
                  <h1
                    className={cn(
                      "mobile:text-3xl tablet:text-4xl desktop:text-5xl text-6xl font-sans font-semibold text-red",
                    )}
                  >
                    Selamat datang di Kamus Gen Z
                  </h1>
                  <p
                    className={cn(
                      "mx-auto max-w-[700px] text-gray-500 text-xl dark:text-gray-400 font-sans font-normal",
                    )}
                  >
                    Cari bahasa gaul Gen Z beserta artinya.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <FormSearch
                  placeholder="Cari kata gaul..."
                  useButton={true}
                  newClassname="rounded-full border border-mauve"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
