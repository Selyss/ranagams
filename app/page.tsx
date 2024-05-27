import { ModeToggle } from "@/components/mode-toggle";
import { SearchBox } from "@/components/SearchBox";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="container relative flex-1 flex flex-col justify-center items-center">
        <div className="absolute top-2 right-2">
          <ModeToggle />
        </div>
        <section className="mx-auto flex max-w-[500px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] max-w-[330px] md:min-w-[540px] lg:motion-safe:opacity-100 lg:motion-safe:animate-fade-up">
            Ranagams
          </h1>
          <SearchBox />
        </section>
      </div>
    </main>
  );
}
