import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar } from "lucide-react";
const PaymentForm = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // API call
    navigate("/payment/success");
  };

  return (
    <>
      <div className="space-y-4">
        {/* inputs here*/}
        <div className="space-y-2">
          <label className="text-sm font-bold primary-gray">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-(--primary-blue)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold primary-gray">Your Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="kneeDue@untitledui.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-(--primary-blue)"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-bold primary-gray">Valid Date</label>
            <input
              type="text"
              placeholder="12-6-2024"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none"
            />
          </div>
          <div className="w-32 space-y-2">
            <label className="text-sm font-bold primary-gray">Cvv</label>
            <div className="relative flex items-center border border-gray-200 rounded-lg px-3">
              <input
                type="text"
                placeholder="522"
                className="w-full py-3 outline-none"
              />
              <Calendar className="text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleConfirm}
        className="w-full bg-(--primary-blue) text-white py-4 rounded-xl cursor-pointer">
        Confirm Booking
      </button>
    </>
  );
};

export default PaymentForm;
