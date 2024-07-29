import { ModeToggle } from "@/components/mode-toggle";
import { SearchBox } from "@/components/SearchBox";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="container relative flex-1 flex flex-col justify-center items-center">
        <section className="mx-auto flex max-w-[600px] flex-col items-center gap-4 lg:pt-24">
          <h2 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] max-w-[330px] md:min-w-[540px] lg:motion-safe:opacity-100 lg:motion-safe:animate-fade-up">
            Ranagams
          </h2>
          <p className="text-xl text-muted-foreground text-center">
            Tired of losing to your friends on Anagrams? Just enter your letters
            and you'll get an ordered list of all possible anagrams! Fast and
            easy, you'll never lose again!
          </p>
          <SearchBox />
        </section>
      </div>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </main>
  );
}
