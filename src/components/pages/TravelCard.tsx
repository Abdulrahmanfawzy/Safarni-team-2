import React from "react";
import { Star, MapPin, Calendar, Camera } from "lucide-react";
import { Card, CardContent } from "../ui/card";

// Interface representing the data structure from your API
interface DestinationProps {
  title: string;
  category: string;
  duration: string;
  location: string;
  rating: number;
  reviewsCount: number;
  imageSrc: string;
}

const TravelCard: React.FC<DestinationProps> = ({
  title,
  category,
  duration,
  location,
  rating,
  reviewsCount,
  imageSrc,
}) => {
  return (
    <Card className="w-full max-w-[1240px] mx-auto overflow-hidden rounded-[12px] border-none shadow-sm ">
      <CardContent className="p-0 flex flex-col h-auto md:h-[480px]">
        {/* Image Section: Responsive height */}
        <div className="relative h-[250px] md:h-[380px] w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section: Adaptive padding and flex direction */}
        <div className="flex-1 px-4 py-6 md:px-8 flex flex-col justify-center bg-white">
          {/* Top Row: Title and Rating */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4 md:mb-2">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#111928]">
              {title}
            </h2>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {/* Dynamic Rating Stars */}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(rating) ? "currentColor" : "none"}
                    className={
                      i < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-[14px] font-semibold text-[#111928] ml-1">
                {rating}
              </span>
              <span className="text-[14px] text-[#4B5563]">
                ({reviewsCount})
              </span>
            </div>
          </div>

          {/* Bottom Row: Metadata Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:flex md:justify-between items-center text-[#4B5563] text-[14px] md:text-[16px]">
            <div className="flex items-center gap-2">
              <Camera size={18} className="text-[#4B5563]" />
              <span>{category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#4B5563]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#4B5563]" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelCard;
