import flight from "../../assets/images/Flight.png"
import cars from "../../assets/images/cars.png"
import tours from "../../assets/images/Tours.png"
import hotel from "../../assets/images/Hotel.png"
import { Link } from "react-router-dom";


type Category = {
  title: string;
  image: string;
  href: string;
};

const categories: Category[] = [
  { title: "Flight", image: flight, href: "/" },
  { title: "Cars", image: cars, href: "/" },
  { title: "Tours", image: tours, href: "/" },
  { title: "Hotel", image: hotel, href: "/" },
];

export function Categories() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl md:text-3xl font-semibold">
        Categories
      </h2>

      <div className="mt-8 flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-6 md:overflow-x-visible items-center justify-around md:justify-between">
        {categories.map((cat) => (
          <Link
            to={cat.href}
            key={cat.title}
            className="flex shrink-0 flex-col items-center gap-4 hover:scale-95 duration-200"
          >
            <div className=" max-w-16 sm:max-w-36 lg:max-w-40 xl:max-w-60 rounded-full ">
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-lg sm:text-xl md:text-2xl font-medium text-blue-600">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </section>

  );
}