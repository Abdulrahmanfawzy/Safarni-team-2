import { useState } from "react";
import type {
  AdventureStyleValue,
  Option,
  SortValue,
} from "../../lib/types/types";
import PreviousButton from "../../components/common/PreviousButton";
import { SortChips } from "./components/SortChips";
import LineBreak from "./components/LineBreak";
import { RatingChips } from "./components/RatingChips";
import FilterButtons from "./components/FilterButtons";
import BudgetRange from "./components/BudgetRange";
import LocationFilter from "./components/LocationFilter";

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
const ratingOptions: string[] = ["1", "2", "3", "4", "5"];
export default function FilterPage() {
  const [sort, setSort] = useState<SortValue>("price_asc");
  const [adventureStyle, setAdventureStyle] = useState<AdventureStyleValue[]>(
    [],
  );
  const [rating, setRating] = useState<number[]>([]);
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
        <BudgetRange />
        <LineBreak />
        <SortChips
          type="multiple"
          value={adventureStyle}
          onChange={setAdventureStyle}
          heading="Adventure Style"
          options={adventureOptions}
        />
        <LineBreak />
        <LocationFilter />
        <LineBreak />
        <RatingChips value={rating} onChange={setRating} />
        <FilterButtons />
      </section>
    </main>
  );
}
