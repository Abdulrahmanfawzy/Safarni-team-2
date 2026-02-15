import { useState } from "react";
import type {
  AdventureStyleValue,
  RatingValue,
  SortValue,
} from "../../lib/types/types";
import PreviousButton from "../../components/common/PreviousButton";
import { SortChips } from "./components/SortChips";
import LineBreak from "./components/LineBreak";
import { RatingChips } from "./components/RatingChips";
import FilterButtons from "./components/FilterButtons";
import BudgetRange from "./components/BudgetRange";
import LocationFilter from "./components/LocationFilter";
import { AdventureStyleChips } from "./components/AdventureStyleChips";

export default function FilterPage() {
  const [sort, setSort] = useState<SortValue>("price_asc");
  const [adventureStyle, setAdventureStyle] = useState<AdventureStyleValue[]>(
    [],
  );
  const [rating, setRating] = useState<RatingValue[]>([]);
  return (
    <main className="container xl:max-w-6xl mx-auto px-2 space-y-8 mt-24">
      <PreviousButton />
      <section>
        <SortChips value={sort} onChange={(v) => setSort(v)} />
        <LineBreak />
        <BudgetRange />
        <LineBreak />
        <AdventureStyleChips
          value={adventureStyle}
          onChange={setAdventureStyle}
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
