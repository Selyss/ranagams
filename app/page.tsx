import { ModeToggle } from "@/components/mode-toggle";
import { SearchBox } from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="mx-auto flex max-w-[980px] justify-center pt-6 pb-4">
        <SearchBox />
      </div>
    </>
  );
}
