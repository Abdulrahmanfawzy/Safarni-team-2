import { TravelCard } from '../../common/TravelCard';
import { favoritesData } from './data';
import BackButton from '../../ui/BackButton';

const FavoritesPage = () => {
    return (
        <div className=" w-full min-h-screen bg-[#F8F9FB] pb-10">
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
                <div className="flex items-center justify-between">
                    <BackButton />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favoritesData.map((item) => (
                        <TravelCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </div>
    );
}
export default FavoritesPage;