import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  maxWidthClass?: string;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  className = "",
  maxWidthClass = "max-w-2xl",
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`relative z-10 w-full ${maxWidthClass} bg-white rounded-lg p-6 shadow-lg ${className}`}
      >
        <div className="flex items-start justify-end mb-3">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <Button variant="ghost" onClick={onClose} className="cursor-pointer">
            <X />
          </Button>
        </div>

        <div>{children}</div>

        {footer && (
          <div className="mt-4 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
