import { cars } from "./data/Cars";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Cars() {

  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Popular Cars</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-3 md:p-5 rounded-lg shadow">
            <div className="flex justify-between items-center ">
              <h3 className="font-semibold text-lg lg:text-2xl">{car.name}</h3>
              <img src={car.image} className="w-28 lg:w-56" />
            </div>

            <div className=" text-sm md:text-lg text-gray-500 flex items-center justify-between">
              <span>{car.transmission}</span>
              <span>{car.seats} seats</span>
              <span>{car.fuel}</span>
            </div>

            <div className="flex gap-3 mt-4">
              <Button>Rent Now</Button>
              <Button
                variant="outline"
                onClick={() => navigate(`/cars/${car.id}`)}
              >
                Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
