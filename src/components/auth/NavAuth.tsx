import { Link } from "react-router-dom";
import logo from "../../assets/auth/logo.png";
import Container from "../common/Container";

export default function NavAuth() {
  return (
    <Container className="relative pt-4 flex flex-row items-center justify-end">
      <Link to="/">
        <div className="logo">
          <img className="w-[100px]" src={logo} alt="logo" />
        </div>
      </Link>
    </Container>
  );
}
