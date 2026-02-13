import React from "react";
import { ChevronLeft } from "lucide-react";
import TravelCard from "./TravelCard";
import MainImg from "../../../assets/images/destination-main.png";
import TopActivates from "./TopActivates";
import VisitingTime from "./VisitingTime";
import Gallery from "./Gallarey";
import BookingBar from "./BookingBar";
import BackButton from "../../ui/BackButton";
export default function Destination() {
  const destinationData = {
    title: "Eiffel Tower",
    category: "City Breaks",
    duration: "7 Days and 6 Nights",
    location: "Paris, France",
    rating: 4.5,
    reviewsCount: 675,
    imageSrc: MainImg,
  };
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-25 py-8">
      <BackButton />
      <TravelCard {...destinationData} />
      <TopActivates />
      <VisitingTime />
      <Gallery />
      <BookingBar />
    </section>
  );
}
