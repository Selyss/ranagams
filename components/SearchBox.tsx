"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { REGEXP_ONLY_CHARS } from "input-otp";

type AnagramResponse = {
  [word: string]: number;
};

export function InputOTPControlled() {
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
      <div className="text-center text-sm">
        {value === null ? (
          <>Enter your anagram.</>
        ) : (
          <>
            <h3>Possible anagrams:</h3>
            <ul>
              {Object.entries(value).map(([word, score]) => (
                <li key={word}>
                  {word}: {score}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
