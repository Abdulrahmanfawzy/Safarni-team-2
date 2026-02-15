import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "../../../../../components/ui/dialog";

import { useState } from "react";
export default function LastCheckOut() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    return (
        <div className="flex flex-col gap-5 justify-center items-center lg:w-9/12 w-full">
            <div className="flex justify-between items-center w-full">
                <div>
                    <p>Adults</p>
                    <p>Ages 18 Or Above</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span
                        className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() => setCounter(counter + 1)}
                    >
                        +
                    </span>
                    <span>{counter}</span>
                    <span
                        className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() =>
                            setCounter(counter > 0 ? counter - 1 : 0)
                        }
                    >
                        -
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div>
                    <p>Children</p>
                    <p>Ages 2-17</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span
                        className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() => setCounter2(counter2 + 1)}
                    >
                        +
                    </span>
                    <span>{counter2}</span>
                    <span
                        className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() =>
                            setCounter2(counter2 > 0 ? counter2 - 1 : 0)
                        }
                    >
                        -
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div>
                    <p>Infants</p>
                    <p>Under Ages 2</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span
                        className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() => setCounter3(counter3 + 1)}
                    >
                        +
                    </span>
                    <span>{counter3}</span>
                    <span
                        className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                        onClick={() =>
                            setCounter3(counter3 > 0 ? counter3 - 1 : 0)
                        }
                    >
                        -
                    </span>
                </div>
            </div>
            <Dialog>
                <DialogTrigger className="bg-[#1E429F] text-white w-full py-4 rounded-xl cursor-pointer">
                    Book Now
                </DialogTrigger>
                <DialogContent className="flex flex-col gap-5 justify-center items-center md:w-9/12 w-full pt-13" aria-describedby={undefined}>
                    <DialogTitle className="text-center">Booking Details</DialogTitle>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p>Adults</p>
                            <p>Ages 18 Or Above</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span
                                className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() => setCounter(counter + 1)}
                            >
                                +
                            </span>
                            <span>{counter}</span>
                            <span
                                className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() =>
                                    setCounter(counter > 0 ? counter - 1 : 0)
                                }
                            >
                                -
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p>Children</p>
                            <p>Ages 2-17</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span
                                className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() => setCounter2(counter2 + 1)}
                            >
                                +
                            </span>
                            <span>{counter2}</span>
                            <span
                                className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() =>
                                    setCounter2(counter2 > 0 ? counter2 - 1 : 0)
                                }
                            >
                                -
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p>Infants</p>
                            <p>Under Ages 2</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span
                                className="bg-[#1E429F] text-white rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() => setCounter3(counter3 + 1)}
                            >
                                +
                            </span>
                            <span>{counter3}</span>
                            <span
                                className="bg-[#F3F4F6] text-black rounded-xl cursor-pointer flex items-center justify-center px-3 py-2"
                                onClick={() =>
                                    setCounter3(counter3 > 0 ? counter3 - 1 : 0)
                                }
                            >
                                -
                            </span>
                        </div>
                    </div>
                    <button className="bg-[#1E429F] text-white w-full py-4 rounded-xl cursor-pointer">
                        Book Now
                    </button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
