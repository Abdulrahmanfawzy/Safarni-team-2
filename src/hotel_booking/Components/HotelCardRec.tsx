import { Skeleton } from "../../components/ui/skeleton";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

export default function HotelCardRec({ product }: { product: any }) {
    return (
        <div
            style={{ boxShadow: "0 0 26.37px 0 #6F6F6F40" }}
            className="p-2 rounded-2xl lg:w-2/10 md:w-5/12 w-full grid justify-between gap-2 cursor-pointer items-center"
        >
            {product.thumbnail ? (
                <img
                    src={product.thumbnail}
                    className="rounded-2xl"
                    alt={product.title}
                />
            ) : (
                <Skeleton className="h-52 w-full rounded-2xl bg-gray-200 animate-pulse" />
            )}
            <div className="flex justify-between w-full px-2">
                <span className="bg-[#EBF5FF] text-[#1E429F] text-[14px] rounded-2xl px-3 py-1">
                    %{Math.round(product.discountPercentage)} Off
                </span>
                <div className="flex gap-1">
                    <Star fill="#FACC15" className="text-[#FACC15]" />
                    <p className="">{product.rating}</p>
                </div>
            </div>
            <h3 className="self-start px-2">{product.title}</h3>
            <p className="text-gray-400 flex gap-2 justify-start items-center self-start">
                <MapPin />
                {product.category}
            </p>
        </div>
    );
}