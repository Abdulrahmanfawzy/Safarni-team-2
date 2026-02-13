export type SortValue =
  | "price_asc"
  | "price_desc"
  | "biggest_deals"
  | "most_reviewed"
  | "most_popular";

export type AdventureStyleValue =
  | "adventure_travel"
  | "city_breaks"
  | "water_activity"
  | "road_trips";

export type Option = { label: string; value: SortValue | AdventureStyleValue };
