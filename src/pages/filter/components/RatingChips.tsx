import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Star } from "lucide-react";
import type { RatingValue } from "../../../lib/types/types";
import SectionHeading from "../../../components/common/SectionHeading";

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
  value: RatingValue[];
  onChange: (v: RatingValue[]) => void;
}) {
  return (
    <div className="space-y-3">
      <SectionHeading content="Rating" />
      <ToggleGroup.Root
        type="multiple"
        value={value}
        onValueChange={(v) => onChange(v as RatingValue[])}
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
            <div className="flex gap-1">
              <Star
                strokeWidth={1}
                className="stroke-[#4B5563] group-data-[state=on]:stroke-(--primary-blue) size-6.5"
              />
              <p className="font-medium text-lg lg:text-xl">{opt.value}</p>
            </div>
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
