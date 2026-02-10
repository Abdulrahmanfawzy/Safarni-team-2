import Pyramids from "../../assets/images/pyramids.png"
import RcmdCard from "../RcmdCard";

type Place = {
  title: string;
  location: string;
  rating: number;
  image: string;
};

const recommendations: Place[] = [
  {
    title: "The Pyramids",
    location: "Giza",
    rating: 4.8,
    image: Pyramids,
  },
  {
    title: "The Citadel of Saladin",
    location: "Cairo",
    rating: 4.8,
    image: Pyramids,
  },
  {
    title: "Karnak Temple",
    location: "Luxor",
    rating: 4.3,
    image: Pyramids,
  },
  {
    title: "Library of Alexandria",
    location: "Alexandria",
    rating: 4.8,
    image: Pyramids,
  },
];

export function Recommendation() {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Recommendation</h2>
        <button className="text-sm text-blue-600">View all</button>
      </div>

      <RcmdCard data={recommendations} />
    </section>
  );
}