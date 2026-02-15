import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Lock, Eye, EyeOff, Check, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { newPassSchema } from "../../lib/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewPassForm({
  handleSuccess,
}: {
  handleSuccess: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newPassSchema),
  });
  const onSubmit = (data: z.infer<typeof newPassSchema>) => {
    console.log(data);
    handleSuccess();
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="password flex flex-col gap-2">
          <Label
            htmlFor="password"
            className={`text-[18px] font-normal text-[#373737] ${errors.password ? "text-[#fb464f]" : ""}`}
          >
            Password
          </Label>
          <div className="input relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="***********"
              className={`rounded-[4px] h-[54px] py-3 px-4 pr-2 pl-[44px] text-[14px] ${errors.password ? "focus-visible:ring-3 focus-visible:ring-[#fb465087] ring-3 ring-[#fb465087] placeholder:text-[#fb464f]" : ""}`}
              {...register("password")}
            />
            <Lock
              className={`absolute left-4 top-[50%] translate-y-[-50%] ${errors.password ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
              size={18}
            />
            {showPassword ? (
              <Eye
                className={`absolute cursor-pointer right-4 top-[50%] translate-y-[-50%] ${errors.password ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
                size={18}
                onClick={showPasswordHandler}
              />
            ) : (
              <EyeOff
                className={`absolute cursor-pointer right-4 top-[50%] translate-y-[-50%] ${errors.password ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
                size={18}
                onClick={showPasswordHandler}
              />
            )}
          </div>
          {errors.password && (
            <p className="text-[#fb464f] text-[14px]">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="confirm-password flex flex-col gap-2">
          <Label
            htmlFor="confirm-password"
            className={`text-[18px] font-normal text-[#373737] ${errors.confirmPassword ? "text-[#fb464f]" : ""}`}
          >
            Confirm Password
          </Label>
          <div className="input relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="***********"
              className={`rounded-[4px] h-[54px] py-3 px-4 pr-2 pl-[44px] text-[14px] ${errors.confirmPassword ? "focus-visible:ring-3 focus-visible:ring-[#fb465087] ring-3 ring-[#fb465087] placeholder:text-[#fb464f]" : ""}`}
              {...register("confirmPassword")}
            />
            <Lock
              className={`absolute left-4 top-[50%] translate-y-[-50%] ${errors.confirmPassword ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
              size={18}
            />
            {showConfirmPassword ? (
              <Eye
                className={`absolute cursor-pointer right-4 top-[50%] translate-y-[-50%] ${errors.confirmPassword ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
                size={18}
                onClick={showConfirmPasswordHandler}
              />
            ) : (
              <EyeOff
                className={`absolute cursor-pointer right-4 top-[50%] translate-y-[-50%] ${errors.confirmPassword ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
                size={18}
                onClick={showConfirmPasswordHandler}
              />
            )}
          </div>
          {errors.confirmPassword && (
            <p className="text-[#fb464f] text-[14px]">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="confirm flex flex-col justify-between gap-3">
          <div className="rules flex flex-col gap-2">
            <p className="font-normal text-[18px] text-[#6B7280]">
              <Check
                className="inline mr-3 text-[#FFFFFF] p-1 bg-[#6B7280] rounded-full"
                size={18}
              />
              must be at least 8 characters
            </p>
            <p className="font-normal text-[18px] text-[#6B7280]">
              <Check
                className="inline mr-3 text-[#FFFFFF] p-1 bg-[#6B7280] rounded-full"
                size={18}
              />
              must contain one special character
            </p>
          </div>
          <Button
            type="submit"
            className="cursor-pointer rounded-2 px-4 py-6 font-semibold text-[20px] text-[#FFFFFF] bg-[#1E429F] hover:bg-[#1e439fef]"
          >
            Reset Password
          </Button>
        </div>
      </form>
      <Link to="/login" className="text-[18px] font-semibold text-[#111928]">
        <p className="text-center flex items-center justify-center gap-2">
          <ArrowLeft size={20} className="text-[#9CA3AF]" />
          Back to Log In
        </p>
      </Link>
    </div>
  );
}
