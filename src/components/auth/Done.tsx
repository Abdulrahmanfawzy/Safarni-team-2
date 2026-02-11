// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/done.png";
import Container from "../../components/common/Container";
import { Button } from "../../components/ui/button";
import NavAuth from "../../components/auth/NavAuth";
import { Check } from "lucide-react";
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
              <Check
                className="text-[#FFFFFF] p-3 rounded-full bg-[#31C48D] mb-4"
                strokeWidth={3}
                size={50}
              />
              <h1 className="font-medium text-[26px] text-center text-[#111928]">
                password reset{" "}
              </h1>
              <p className="text-center max-w-[510px] text-[20px] font-normal text-[#4B5563]">
                your password has been successfully reset click below to log in
                magically.
              </p>
            </div>
            <div className="buttons flex flex-col justify-between gap-6">
              <Link to="/login">
                <Button className="cursor-pointer w-full rounded-2 px-4 py-6 font-semibold text-[18px] text-[#FFFFFF] bg-[#1E429F] hover:bg-[#1e439fef]">
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
