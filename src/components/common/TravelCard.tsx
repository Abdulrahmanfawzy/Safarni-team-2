import { Heart, Star } from 'lucide-react';
import type { TravelItem } from '../pages/Favorites/data';

export const TravelCard = ({ item }: { item: TravelItem }) => (
    <div className="bg-white rounded-[32px] p-3 shadow-sm border border-gray-100 relative group cursor-pointer transition-all hover:shadow-md">
        <button className="absolute top-5 right-5 z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm hover:bg-white transition-colors">
            <Heart className={`w-4 h-4 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>

        <div className="aspect-square rounded-[24px] overflow-hidden mb-3">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>

        <div className="px-1">
            {!item.duration && (
                <p className="text-[#999999] text-[14px] font-medium mb-1">Full Day Tours</p>
            )}

            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-[#1A1A1A] text-[16px] leading-tight tracking-tight">
                    {item.title}
                </h3>
                <div className="flex items-center gap-1 shrink-0 ">
                    <Star className="w-5 h-5 fill-[#FFB347] text-[#FFB347]" />
                    <span className="text-base font-bold text-[#4D4D4D]">{item.rating.toFixed(1)}</span>
                    {item.reviews && <span className="text-sm text-[#999999]">({item.reviews})</span>}
                </div>
            </div>

            {item.duration && (
                <div className="flex items-center text-[#737373] text-[16px] font-medium mb-4">
                    <span className="mr-4">Pickup Available</span>
                    <span className="w-2 h-2 bg-[#0051FF] rounded-full shrink-0"></span>
                    <span className="ml-3">{item.duration}</span>
                </div>
            )}

            <p className="text-[#737373] text-lg font-medium">
                From <span className="text-[#0051FF] font-black text-[16px] ml-1">${item.price}</span> per Person
            </p>
        </div>
    </div>
);