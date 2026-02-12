import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/Avatar.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/favorite", label: "Favorite" },
    { href: "/compare", label: "Compare" },
    { href: "/maps", label: "Maps" },
  ];

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-white">
      <div className=" px-4 md:px-6 lg:px-16 py-2 flex justify-between items-center">
        <Link to="/" className="flex lg:flex-col items-center gap-1">
          <div className="w-10">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-semibold text-lg text-blue-600">Safarni</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative cursor-pointer group font-semibold text-lg hover:text-blue-600 transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 lg:gap-5">
          <Link
            to={"/search"}
            className="hover:bg-blue-200 rounded-full p-2 duration-300 cursor-pointer"
          >
            <Search className="w-5 h-5 text-gray-600 " />
          </Link>
          <div className="hover:bg-blue-200 rounded-full p-2 duration-300 cursor-pointer">
            <SlidersHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <Link to="/profile">
            <img
              src={Avatar}
              alt="user"
              className="w-9 h-9 rounded-full object-cover cursor-pointer"
            />
          </Link>

          <div className="md:hidden">
            <Hamburger
              size={25}
              color="gray"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden overflow-hidden rounded-b-lg bg-white"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 font-semibold text-center hover:text-blue-600 duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
