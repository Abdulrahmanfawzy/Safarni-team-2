import { Star } from "lucide-react";
import available from "../../assets/images/Available.png"
import { Link } from "react-router-dom";

type Tour = {
  title: string;
  price: number;
  rating: number;
  image: string;
};

const tours: Tour[] = [
  {
    title: "Luxor",
    price: 150,
    rating: 4.3,
    image: available,
  },
  {
    title: "Dahab",
    price: 250,
    rating: 4.5,
    image: available,
  },
  {
    title: "Fayoum",
    price: 200,
    rating: 4.2,
    image: available,
  },
  {
    title: "Marsa Alam",
    price: 220,
    rating: 4.8,
    image: available,
  },
];

export function AvailableTours() {
  return (
    <section className="mt-10 ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Available Tours</h2>
        <Link to="/destination" className="text-sm font-semibold text-blue-700">View all</Link>
      </div>


      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow cursor-pointer hover:scale-95 duration-300">
            <img src={tour.image} alt={tour.title} className="h-24 w-24 rounded-xl object-cover" />
            <div className="flex flex-1 justify-between">
              <div>
                <span className="text-sm font-semibold text-gray-500">Full Day Tour</span>
                <h3 className="font-medium">{tour.title}</h3>
                <p className="text-sm text-gray-500 font-semibold">
                  From <span className="font-semibold text-blue-600">{tour.price}$</span> Per Person
                </p>
              </div>
              <div className="flex items-start gap-1 text-sm">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                {tour.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}