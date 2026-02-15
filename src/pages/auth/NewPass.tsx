// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/new_ForgetPass.png";
import Container from "../../components/common/Container";
import NewPassForm from "../../components/auth/NewPassForm";
import NavAuth from "../../components/auth/NavAuth";
import Content from "../../components/common/Content";
import { useState } from "react";
import Done from "../../components/auth/Done";

export default function NewPass() {
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
  };

  return (
    <>
      <Container className="flex flex-col items-center h-screen justify-between">
        <NavAuth />
        {success ? (
          <Done />
        ) : (
          <Content>
            {/* Left Card */}
            <LeftCard back={true} image={leftImage} imgInfo="Sign Up Image" />
            {/* Right Card */}
            <RightCard>
              <div className="content flex flex-col gap-4 w-full">
                <div className="welcome flex flex-col items-center gap-3">
                  <h1 className="font-medium text-[28px] text-center text-[#111928]">
                    Set New Password
                  </h1>
                  <p className="text-center max-w-[510px] text-[21px] font-normal text-[#4B5563]">
                    Your New Password Must be Different to Previously Used
                    Password
                  </p>
                </div>
                <NewPassForm handleSuccess={handleSuccess} />
              </div>
            </RightCard>
          </Content>
        )}
      </Container>
    </>
  );
}
