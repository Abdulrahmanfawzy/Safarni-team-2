
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", ...props }: Props) {
  return (
    <button
      {...props}
      className={`
        px-4 py-2 rounded-sm font-medium transition flex-1 cursor-pointer w-full
        ${variant === "primary"
          ? "bg-blue-800 text-white hover:bg-blue-900"
          : "border border-blue-800 text-blue-800 hover:bg-blue-50"
        }
      `}
    />
  );
}
