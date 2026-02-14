import { useNavigate } from "react-router-dom";
import SuccessImg from "../../../assets/payment/done.png";
import CheckCircle from "../../../assets/payment/check-circle.png";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 gap-0">
      <div className="grid lg:grid-cols-2 gap-30 items-center max-w-6xl w-full">
        <div className="bg-gray-100 rounded-3xl p-12 flex justify-center">
          <img src={SuccessImg} alt="Success" className="max-w-sm" />
        </div>

        <div className="text-center lg:text-left space-y-6">
          <div className="flex justify-center lg:justify-start">
            <div className="w-44 h-44 rounded-full flex items-end justify-center">
              <img
                src={CheckCircle}
                alt="Success"
                className="max-w-full max-h-full"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold">Payment Successful!</h2>

          <p className="text-gray-500">Thank you for your trust</p>

          <button
            onClick={() => navigate("/")}
            className="bg-(--primary-blue) text-white px-8 py-3 rounded-lg cursor-pointer hover:opacity-90 transition-opacity ease-in-out ">
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
