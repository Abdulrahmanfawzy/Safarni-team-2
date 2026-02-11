import { useState } from "react";
import Recommendation from "./components/recommendation";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

export default function SearchPage() {
  const [typing, setTyping] = useState(false);
  return (
    <main className="container xl:max-w-6xl mx-auto px-2 space-y-4">
      <SearchInput onInput={() => setTyping(true)} />
      {typing || <Recommendation />}
      {typing && <SearchResults />}
    </main>
  );
}
