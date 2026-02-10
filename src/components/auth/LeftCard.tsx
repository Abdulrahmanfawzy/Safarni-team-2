import { ChevronLeft } from "lucide-react";
import { handleBack } from "../../lib/helper/back";

export default function LeftCard({
  image,
  imgInfo,
  back
}: {
  image: string;
  imgInfo: string;
  back?: boolean;
}) {



  return (
    <div className="w-full h-full mb-5 max-w-[608px] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center h-full max-w-[80%] rounded-2xl bg-[#F4F4F4]">
        {back && (
          <div
          onClick={handleBack}
          className="cursor-pointer icon absolute left-0 -top-15 p-3 rounded-full bg-[#F3F4F6]"
        >
          <ChevronLeft size={22} color="#0D0D0D" />
        </div>
        )}
        
        <img
          className="w-full h-full p-4 object-contain"
          src={image}
          alt={imgInfo}
        />
      </div>
    </div>
  );
}
