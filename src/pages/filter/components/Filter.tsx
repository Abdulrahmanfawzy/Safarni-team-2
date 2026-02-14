import { useState } from "react";
import PreviousButton from "../../../components/common/PreviousButton";
import { SortChips } from "./SortChips";
import type {
  AdventureStyleValue,
  Option,
  SortValue,
} from "../../../lib/types/types";
import LineBreak from "./LineBreak";

const sortOptions: Option[] = [
  { label: "Price (Low to High)", value: "price_asc" },
  { label: "Price (High to Low)", value: "price_desc" },
  { label: "Biggest Deals (Highest Saving)", value: "biggest_deals" },
  { label: "Most Reviewed", value: "most_reviewed" },
  { label: "Most Popular", value: "most_popular" },
];

const adventureOptions: Option[] = [
  { label: "Adventure Travel", value: "adventure_travel" },
  { label: "Cite Breaks", value: "city_breaks" },
  { label: "Water Activity", value: "water_activity" },
  { label: "Road Trips", value: "road_trips" },
];

export default function FilterPage() {
  const [sort, setSort] = useState<SortValue>("price_asc");
  const [adventureStyle, setAdventureStyle] = useState<AdventureStyleValue[]>(
    [],
  );
  return (
    <main className="container xl:max-w-6xl mx-auto px-2 space-y-8 mt-24">
      <PreviousButton />
      <section>
        <SortChips
          value={sort}
          onChange={(v) => setSort(v)}
          heading={"Sort By"}
          options={sortOptions}
          type="single"
        />
        <LineBreak />
        <SortChips
          type="multiple"
          value={adventureStyle}
          onChange={setAdventureStyle}
          heading="Adventure Style"
          options={adventureOptions}
        />
      </section>
    </main>
  );
}
