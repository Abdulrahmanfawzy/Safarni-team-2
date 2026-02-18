
import { Link, useParams } from "react-router-dom";
import { cars } from "./data/Cars";
import BackButton from "../ui/BackButton";
import PlanCard from "./PlanCard";
import { useState } from "react";

export default function CarDetailsPage() {
  const { id } = useParams();

  const car = cars.find((c) => c.id === id);
  const [selectedPlan, setSelectedPlan] = useState(car?.plans[0]?.id);

  if (!car) return <p>Car not found</p>;

  return (
    <section className="px-4 md:px-6 lg:px-28">
      <BackButton />

      <div className="pt-2 pb-6 grid md:grid-cols-2 gap-8">

        <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
          <img src={car.image} className="max-w-full " />
        </div>

        <div className="space-y-3 ">

          <h2 className="text-2xl font-bold">Popular Cars</h2>

          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            {car.specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-gray-100 p-2 md:p-3 rounded-md"
              >
                <p className="text-xs md:text-sm text-gray-500">
                  {spec.label}
                </p>
                <p className="font-semibold text-sm md:text-base">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Plan</h3>

            <div className="space-y-3">
              {car.plans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  selected={selectedPlan === plan.id}
                  onSelect={() => setSelectedPlan(plan.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-1">Location</p>
            <div className="border border-gray-200 rounded-md p-3 text-sm text-gray-400">
              📍 {car.location}
            </div>
          </div>

          <Link to="/payment" className=" w-full flex items-center justify-center px-4 py-2 rounded-sm font-medium transition cursor-pointer
            bg-blue-800 text-white hover:bg-blue-900"
          >
            Pick Up
          </Link>
        </div>
      </div>
    </section>
  );
}
