import { useState } from "react";

interface ToggleProps {
  label: string;
}

export default function Toggle({ label }: ToggleProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
