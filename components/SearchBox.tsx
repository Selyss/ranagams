"use client";

import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";

import { ScrollArea } from "@/components/ui/scroll-area";
import { REGEXP_ONLY_CHARS } from "input-otp";

type AnagramResponse = {
  [word: string]: number;
};

export function SearchBox() {
  const [value, setValue] = React.useState<AnagramResponse | null>(null);

  const handleComplete = async (value: string) => {
    try {
      const response = await fetch(
        `https://ranagams-api.vercel.app?string=${value}`
      );
      const result = await response.json();
      setValue(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const groupAnagramsByLength = (anagrams: AnagramResponse) => {
    const grouped: { [length: number]: string[] } = {};

    for (const word of Object.keys(anagrams)) {
      const length = word.length;
      if (!grouped[length]) {
        grouped[length] = [];
      }
      grouped[length].push(word);
    }

    return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
  };

  return (
    <div className="space-y-2 flex flex-col items-center">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_CHARS}
        spellCheck={false}
        autoFocus={true}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center p-4" inputMode="text">
        {value === null ? (
          <>Enter your anagram.</>
        ) : (
          <Card className="text-left p-6">
            <h3 className="text-xl font-semibold leading-tight tracking-tighter lg:leading-[1.1] max-w-[330px] md:min-w-[540px] lg:motion-safe:opacity-100 lg:motion-safe:animate-fade-up">
              {Object.keys(value).length} results found
            </h3>
            <Separator className="my-4" />
            <ScrollArea className="h-[300px]">
              {groupAnagramsByLength(value).map(([length, words]) => (
                <div key={length}>
                  <h4 className="font-semibold">{length} Letter Words</h4>
                  <p>{words.join(" ")}</p>
                  <div className="pb-2"></div>
                </div>
              ))}
            </ScrollArea>
          </Card>
        )}
      </div>
    </div>
  );
}
