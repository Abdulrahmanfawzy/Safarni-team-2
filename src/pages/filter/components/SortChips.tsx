import * as ToggleGroup from "@radix-ui/react-toggle-group";
import type { SortValue } from "../../../lib/types/types";
import SectionHeading from "../../../components/common/SectionHeading";

const options: { label: string; value: SortValue }[] = [
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Biggest Deals (Highest Saving)", value: "biggest_deals" },
  { label: "Most Reviewed", value: "most_reviewed" },
  { label: "Most Popular", value: "most_popular" },
];
export function SortChips({
  value,
  onChange,
}: {
  value: SortValue;
  onChange: (v: SortValue) => void;
}) {
  return (
    <div className="space-y-3">
      <SectionHeading content="Sort By" />
      <ToggleGroup.Root
        type="single"
        value={value}
        onValueChange={(v) => onChange(v as SortValue)}
        className="flex flex-wrap gap-5 py-4 "
      >
        {options.map((opt) => (
          <ToggleGroup.Item
            key={opt.value}
            value={opt.value}
            className={[
              "group rounded-full border-2 px-8 py-2 font-medium cursor-pointer border-(--secondary-blue)",
              "transition hover:shadow",
              "data-[state=on]:text-(--primary-blue) data-[state=on]:bg-(--secondary-blue)",
              "data-[state=off]:text-gray-500",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <p className="font-medium text-lg lg:text-xl">{opt.label}</p>
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
}
