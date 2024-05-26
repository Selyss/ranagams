import { ModeToggle } from "@/components/mode-toggle";
import { InputOTPControlled } from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="">
        <InputOTPControlled />
      </div>
    </>
  );
}
