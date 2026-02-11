import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { forgetPassSchema } from "../../lib/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetPassSchema),
  });
  const onSubmit = (data: z.infer<typeof forgetPassSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="email flex flex-col gap-2">
          <Label
            htmlFor="email"
            className={`text-[18px] font-normal text-[#373737] ${errors.email ? "text-[#fb464f]" : ""}`}
          >
            Email
          </Label>
          <div className="input relative">
            <Input
              type="email"
              id="email"
              placeholder="kneeDue@untitledui.com"
              className={`rounded-[4px] h-[54px] py-3 px-4 pr-2 pl-[44px] text-[14px] ${errors.email ? "focus-visible:ring-3 focus-visible:ring-[#fb465087] ring-3 ring-[#fb465087] placeholder:text-[#fb464f]" : ""}`}
              {...register("email")}
            />
            <Mail
              className={`absolute left-4 top-[50%] translate-y-[-50%] ${errors.email ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
              size={18}
            />
          </div>
        </div>

        <div className="confirm flex flex-col justify-between gap-3">
          <Button
            type="submit"
            className="cursor-pointer rounded-2 px-4 py-6 font-semibold text-[20px] text-[#FFFFFF] bg-[#1E429F] hover:bg-[#1e439fef]"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
