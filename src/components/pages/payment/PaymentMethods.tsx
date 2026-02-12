import { useState } from "react";
import PaymentForm from "./PaymentForm";
import { ArrowLeft, PlusCircle } from "lucide-react";
import CreditImg from "../../../assets/payment/credit.png";

const PaymentMethods = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* {left side image of credit card} */}
        <div className="w-full lg:w-1/2 rounded-[24px] p-12 flex justify-center items-center aspect-square lg:aspect-square">
          <div className="relative w-full max-w-sm transition-all duration-700">
            <img
              src={CreditImg}
              alt="Credit Card"
              className="w-full h-auto drop-shadow-2xl animate-bounce-slow"
            />
          </div>
        </div>

        {/* content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-4">
          {/* back button appear when form appears */}
          {isFormVisible && (
            <button
              onClick={() => setIsFormVisible(false)}
              className="flex items-center gap-2 text-sm secondary-gray hover:text-(--primary-blue) transition-colors mb-4 cursor-pointer">
              <ArrowLeft size={16} /> Back to payment methods
            </button>
          )}

          <h2 className="text-[24px] font-bold text-(--primary-gray)">
            Payment Methods
          </h2>

          <div className="space-y-4">
            <p className="text-[16px] text-(--secondary-gray)">
              Add Your Payment Method
            </p>

            {/* icons*/}
            <div className="flex flex-wrap gap-3">
              {["Paypal", "Mastercard", "Visa"].map((method) => (
                <div
                  key={method}
                  className={`px-4 py-4 rounded-xl flex items-center gap-2 bg-[##F3F4F6] transition-all cursor-pointer ${method === "Visa" ? "border-blue-600" : "border-gray-100"}`}>
                  <img
                    src={`/${method.toLowerCase()}.png`}
                    alt={method}
                    className="h-4"
                  />
                  <span className="text-sm font-medium text-(--secondary-gray)">
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {!isFormVisible ? (
            <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex justify-center pt-12">
                <button className="flex items-center gap-2 text-(--secondary-gray) font-bold text-[18px]">
                  Add Card <PlusCircle size={24} />
                </button>
              </div>

              <button
                onClick={() => setIsFormVisible(true)}
                className="w-full bg-(--primary-blue) text-white font-bold py-4 rounded-xl text-[18px] hover:opacity-90 shadow-lg active:scale-95 transition-all cursor-pointer">
                Continue
              </button>
            </div>
          ) : (
            <PaymentForm />
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
