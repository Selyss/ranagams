"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { REGEXP_ONLY_CHARS } from "input-otp";

export function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_CHARS}
        spellCheck={false}
        value={value}
        onChange={(value) => setValue(value)}
        autoFocus={true}
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
      {/* <div className="text-center text-sm">
        {value === "" ? <>Enter your anagram.</> : <>You entered: {value}</>}
      </div> */}
    </div>
  );
}
