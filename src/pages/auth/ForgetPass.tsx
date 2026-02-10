// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/new_ForgetPass.png";
import Container from "../../components/common/Container";
import ForgetPassForm from "../../components/auth/ForgetPassForm";
import NavAuth from "../../components/auth/NavAuth";
import { KeyRound } from "lucide-react";

export default function ForgetPass() {
  return (
    <>
      <Container className="flex flex-col items-center h-screen justify-between">
        <NavAuth />
        <div className="flex flex-row items-center gap-6 h-screen justify-between">
          {/* Left Card */}
          <div className="left-card max-w-[608px] h-full gap-4  flex flex-col justify-center ">
            <LeftCard back={true} image={leftImage} imgInfo="Forget Password Image" />
          </div>
          {/* Right Card */}
          <RightCard>
            <div className="content flex flex-col gap-4 w-full">
              <div className="welcome flex flex-col items-center gap-3">
                <KeyRound className="text-[#AFAFAF] mb-5" size={25} />
                <h1 className="font-medium text-[28px] text-center text-[#111928]">
                  Forget Password
                </h1>
                <p className="text-center max-w-[510px] text-[18px] font-normal text-[#6B7280]">
                  please enter your email to reset that password
                </p>
              </div>
              <ForgetPassForm />
            </div>
          </RightCard>
        </div>
      </Container>
    </>
  );
}
