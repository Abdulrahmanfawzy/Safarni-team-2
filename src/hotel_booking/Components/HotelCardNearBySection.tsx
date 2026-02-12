import { Skeleton } from "../../components/ui/skeleton";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HotelCardNearBySection({ product }: { product: any }) {
    return (
        <Link
            to={`/availableRooms/products/${product.category}`}
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            className="p-3 rounded-2xl lg:w-4/10 w-full md:flex gap-4 
                       items-center justify-between 
                       bg-white hover:shadow-lg 
                       transition-all duration-300 hover:-translate-y-1"
        >
            {/* Image */}
            {product.thumbnail ? (
                <img
                    src={product.thumbnail}
                    className="rounded-2xl lg:w-3/12 h-40 object-cover"
                    alt={product.title}
                />
            ) : (
                <Skeleton className="h-40 w-full rounded-2xl bg-gray-200 animate-pulse" />
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold 
                                 rounded-full px-3 py-1 w-fit">
                    %{Math.round(product.discountPercentage)} Off
                </span>

                <h3 className="font-semibold text-lg line-clamp-1">
                    {product.title}
                </h3>

                <p className="text-gray-500 flex gap-2 items-center text-sm">
                    <MapPin size={16} />
                    {product.category}
                </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm font-medium">
                <Star size={16} fill="#FACC15" className="text-[#FACC15]" />
                <p>{product.rating}</p>
            </div>
        </Link>
    );
}
