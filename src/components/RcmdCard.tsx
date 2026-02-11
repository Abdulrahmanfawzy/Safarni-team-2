import { Star, MapPin } from "lucide-react";

type CardItem = {
  title: string;
  image: string;
  rating: number;
  location: string;
}

interface RcmdCardCardSectionProps {
  data: CardItem[];
}

const RcmdCard = ({ data }: RcmdCardCardSectionProps) => {
  return (
    <div className="flex items-center overflow-hidden overflow-x-auto scroll-smooth scrollbar-hide pb-6 md:overflow-x-visible gap-5 lg:gap-8">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex-1 min-w-64 p-4 border border-gray-200 overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer hover:scale-95 duration-300"
        >
          <img src={item.image} alt={item.title} className=" lg:h-64 w-full object-cover rounded-lg" />
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{item.title}</h3>
              <div className="mt-2 flex items-center gap-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-lg">{item.rating}</span>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2 text-gray-400">
              <MapPin size={22} className="text-blue-600" />
              <span className="text-lg">{item.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RcmdCard;
