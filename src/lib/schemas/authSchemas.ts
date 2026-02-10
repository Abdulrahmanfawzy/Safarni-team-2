// ^ login schema
import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).{8,}$/,
      "Password must contain capital letters, numbers, and symbols.",
    ),
});

export const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()\[\]{}\-=_+|\\:;"'<>,./~`]).{8,}$/,
      "Password must contain capital letters, numbers, and symbols.",
    ),
});

export const forgetPassSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const resetPassSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-=_+|\\:;"'<>,./~`]).{8,}$/,
      "Password must contain capital letters, numbers, and symbols.",
    ),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export const otpSchema = z.object({
  otp: z.string().regex(/^\d{4}$/, "OTP must be exactly 4 digits"),
});

export const newPassSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-=_+|\\:;"'<>,./~`]).{8,}$/,
        "Password must contain capital letters, numbers, and symbols.",
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
