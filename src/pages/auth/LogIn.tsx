// Components
import LeftCard from "../../components/auth/LeftCard";
import RightCard from "../../components/auth/RightCard";

// Images
import leftImage from "../../assets/auth/logIn.png";
import Container from "../../components/common/Container";
import LoginForm from "../../components/auth/LoginForm";
import NavAuth from "../../components/auth/NavAuth";

export default function LogIn() {
  return (
    <>
      <Container className="flex flex-col items-center h-screen justify-between">
        <NavAuth />
        <div className="flex flex-row items-center gap-6 h-screen justify-between">
          {/* Left Card */}
          <div className="left-card max-w-[608px] h-full gap-4  flex flex-col justify-center ">
            <LeftCard back={true} image={leftImage} imgInfo="Log In Image" />
          </div>
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
              <LoginForm />
            </div>
          </RightCard>
        </div>
      </Container>
    </>
  );
}
