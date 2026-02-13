import { Link } from "react-router-dom";
import { useState } from "react";

export default function HotelCardsAvailable({ product }: { product: any }) {
        const [imgLoaded, setImgLoaded] = useState(false);
    
    return (
        <Link to={`/hotel_details/${product.id}`}
            style={{ boxShadow: "0 0 26.37px 0 #6F6F6F40" }}
            className="p-2 rounded-2xl lg:w-2/10 md:w-5/12 w-full grid md:justify-between justify-center gap-2 cursor-pointer items-center"
        >
            
            <img
                src={product.thumbnail}
                alt={product.title}
                onLoad={() => setImgLoaded(true)}
                className={`rounded-2xl w-full h-52 object-cover transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
            <h3 className="text-start px-2 font-bold">{product.title}</h3>
            <p className="text-start px-2">From <strong className="text-[#1C64F2]" >${Math.round(product.price)}</strong> Per Night</p>
        </Link>
    );
}
