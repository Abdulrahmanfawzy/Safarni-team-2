import * as ToggleGroup from "@radix-ui/react-toggle-group";
import type {
  AdventureStyleValue,
  Option,
  SortValue,
} from "../../../lib/types/types";
import { Star } from "lucide-react";

type RatingValue = "1" | "2" | "3" | "4" | "5";

const options: { value: RatingValue }[] = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
];
export function RatingChips({
  value,
  onChange,
}: {
  value: SortValue | AdventureStyleValue;
  onChange: (v: RatingValue) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[24px] font-semibold text-gray-800">Rating</p>
      <ToggleGroup.Root
        type="multiple"
        value={value}
        onValueChange={(v) => onChange(v as RatingValue)}
        className="flex flex-wrap gap-4 py-4 md:justify-between"
      >
        {options.map((opt) => (
          <ToggleGroup.Item
            key={opt.value}
            value={opt.value}
            className={[
              "group rounded-full border-2 px-8 py-2 text-lg font-medium cursor-pointer border-(--secondary-blue)",
              "transition hover:shadow",
              "data-[state=on]:text-(--primary-blue) data-[state=on]:bg-(--secondary-blue)",
              "data-[state=off]:text-gray-500",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <div className="flex gap-2">
              <Star
                size={35}
                strokeWidth={1}
                className="stroke-[#4B5563] group-data-[state=on]:stroke-(--primary-blue)
"
              />
              <p className="font-medium text-[26px] ">{opt.value}</p>
            </div>
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
