import Back from "../common/Back";

export default function LeftCard({
  image,
  imgInfo,
  back,
}: {
  image: string;
  imgInfo: string;
  back?: boolean;
}) {
  return (
    <div className="left-card w-full lg:w-1/2 lg:max-w-[608px] hidden sm:flex h-[30vh] lg:h-full flex-col justify-center items-center lg:items-start max-lg:mb-6">
      <div className="w-full h-full lg:mb-5 lg:max-w-[608px] flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center justify-center h-full w-[calc(100%-100px)] lg:max-w-[80%] rounded-2xl bg-[#F4F4F4]">
          {back && <Back />}
          <img
            className="w-full h-full p-4 object-contain"
            src={image}
            fetchPriority="high"
            alt={imgInfo}
          />
        </div>
      </div>
    </div>
  );
}
