import { ChevronLeft, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchHotel({
    products = [],
}: {
    products?: Array<{ id: string | number; title: string }>;
}) {
    const [query, setQuery] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setQuery("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const navigate = useNavigate();
    return (
        <div
            ref={wrapperRef}
            className="flex flex-col relative gap-4 items-center justify-center w-full"
        >
            <div className="flex items-center gap-5 justify-between w-full">
                <Link
                    to="/"
                    className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                >
                    <ChevronLeft />
                </Link>

                <div className="border-2 w-full flex items-center gap-4 border-gray-100 rounded-2xl px-3 py-3 relative">
                    <Search className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full outline-0"
                    />

                    {query && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 z-50">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.slice(0, 10).map((product) => (
                                    <div
                                        key={product.id}
                                        className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                                    >
                                        {product.title}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm">
                                    No products found
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
