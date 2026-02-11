import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeftCard({
  image,
  imgInfo,
  back,
}: {
  image: string;
  imgInfo: string;
  back?: boolean;
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="left-card w-full lg:w-1/2 lg:max-w-[608px] hidden sm:flex h-[30vh] lg:h-full flex-col justify-center items-center lg:items-start max-lg:mb-6">
      <div className="w-full h-full lg:mb-5 lg:max-w-[608px] flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center justify-center h-full w-[calc(100%-100px)] lg:max-w-[80%] rounded-2xl bg-[#F4F4F4]">
          {back && (
            <div
              onClick={handleBack}
              className="cursor-pointer icon absolute left-0 -top-16 p-3 rounded-full bg-[#F3F4F6] z-10"
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
    </div>
  );
}
