import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "../../lib/schemas/authSchemas";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";

export default function LoginForm() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  });

  const otpValue = watch("otp");

  const onSubmit = (data: any) => {
    console.log(data.otp);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    value: string,
    onChange: (val: string) => void,
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const otpArray = value.padEnd(4, " ").split("");

      if (otpArray[index] !== " ") {
        otpArray[index] = " ";
        onChange(otpArray.join(""));
      } else if (index > 0) {
        otpArray[index - 1] = " ";
        onChange(otpArray.join(""));
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="timer self-center">
        <p className="text-center font-semibold">
          00 : {String(timer).padStart(2, "0")}
        </p>
      </div>
      <Controller
        name="otp"
        control={control}
        render={({ field }) => {
          // Normalize value to always be 4 chars long with spaces for empty slots
          const value = (field.value || "").padEnd(4, " ");

          return (
            <div className="flex gap-2 justify-center">
              {[0, 1, 2, 3].map((index) => {
                const char = value[index];
                return (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={char === " " ? "" : char}
                    className="w-[65px] h-[54px] border border-[#1E429F] rounded-[10px] text-center text-[20px] font-semibold focus:outline-none focus:border-2 focus:border-[#1E429F]"
                    // onchange
                    onChange={(e) => {
                      const val = e.target.value;
                      // Allow only number input
                      if (val && !/^\d+$/.test(val)) return;

                      // Construct new OTP string preserving positions
                      const otpArray = value.split("");
                      otpArray[index] = val || " ";
                      const newOtp = otpArray.join("");

                      field.onChange(newOtp);

                      // Move focus to next input if a digit was entered
                      if (val && index < 3) {
                        inputsRef.current[index + 1]?.focus();
                      }
                    }}
                    // onpaste
                    onPaste={(e) => {
                      e.preventDefault();

                      const pasted = e.clipboardData.getData("text").trim();

                      if (!/^\d{4}$/.test(pasted)) return;

                      field.onChange(pasted);
                      inputsRef.current[3]?.focus();
                    }}
                    // onkeydown
                    onKeyDown={(e) =>
                      handleKeyDown(e, index, value, field.onChange)
                    }
                  />
                );
              })}
            </div>
          );
        }}
      />

      {errors.otp && (
        <p className="text-center text-red-500 text-sm">{errors.otp.message}</p>
      )}

      <p className="text-center text-[18px] font-semibold text-[#111928]">
        oPT note received?{" "}
        <button
          type="button"
          disabled={timer > 0}
          onClick={() => {
            setTimer(30);
            // call resend OTP API here
          }}
          className={`underline text-[18px] ${
            timer > 0
              ? "text-[#AFAFAF] cursor-not-allowed"
              : "text-[#1E429F] cursor-pointer"
          }`}
        >
          Send again
        </button>
      </p>

      <Button
        type="submit"
        disabled={
          !isValid ||
          (otpValue || "").includes(" ") ||
          (otpValue || "").length !== 4
        }
        className="py-6 text-lg font-semibold disabled:opacity-50 cursor-pointer"
      >
        Verify
      </Button>
    </form>
  );
}
