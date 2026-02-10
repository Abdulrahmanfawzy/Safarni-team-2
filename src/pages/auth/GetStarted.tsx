// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/getStarted.png";
import Container from "../../components/common/Container";
import { Button } from "../../components/ui/button";
import NavAuth from "../../components/auth/NavAuth";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <Container className="flex flex-col items-center h-screen justify-between">
      <NavAuth />
      <div className="flex flex-row items-center gap-6 h-screen justify-between">
        {/* Left Card */}
        <div className="left-card max-w-[608px] h-full flex flex-col justify-center ">
          <LeftCard
            back={false}
            image={leftImage}
            imgInfo="Get Started Image"
          />
        </div>
        {/* Right Card */}
        <RightCard>
          <div className="content flex flex-col gap-6">
            <div className="welcome flex flex-col items-center gap-4">
              <h1 className="font-medium text-[26px] text-center text-[#111928]">
                Welcome Again
              </h1>
              <p className="text-center max-w-[510px] text-[20px] font-normal text-[#4B5563]">
                Safarni is your all-in-one travel guide. Discover destinations,
                compare trip prices, book flights, hotels, car rentals, and
                local tours — all through one interactive experience.
              </p>
            </div>
            <div className="buttons flex flex-col justify-between gap-6">
              <Link to="/signup">
                <Button className="cursor-pointer w-full rounded-2 px-4 py-6 font-semibold text-[18px] text-[#FFFFFF] bg-[#1E429F] hover:bg-[#1e439fef]">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="cursor-pointer w-full rounded-2 px-4 py-6 font-semibold text-[18px] text-[#1E429F] bg-[#FFFFFF] border border-[#1E429F] hover:bg-[#F4F4F4]">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </RightCard>
      </div>
    </Container>
  );
}
