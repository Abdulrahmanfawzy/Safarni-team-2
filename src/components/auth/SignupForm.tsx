import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Mail, Lock, Eye, EyeOff, Check } from "lucide-react";
import google from "../../assets/auth/google.png";
import { useForm } from "react-hook-form";
import { signupSchema } from "../../lib/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRegister } from "../../hooks/authHooks";

export default function SignupForm() {
  // const { mutate } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="name flex flex-col gap-2">
          <Label
            htmlFor="name"
            className={`text-[18px] font-normal text-[#373737] ${errors.name ? "text-[#fb464f]" : ""}`}
          >
            Name
          </Label>
          <div className="input relative">
            <Input
              type="text"
              id="name"
              placeholder="kneeDue"
              className={`rounded-[4px] h-[54px] py-3 px-4 pr-2 pl-[44px] text-[14px] ${errors.name ? "focus-visible:ring-3 focus-visible:ring-[#fb465087] ring-3 ring-[#fb465087] placeholder:text-[#fb464f]" : ""}`}
              {...register("name")}
            />
            <Mail
              className={`absolute left-4 top-[50%] translate-y-[-50%] ${errors.name ? "text-[#fb464f]" : "text-[#AFAFAF]"}`}
              size={18}
            />
          </div>
          {errors.name && (
            <p className="text-[#fb464f] text-[14px]">{errors.name.message}</p>
          )}
        </div>
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
          {errors.email && (
            <p className="text-[#fb464f] text-[14px]">{errors.email.message}</p>
          )}
        </div>
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
            Sign Up
          </Button>
          <p className="OR relative text-center text-[16px] font-medium text-[#373737] before:content-[''] before:absolute before:top-1/2 before:left-[26%] before:w-1/3 before:translate-x-[-50%] before:h-px before:bg-[#373737] after:content-[''] after:absolute after:top-1/2 after:right-[10%] after:w-1/3 after:h-px after:bg-[#373737]">
            Or
          </p>
          <div className="google flex items-center justify-center self-center cursor-pointer rounded-[4px] py-3 w-[130px]  border border-[#0069AB] hover:bg-[#1e439fef]">
            <img className="w-8 h-8" src={google} alt="google" />
          </div>
        </div>
      </form>
      <p className="text-center text-[18px] font-semibold text-[#111928]">
        Already have an account?{" "}
        <Link to="/login" className="text-[#1E429F]">
          Sign In
        </Link>
      </p>
    </div>
  );
}
