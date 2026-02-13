import { ChevronLeft, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../../../components/ui/carousel";
import InputFieldComponent from "./Components/InputFieldComponent";
import LastCheckOut from "./Components/LastCheckOut";
import { useState } from "react";

export default function Booking() {
    const today = new Date();
    const daysToShow = 30;

    const [selectedCheckIn, setSelectedCheckIn] = useState(today);
    const [selectedCheckOut, setSelectedCheckOut] = useState(
        new Date(today.getTime() + 24 * 60 * 60 * 1000),
    );
    const [showBooking, setShowBooking] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error } = useQuery({
        queryKey: ["Hotel", id],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            return res.json();
        },
        enabled: !!id,
    });

    if (error) return <p>Error loading product</p>;

    function getDateInfo(date: Date) {
        const dayName = date.toLocaleString("en-US", { weekday: "short" });
        const month = date.toLocaleString("en-US", { month: "short" });
        const day = date.getDate();
        return { dayName, month, day };
    }

    const checkInDates = Array.from({ length: daysToShow }).map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return date;
    });

    const checkOutDates = Array.from({ length: daysToShow }).map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + 1 + i);
        return date;
    });

    return (
        <section className="lg:px-12 md:px-8 px-4 py-10 ">
            <button
                onClick={() => {
                    if (!showBooking) {
                        setShowBooking(true); 
                    } else {
                        navigate(-1);
                    }
                }}
                className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            >
                <ChevronLeft />
            </button>

            <div className="mt-4 flex justify-center lg:gap-15 md:gap-10 gap-5 items-start flex-wrap">
                <div className="lg:w-5/12 md:w-8/12 w-full relative">
                    {data?.thumbnail && (
                        <>
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className="rounded-2xl w-full"
                            />

                            <div className="md:grid hidden grid-cols-5 w-full bg-white rounded-2xl p-3 absolute bottom-0 left-1/2 -translate-x-1/2 gap-5">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <img
                                        key={index}
                                        src={data.thumbnail}
                                        alt={data.title}
                                        className="rounded-2xl w-full cursor-pointer"
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="lg:w-5/12 md:w-4/12 w-full flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <Star fill="#FACC15" className="text-[#FACC15]" />
                            <p>{data?.rating}</p>
                            <p>({data?.reviews?.length || 0} Reviews)</p>
                        </div>
                        <span className="bg-[#EBF5FF] w-20 text-[#1E429F] text-[14px] rounded-2xl px-3 py-1">
                            %{Math.round(data?.discountPercentage) || 0} Off
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold mt-4">{data?.title}</h2>
                    <p className="text-gray-500">{data?.warrantyInformation}</p>
                    {showBooking ? (
                        <div className="mt-5">
                            <p className="text-center py-2 text-[#1E429F] font-bold">
                                Book Room
                            </p>

                            <p className="font-semibold text-[#111928]">Check In</p>
                            <Carousel className="py-6">
                                <CarouselContent className="flex lg:gap-4 md:gap-6 gap-8">
                                    {checkInDates.map((date, index) => {
                                        const { dayName, month, day } =
                                            getDateInfo(date);
                                        const isSelected =
                                            selectedCheckIn.toDateString() ===
                                            date.toDateString();

                                        return (
                                            <CarouselItem
                                                key={index}
                                                className="flex-[0_0_calc(100%/4)] cursor-pointer"
                                                onClick={() =>
                                                    setSelectedCheckIn(date)
                                                }
                                            >
                                                <div
                                                    className={`h-20 w-30 flex flex-col items-center justify-center rounded-full 
                          ${isSelected ? "bg-[#1C64F2] text-white" : "bg-[#F3F4F6] text-black"}`}
                                                >
                                                    <p>
                                                        {date.toDateString() ===
                                                        today.toDateString()
                                                            ? "Today"
                                                            : dayName}
                                                    </p>
                                                    <p>
                                                        {day} {month}
                                                    </p>
                                                </div>
                                            </CarouselItem>
                                        );
                                    })}
                                </CarouselContent>
                            </Carousel>

                            <p className="font-semibold text-[#111928]">Check Out</p>
                            <Carousel className="py-6">
                                <CarouselContent className="flex lg:gap-4 md:gap-6 gap-8">
                                    {checkOutDates.map((date, index) => {
                                        const { dayName, month, day } =
                                            getDateInfo(date);
                                        const isSelected =
                                            selectedCheckOut.toDateString() ===
                                            date.toDateString();

                                        return (
                                            <CarouselItem
                                                key={index}
                                                className="flex-[0_0_calc(100%/4)] cursor-pointer"
                                                onClick={() =>
                                                    setSelectedCheckOut(date)
                                                }
                                            >
                                                <div
                                                    className={`h-20 w-30 flex flex-col items-center justify-center rounded-full 
                          ${isSelected ? "bg-[#1C64F2] text-white" : "bg-[#F3F4F6] text-black"}`}
                                                >
                                                    <p>{dayName}</p>
                                                    <p>
                                                        {day} {month}
                                                    </p>
                                                </div>
                                            </CarouselItem>
                                        );
                                    })}
                                </CarouselContent>
                            </Carousel>
                            <p className="text-[#111928]">Note To Owner</p>
                            
                            <div className="py-5">
                                <InputFieldComponent />
                            </div>

                            <button
                                className="w-full py-3 bg-[#1E429F] text-white cursor-pointer"
                                onClick={() => setShowBooking(false)}
                            >
                                Submit
                            </button>
                        </div>
                    ) : (
                        <LastCheckOut  />
                    )}
                </div>
            </div>
        </section>
    );
}
