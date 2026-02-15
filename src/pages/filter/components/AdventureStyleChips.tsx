import * as ToggleGroup from "@radix-ui/react-toggle-group";
import type { AdventureStyleValue } from "../../../lib/types/types";
import SectionHeading from "../../../components/common/SectionHeading";

const options: { label: string; value: AdventureStyleValue }[] = [
  { label: "Adventure Travel", value: "adventure_travel" },
  { label: "Cite Breaks", value: "city_breaks" },
  { label: "Water Activity", value: "water_activity" },
  { label: "Road Trips", value: "road_trips" },
];
export function AdventureStyleChips({
  value,
  onChange,
}: {
  value: AdventureStyleValue[];
  onChange: (v: AdventureStyleValue[]) => void;
}) {
  return (
    <div className="space-y-3">
      <SectionHeading content="Adventure Style" />
      <ToggleGroup.Root
        type="multiple"
        value={value}
        onValueChange={(v) => onChange(v as AdventureStyleValue[])}
        className="flex flex-wrap gap-4 py-4 md:justify-between"
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
