import React from "react";
import TourGallery from "../../../assets/images/tour-gallery-7.png";

const Gallery = () => {
  const images = Array(12).fill(TourGallery);

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 py-8 font-['Poppins']">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-[24px] font-bold text-[#111928]">Gallery</h2>
        <span className="text-[24px] font-bold text-blue-700">(200)</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-[12px]">
            <img
              src={img}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
              alt={`Gallery ${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
