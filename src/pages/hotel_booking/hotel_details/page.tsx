import { ChevronLeft, Search, Star } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../components/ui/tabsForHotels";
import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../../components/ui/carousel";
import { Skeleton } from "../../../components/ui/skeleton";
import { Reviews } from "./Components/Reviews";

export default function Hotel_details() {
    const [loadedImages, setLoadedImages] = useState<number[]>([]);
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    const [reviewing, setReviewing] = useState(true);

    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ["Hotel", id],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            return res.json();
        },
        enabled: !!id,
    });

    if (isLoading) return <p>...Loading</p>;
    if (error) return <p>Error loading product</p>;

    return (
        <section className="lg:px-12 md:px-8 px-4">
                <button onClick={() => navigate(-1)} role="button" className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer">
                    <ChevronLeft />
                </button>

            <div className="mt-4 lg:flex grid justify-center lg:gap-15 md:gap-10 gap-5 items-start flex-wrap">
                <div className="lg:w-5/12 w-full relative">
                    {data?.thumbnail && (
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className="rounded-2xl w-full md:block hidden"
                        />
                    )}
                    {data?.thumbnail && (
                        <div className="md:grid hidden grid-cols-5 md:w-125  bg-white rounded-2xl p-3 absolute bottom-10 left-1/2 transform -translate-x-1/2  gap-5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img
                                    key={index}
                                    src={data.thumbnail}
                                    alt={data.title}
                                    className="rounded-2xl w-full cursor-pointer"
                                />
                            ))}
                        </div>
                    )}
                    <div className="md:hidden block">
                        {data?.thumbnail && (
                            <Carousel opts={{ loop: true }}>
                                <CarouselContent>
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <CarouselItem key={index}>
                                                <img
                                                    src={data.thumbnail}
                                                    alt={data.title}
                                                    className="rounded-2xl w-full"
                                                />
                                            </CarouselItem>
                                        ),
                                    )}
                                </CarouselContent>
                            </Carousel>
                        )}
                    </div>
                </div>

                <div className="lg:w-5/12 w-full flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <Star fill="#FACC15" className="text-[#FACC15]" />
                            <p>{data.rating}</p>
                            <p>({data?.reviews?.length} Reviews)</p>
                        </div>
                        <span className="bg-[#EBF5FF] w-20 text-[#1E429F] text-[14px] rounded-2xl px-3 py-1">
                            %{Math.round(data.discountPercentage)} Off
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold mt-4">{data?.title}</h2>

                    <p className="text-gray-500">{data.warrantyInformation}</p>

                    {reviewing ? (
                        <>
                            <Tabs
                                defaultValue="About"
                                className="w-full my-5 bg-white"
                            >
                                <TabsList className="grid w-full grid-cols-3 bg-white ">
                                    <TabsTrigger value="About">
                                        About
                                    </TabsTrigger>
                                    <TabsTrigger value="Gallery">
                                        Gallery
                                    </TabsTrigger>
                                    <TabsTrigger value="Review">
                                        Review
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="About">
                                    <div className="flex justify-between items-start py-4">
                                        <span className="flex gap-1">
                                            <svg
                                                width="30"
                                                height="24"
                                                viewBox="0 0 30 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.25 12C10.3177 12 12 10.3177 12 8.25C12 6.18234 10.3177 4.5 8.25 4.5C6.18234 4.5 4.5 6.18234 4.5 8.25C4.5 10.3177 6.18234 12 8.25 12ZM24.75 6H14.25C13.8356 6 13.5 6.33562 13.5 6.75V13.5H3V3.75C3 3.33562 2.66438 3 2.25 3H0.75C0.335625 3 0 3.33562 0 3.75V20.25C0 20.6644 0.335625 21 0.75 21H2.25C2.66438 21 3 20.6644 3 20.25V18H27V20.25C27 20.6644 27.3356 21 27.75 21H29.25C29.6644 21 30 20.6644 30 20.25V11.25C30 8.35031 27.6497 6 24.75 6Z"
                                                    fill="#1C64F2"
                                                />
                                            </svg>
                                            <p>3 Beds</p>
                                        </span>
                                        <span className="flex gap-1">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_742_29805)">
                                                    <path
                                                        d="M28.75 13.75H3.75V3.75C3.75 2.375 4.875 1.25 6.25 1.25C7.625 1.25 8.75 2.375 8.75 3.75V5.125C8.25 5.25 7.75 5.75 7.625 6.25H11.125C11 5.75 10.5 5.25 10 5.125V3.75C10 1.625 8.375 0 6.25 0C4.125 0 2.5 1.625 2.5 3.75V13.75H1.25C0.5 13.75 0 14.25 0 15V20C0 22.75 1.5 25.25 3.75 26.5V27.5C3.75 28.875 4.875 30 6.25 30C7.625 30 8.75 28.875 8.75 27.5H21.25C21.25 28.875 22.375 30 23.75 30C25.125 30 26.25 28.875 26.25 27.5V26.5C28.5 25.25 30 22.75 30 20V15C30 14.25 29.5 13.75 28.75 13.75ZM6.25 28.75C5.5 28.75 5 28.25 5 27.5V27.125C5.75 27.375 6.625 27.5 7.5 27.5C7.5 28.25 7 28.75 6.25 28.75ZM25 27.5C25 28.25 24.5 28.75 23.75 28.75C23 28.75 22.5 28.25 22.5 27.5C23.375 27.5 24.25 27.375 25 27.125V27.5ZM27.5 20C27.5 22.75 25.25 25 22.5 25H7.5C4.75 25 2.5 22.75 2.5 20V18.75H27.5V20ZM27.5 17.5H2.5V16.25H27.5V17.5Z"
                                                        fill="#1C64F2"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_742_29805">
                                                        <rect
                                                            width="30"
                                                            height="30"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <p>2 Bath</p>
                                        </span>
                                        <span className="flex gap-1">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_742_29809)">
                                                    <path
                                                        d="M28.75 6.25C29.0815 6.25 29.3995 6.1183 29.6339 5.88388C29.8683 5.64946 30 5.33152 30 5V1.25C30 0.918479 29.8683 0.600537 29.6339 0.366117C29.3995 0.131696 29.0815 0 28.75 0L25 0C24.6685 0 24.3505 0.131696 24.1161 0.366117C23.8817 0.600537 23.75 0.918479 23.75 1.25V2.5H6.25V1.25C6.25 0.918479 6.1183 0.600537 5.88388 0.366117C5.64946 0.131696 5.33152 0 5 0L1.25 0C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25L0 5C0 5.33152 0.131696 5.64946 0.366117 5.88388C0.600537 6.1183 0.918479 6.25 1.25 6.25H2.5V23.75H1.25C0.918479 23.75 0.600537 23.8817 0.366117 24.1161C0.131696 24.3505 0 24.6685 0 25L0 28.75C0 29.0815 0.131696 29.3995 0.366117 29.6339C0.600537 29.8683 0.918479 30 1.25 30H5C5.33152 30 5.64946 29.8683 5.88388 29.6339C6.1183 29.3995 6.25 29.0815 6.25 28.75V27.5H23.75V28.75C23.75 29.0815 23.8817 29.3995 24.1161 29.6339C24.3505 29.8683 24.6685 30 25 30H28.75C29.0815 30 29.3995 29.8683 29.6339 29.6339C29.8683 29.3995 30 29.0815 30 28.75V25C30 24.6685 29.8683 24.3505 29.6339 24.1161C29.3995 23.8817 29.0815 23.75 28.75 23.75H27.5V6.25H28.75ZM1.25 5V1.25H5V5H1.25ZM5 28.75H1.25V25H5V28.75ZM23.75 25V26.25H6.25V25C6.25 24.6685 6.1183 24.3505 5.88388 24.1161C5.64946 23.8817 5.33152 23.75 5 23.75H3.75V6.25H5C5.33152 6.25 5.64946 6.1183 5.88388 5.88388C6.1183 5.64946 6.25 5.33152 6.25 5V3.75H23.75V5C23.75 5.33152 23.8817 5.64946 24.1161 5.88388C24.3505 6.1183 24.6685 6.25 25 6.25H26.25V23.75H25C24.6685 23.75 24.3505 23.8817 24.1161 24.1161C23.8817 24.3505 23.75 24.6685 23.75 25ZM28.75 25V28.75H25V25H28.75ZM25 5V1.25H28.75V5H25Z"
                                                        fill="#1C64F2"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_742_29809">
                                                        <rect
                                                            width="30"
                                                            height="30"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            <p>1,848 Sqrt</p>
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-4">
                                        <p className="text-gray-900">
                                            Gallery
                                            <strong className="text-[#1E429F]">
                                                (200)
                                            </strong>
                                        </p>
                                        <span className="flex gap-3 items-center">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 7.65005V8.65005C9.35567 8.65005 9.68457 8.46114 9.86378 8.15392L9 7.65005ZM11.1 4.05005V3.05005C10.7443 3.05005 10.4154 3.23896 10.2362 3.54618L11.1 4.05005ZM18.9 4.05005L19.7638 3.54618C19.5846 3.23896 19.2557 3.05005 18.9 3.05005V4.05005ZM21 7.65005L20.1362 8.15392C20.3154 8.46114 20.6443 8.65005 21 8.65005V7.65005ZM3 22.95H4V10.65H3H2V22.95H3ZM6 7.65005V8.65005H9V7.65005V6.65005H6V7.65005ZM9 7.65005L9.86378 8.15392L11.9638 4.55392L11.1 4.05005L10.2362 3.54618L8.13622 7.14618L9 7.65005ZM11.1 4.05005V5.05005H18.9V4.05005V3.05005H11.1V4.05005ZM18.9 4.05005L18.0362 4.55392L20.1362 8.15392L21 7.65005L21.8638 7.14618L19.7638 3.54618L18.9 4.05005ZM21 7.65005V8.65005H24V7.65005V6.65005H21V7.65005ZM27 10.65H26V22.95H27H28V10.65H27ZM27 22.95H26C26 24.0546 25.1046 24.95 24 24.95V25.95V26.95C26.2091 26.95 28 25.1592 28 22.95H27ZM24 7.65005V8.65005C25.1046 8.65005 26 9.54548 26 10.65H27H28C28 8.44091 26.2091 6.65005 24 6.65005V7.65005ZM3 10.65H4C4 9.54548 4.89543 8.65005 6 8.65005V7.65005V6.65005C3.79086 6.65005 2 8.44091 2 10.65H3ZM6 25.95V24.95C4.89543 24.95 4 24.0546 4 22.95H3H2C2 25.1592 3.79086 26.95 6 26.95V25.95ZM19.5 16.05H18.5C18.5 17.983 16.933 19.55 15 19.55V20.55V21.55C18.0376 21.55 20.5 19.0876 20.5 16.05H19.5ZM15 20.55V19.55C13.067 19.55 11.5 17.983 11.5 16.05H10.5H9.5C9.5 19.0876 11.9624 21.55 15 21.55V20.55ZM10.5 16.05H11.5C11.5 14.1171 13.067 12.55 15 12.55V11.55V10.55C11.9624 10.55 9.5 13.0125 9.5 16.05H10.5ZM15 11.55V12.55C16.933 12.55 18.5 14.1171 18.5 16.05H19.5H20.5C20.5 13.0125 18.0376 10.55 15 10.55V11.55ZM24 25.95V24.95H6V25.95V26.95H24V25.95Z"
                                                    fill="#1E429F"
                                                />
                                            </svg>
                                            <p className="text-[#1E429F] ">
                                                add Photo
                                            </p>
                                        </span>
                                    </div>
                                    <p>
                                        {isExpanded
                                            ? `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam tenetur voluptatum alias dolor, impedit aliquam eveniet possimus suscipit, quia minus architecto? Ex ipsum accusantium harum reiciendis a quae voluptatum nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit animi quae eveniet ut vitae a consectetur illum molestias enim? Earum accusamus sequi consequatur repellendus mollitia ullam atque, quia aspernatur distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui atque natus eius! Fugiat, quam hic magnam corrupti modi accusantium, alias aut rerum sequi, ducimus distinctio eveniet. Possimus, tempore non!`
                                            : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam tenetur voluptatum alias dolor, impedit aliquam eveniet possimus suscipit, quia minus architecto?`}
                                        <button
                                            onClick={() =>
                                                setIsExpanded(!isExpanded)
                                            }
                                            className="cursor-pointer text-[#1E429F] ml-2"
                                        >
                                            {isExpanded
                                                ? "Read Less"
                                                : "Read More"}
                                        </button>
                                    </p>
                                </TabsContent>

                                <TabsContent value="Gallery">
                                    <div className="flex justify-between py-4">
                                        <p className="text-gray-900">
                                            Gallery
                                            <strong className="text-[#1E429F]">
                                                (200)
                                            </strong>
                                        </p>
                                        <span className="flex gap-3 items-center">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 7.65005V8.65005C9.35567 8.65005 9.68457 8.46114 9.86378 8.15392L9 7.65005ZM11.1 4.05005V3.05005C10.7443 3.05005 10.4154 3.23896 10.2362 3.54618L11.1 4.05005ZM18.9 4.05005L19.7638 3.54618C19.5846 3.23896 19.2557 3.05005 18.9 3.05005V4.05005ZM21 7.65005L20.1362 8.15392C20.3154 8.46114 20.6443 8.65005 21 8.65005V7.65005ZM3 22.95H4V10.65H3H2V22.95H3ZM6 7.65005V8.65005H9V7.65005V6.65005H6V7.65005ZM9 7.65005L9.86378 8.15392L11.9638 4.55392L11.1 4.05005L10.2362 3.54618L8.13622 7.14618L9 7.65005ZM11.1 4.05005V5.05005H18.9V4.05005V3.05005H11.1V4.05005ZM18.9 4.05005L18.0362 4.55392L20.1362 8.15392L21 7.65005L21.8638 7.14618L19.7638 3.54618L18.9 4.05005ZM21 7.65005V8.65005H24V7.65005V6.65005H21V7.65005ZM27 10.65H26V22.95H27H28V10.65H27ZM27 22.95H26C26 24.0546 25.1046 24.95 24 24.95V25.95V26.95C26.2091 26.95 28 25.1592 28 22.95H27ZM24 7.65005V8.65005C25.1046 8.65005 26 9.54548 26 10.65H27H28C28 8.44091 26.2091 6.65005 24 6.65005V7.65005ZM3 10.65H4C4 9.54548 4.89543 8.65005 6 8.65005V7.65005V6.65005C3.79086 6.65005 2 8.44091 2 10.65H3ZM6 25.95V24.95C4.89543 24.95 4 24.0546 4 22.95H3H2C2 25.1592 3.79086 26.95 6 26.95V25.95ZM19.5 16.05H18.5C18.5 17.983 16.933 19.55 15 19.55V20.55V21.55C18.0376 21.55 20.5 19.0876 20.5 16.05H19.5ZM15 20.55V19.55C13.067 19.55 11.5 17.983 11.5 16.05H10.5H9.5C9.5 19.0876 11.9624 21.55 15 21.55V20.55ZM10.5 16.05H11.5C11.5 14.1171 13.067 12.55 15 12.55V11.55V10.55C11.9624 10.55 9.5 13.0125 9.5 16.05H10.5ZM15 11.55V12.55C16.933 12.55 18.5 14.1171 18.5 16.05H19.5H20.5C20.5 13.0125 18.0376 10.55 15 10.55V11.55ZM24 25.95V24.95H6V25.95V26.95H24V25.95Z"
                                                    fill="#1E429F"
                                                />
                                            </svg>
                                            <p className="text-[#1E429F] ">
                                                add Photo
                                            </p>
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {data?.images?.map(
                                            (img: string, i: number) => {
                                                const isLoaded =
                                                    loadedImages.includes(i);

                                                return (
                                                    <div
                                                        key={i}
                                                        className="relative lg:w-30 w-3/12 h-30"
                                                    >
                                                        {!isLoaded && (
                                                            <Skeleton className="absolute inset-0 rounded-2xl" />
                                                        )}

                                                        <img
                                                            src={img}
                                                            alt={data.title}
                                                            onLoad={() =>
                                                                setLoadedImages(
                                                                    (prev) => [
                                                                        ...prev,
                                                                        i,
                                                                    ],
                                                                )
                                                            }
                                                            className={`rounded-2xl w-full h-full object-cover transition-opacity duration-300 ${
                                                                isLoaded
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            }`}
                                                        />
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent value="Review">
                                    <div className="flex justify-between py-4">
                                        <h2 className="text-gray-900 font-bold md:text-xl">
                                            Review
                                        </h2>

                                        <button
                                            onClick={() => setReviewing(false)}
                                            className="flex gap-3 items-center cursor-pointer"
                                        >
                                            <p className="text-[#1E429F]">
                                                add review
                                            </p>
                                        </button>
                                    </div>
                                    <div className="relative w-full py-5">
                                        <Search
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />

                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E429F]"
                                        />
                                    </div>
                                    <div className="flex justify-between py-5">
                                        <div className="flex gap-4 justify-start items-center">
                                            <img
                                                src="/revimg.jpg"
                                                alt="review image"
                                                className="h-10 w-10 rounded-full"
                                            />
                                            <p>Dale Thiel</p>
                                        </div>
                                        <p>11 months ago</p>
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        fill="#FACC15"
                                                        className="text-[#FACC15]"
                                                    />
                                                ),
                                            )}
                                        </div>
                                        I really enjoyed my stay—the room was
                                        clean, the staff were friendly, and
                                        everything I needed was nearby.
                                    </div>
                                </TabsContent>
                            </Tabs>

                            <p className="my-5">
                                Total price :
                                <strong className="text-[#1E429F] ml-2">
                                    {Math.round(data.price)}
                                </strong>
                                /night
                            </p>

                            <Link to={`/hotel_details/${data.id}/booking`}>
                                <button className="w-full py-3 self-center bg-[#1E429F] text-white cursor-pointer ">
                                    Book Now
                                </button>
                            </Link>
                        </>
                    ) : (
                        <Reviews onCancel={() => setReviewing(true)} />
                    )}
                </div>
            </div>
        </section>
    );
}
