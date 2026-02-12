import { Skeleton } from "../../components/ui/skeleton";
import { Star, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HotelCardRec({ product }: { product: any }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <Link
            to={`/availableRooms/products/${product.category}`}
            className="relative bg-white rounded-3xl overflow-hidden 
                       shadow-md hover:shadow-xl 
                       transition-all duration-300 
                       hover:-translate-y-1 
                       lg:w-[23%] md:w-[48%] w-full"
        >
            {/* Image Wrapper */}
            <div className="relative w-full h-52">
                {!imgLoaded && (
                    <Skeleton className="absolute inset-0 rounded-none bg-gray-200 animate-pulse" />
                )}

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1">
                    %{Math.round(product.discountPercentage)} Off
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                {/* Rating */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-sm font-medium">
                        <Star
                            size={16}
                            fill="#FACC15"
                            className="text-[#FACC15]"
                        />
                        <span>{product.rating}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg line-clamp-1">
                    {product.title}
                </h3>

                {/* Location */}
                <p className="text-gray-500 flex items-center gap-1 text-sm">
                    <MapPin size={16} />
                    {product.category}
                </p>
            </div>
        </Link>
    );
}
