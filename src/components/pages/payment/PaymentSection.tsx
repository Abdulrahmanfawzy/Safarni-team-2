import React from "react";
import { PlusCircle } from "lucide-react";

const PaymentMethod = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-12 font-poppins">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* الجزء الأيسر: عرض البطاقة */}
        <div className="w-full lg:w-1/2 bg-[#F9FAFB] rounded-[24px] p-12 flex justify-center items-center aspect-square md:aspect-video lg:aspect-square">
          <div className="relative w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
            {/* صورة البطاقة الـ 3D المرفوعة */}
            <img
              src="/3d-credit-card.png"
              alt="Credit Card Preview"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* الجزء الأيمن: خيارات الدفع */}
        <div className="w-full lg:w-1/2 space-y-8 pt-4">
          <h2 className="text-[24px] font-bold primary-gray">Payment Method</h2>

          <div className="space-y-4">
            <p className="text-[16px] secondary-gray">
              Add Your Payment Method
            </p>

            {/* أيقونات طرق الدفع */}
            <div className="flex flex-wrap gap-4">
              <div className="light-gray px-6 py-3 rounded-xl flex items-center gap-2 border border-gray-100">
                <img src="/paypal-icon.png" alt="Paypal" className="h-5" />
                <span className="font-medium text-gray-700">Paypal</span>
              </div>
              <div className="light-gray px-6 py-3 rounded-xl flex items-center gap-2 border border-gray-100">
                <img
                  src="/mastercard-icon.png"
                  alt="Mastercard"
                  className="h-5"
                />
                <span className="font-medium text-gray-700">Mastercard</span>
              </div>
              <div className="light-gray px-6 py-3 rounded-xl flex items-center gap-2 border border-gray-100">
                <img src="/visa-icon.png" alt="Visa" className="h-5" />
                <span className="font-medium text-gray-700">Visa</span>
              </div>
            </div>
          </div>

          {/* إضافة بطاقة جديدة */}
          <div className="flex justify-end pt-12">
            <button className="flex items-center gap-2 primary-gray font-bold text-[18px] hover:opacity-80 transition-opacity">
              Add Card <PlusCircle size={24} />
            </button>
          </div>

          {/* زر المتابعة */}
          <button className="w-full primary-blue text-white font-bold py-4 rounded-xl text-[18px] hover:opacity-90 transition-all shadow-lg active:scale-[0.98]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
