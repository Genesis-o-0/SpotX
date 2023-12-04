import HorizontalList from "./_components/HorizontalList";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <SearchBar />

      <HorizontalList />
    </main>
  );
}
