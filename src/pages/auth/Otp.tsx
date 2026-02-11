// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/new_ForgetPass.png";
import Container from "../../components/common/Container";
import OtpForm from "../../components/auth/OtpForm";
import NavAuth from "../../components/auth/NavAuth";
import { Mail } from "lucide-react";
import Content from "../../components/common/Content";

export default function Otp() {
  return (
    <>
      <Container className="flex flex-col items-center h-screen justify-between">
        <NavAuth />
        <Content>
          {/* Left Card */}
          <LeftCard
            back={true}
            image={leftImage}
            imgInfo="Forget Password Image"
          />
          {/* Right Card */}
          <RightCard>
            <div className="content flex flex-col gap-4 w-full">
              <div className="welcome flex flex-col items-center gap-3">
                <Mail className="text-[#AFAFAF] mb-5" size={25} />
                <h1 className="font-medium text-[28px] text-center text-[#111928]">
                  Verify Code
                </h1>
                <p className="text-center max-w-[510px] text-[18px] font-normal text-[#6B7280]">
                  please enter the code we just sent to email{" "}
                  <span className="text-[#1E429F]">kneedue@untitled.com</span>
                </p>
              </div>
              <OtpForm />
            </div>
          </RightCard>
        </Content>
      </Container>
    </>
  );
}
