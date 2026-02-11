import { AvailableTours } from "../components/home/Available";
import { Categories } from "../components/home/Categories";
import Hero from "../components/home/Hero";
import { Recommendation } from "../components/home/Recommendation";

export default function Home() {
  return (
    <main className=" px-4 md:px-6 lg:px-16 py-4 md:py-10">
      <Hero />
      <Categories />
      <Recommendation />
      <AvailableTours />
    </main>
  )
}
