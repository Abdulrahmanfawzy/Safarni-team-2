// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/signUp.png";
import Container from "../../components/common/Container";
import SignupForm from "../../components/auth/SignupForm";
import NavAuth from "../../components/auth/NavAuth";
import Content from "../../components/common/Content";

export default function SignUp() {
  return (
    <>
      <Container className="flex flex-col items-center h-screen justify-between">
        <NavAuth />
        <Content>
          {/* Left Card */}
          <LeftCard back={true} image={leftImage} imgInfo="Sign Up Image" />
          {/* Right Card */}
          <RightCard>
            <div className="content flex flex-col gap-4 w-full">
              <div className="welcome flex flex-col items-center gap-3">
                <h1 className="font-medium text-[28px] text-center text-[#111928]">
                  Welcome
                </h1>
                <p className="text-center max-w-[510px] text-[21px] font-normal text-[#4B5563]">
                  welcome back! please fill your Data
                </p>
              </div>
              <SignupForm />
            </div>
          </RightCard>
        </Content>
      </Container>
    </>
  );
}
