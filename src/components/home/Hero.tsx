import heroimg from "../../assets/images/heroimg.png";
import arrow from "../../assets/images/Group.png";

export default function Hero() {
  return (
    <section className=" w-full mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
      <div>
        <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          Visit The Most <br />
          <span className="text-blue-800">Beautiful Places</span> In <br />
          The World
        </h1>

        <div className="relative sm:max-w-md ">
          <div className="absolute right-10 md:-right-5 -top-18 lg:-top-24 w-16 lg:w-auto ">
            <img src={arrow} alt="arrow" className="h-16 md:h-auto" />
          </div>
          <p className=" mt-8 md:mt-7 text-gray-600 text-sm sm:text-lg w-fit leading-relaxed">
            "Explore stunning destinations around the globe. Find travel
            inspiration, top attractions, and plan your next adventure all from
            one platform."
          </p>
        </div>
      </div>

      <div className="">
        <img src={heroimg} alt="image hero" />
      </div>
    </section>
  );
}
