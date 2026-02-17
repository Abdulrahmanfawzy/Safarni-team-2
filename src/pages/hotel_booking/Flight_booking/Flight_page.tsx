import React from 'react'
import planeph from "../../../assets/images/plane-ph.png"
import { useForm } from "react-hook-form";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { GiReturnArrow } from "react-icons/gi";
import { MdArrowRightAlt } from "react-icons/md";

export default function Flight_page() {

  type FormValues = {
    tripType: "round" | "multi" | "one";
    location: string;
    destination: string;
    departure: string;
    returnDate: string;
    passengers: string;
  };

  const { register, setValue, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      tripType: "round",
      passengers: "1"
    },
  });

  const tripTypes = [
    {
      id: "round",
      label: "Round Trip",
      icon: <GiReturnArrow />
    },
    {
      id: "multi",
      label: "Multi City",
      icon: <HiArrowPathRoundedSquare />
    },
    {
      id: "one",
      label: "one way",
      icon: <MdArrowRightAlt />
    },
  ];

  const active = watch("tripType");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="main_container flex items-center justify-around p-5 mt-5">

    
      <section className="plane-ph w-100 rounded-xl bg-[#F4F4F4]">
        <img src={planeph} alt="" />    
      </section>

     
      <section className='booking_form w-[420px]'>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div className="trip_type flex  ">
            {tripTypes.map((tap) => (
              <button
                type="button"
                key={tap.id}
                onClick={() => setValue("tripType", tap.id)}
                className={`rounded-lg transition text-[#1A56DB] font-medium bg-[#EBF5FF] mr-3 p-2
                  ${active === tap.id ?  " shadow" : "  bg-gray-100 text-gray-500"}
                `}
              >
                <div className="flex gap-2 items-center text-lg">
                  {tap.icon}
                  {tap.label}
                </div>
              </button>
            ))}
          </div>

          
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              placeholder="Montreal, Canada"
              {...register("location", { required: true })}
              className="w-full border rounded-lg p-2"
            />
          </div>

          
          <div>
            <label className="block mb-1">Destination</label>
            <input
              type="text"
              placeholder="Tokyo, Japan"
              {...register("destination", { required: true })}
              className="w-full border rounded-lg p-2"
            />
          </div>

          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-1">Departure</label>
              <input
                type="date"
                {...register("departure")}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {active !== "one" && (
              <div>
                <label className="block mb-1">Return</label>
                <input
                  type="date"
                  {...register("returnDate")}
                  className="w-full border rounded-lg p-2"
                />
              </div>
            )}
          </div>

          
          <div>
            <label className="block mb-1">Passenger</label>
            <select
              {...register("passengers")}
              className="w-full border rounded-lg p-2"
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
            </select>
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
          >
            Search Flights
          </button>

        </form>
      </section>
    </section>
  )
}
