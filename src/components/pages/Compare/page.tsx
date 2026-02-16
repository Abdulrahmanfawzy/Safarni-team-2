import { useState } from 'react';
import { Check, Search } from 'lucide-react';
import BackButton from '../../ui/BackButton';
import { compareData, toursData } from './data';

const ComparePage = () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    return (
        <div className="mt-20 w-full min-h-screen bg-white pb-20">
            <div className="max-w-6xl mx-auto px-6 pt-8">
                <div className="flex items-center gap-4 mb-10 w-full">
                    <div className="shrink-0">
                        <BackButton />
                    </div>
                    <div className="relative w-full flex-row">
                        <Search className="absolute left-4 top-1/2 -translate-y-2/3 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Pari"
                            className="w-full bg-white border border-blue-100 rounded-full py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {toursData.slice(0, 6).map((item) => (
                        <div key={item.id} className="bg-[#FAFAFA] p-5 shadow-sm border border-gray-50 flex gap-6 hover:shadow-md transition-all group">
                            <div className="w-35 h-35 overflow-hidden shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="flex flex-col justify-center gap-2">
                                <div>
                                    <h3 className="font-medium text-[#1A1A1A] text-[16px] font-Poppins">{item.title}</h3>
                                    <p className="text-[#999999] text-[12px] font-Poppins font-medium mt-1">
                                        {item.time} | <span className="text-[#999999] font-Poppins font-semibold">${item.price}</span>
                                    </p>
                                </div>
                                <p className="text-[#6B7280] text-[15px] font-Poppins leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-[24px] font-medium font-Poppins text-[#1A1A1A] mb-4">Compare</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {compareData.slice(0, 6).map((item) => (
                        <div
                            key={`compare-${item.id}`}
                            onClick={() => setSelectedCard(item.id)} 
                            className={`cursor-pointer bg-[#FAFAFA] p-8 transition-all duration-300 border-2 
                                ${selectedCard === item.id ? 'border-blue-500 shadow-md' : 'border-gray-50'}`}
                        >
                            <div className="mb-6">
                                <h3 className="font-bold text-[18px]">{item.title}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[28px] font-black">${item.price}</span>
                                    <span className="text-[#999999] text-sm">/person</span>
                                </div>
                            </div>
                            {/* Features ... */}
                            <div className="space-y-3">
                                {Object.entries(item.features).map(([key, value]) => (
                                    <div key={key} className="flex items-start gap-3 text-[14px]">
                                        <Check className={`w-4 h-4 mt-0.5 ${selectedCard === item.id ? 'text-blue-500' : 'text-gray-400'}`} />
                                        <span className="text-[#737373]"><b className="text-[#4D4D4D] capitalize">{key}:</b> {value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10 w-full">
                    <button className={`w-full max-w-[550px] py-4 font-bold text-[18px] transition-all duration-300
                        ${selectedCard !== null
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 shadow-lg'
                            : 'bg-[#667681] text-white opacity-70 cursor-not-allowed'}`}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComparePage;