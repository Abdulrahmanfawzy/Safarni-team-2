import Brand from "../components/cars/Brand";
import Car from "../components/cars/Car";
import BackButton from "../components/ui/BackButton";



export default function CarsPage() {
  return (
    <div className=" px-4 md:px-6 lg:px-28 py-4">
      <BackButton />
      <Brand />
      <Car />
    </div>
  )
}
