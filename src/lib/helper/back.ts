import { useNavigate } from "react-router-dom";

export const handleBack = () => {
  const navigate = useNavigate();
  navigate(-1);
};
