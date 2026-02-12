import { ChevronLeft } from 'lucide-react';
import { TravelCard } from '../../common/TravelCard';
import { favoritesData } from './data';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-20 w-full min-h-screen bg-[#F8F9FB] pb-10">
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 border border-gray-100 transition-all">
                        <ChevronLeft className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favoritesData.map((item) => (
                        <TravelCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;