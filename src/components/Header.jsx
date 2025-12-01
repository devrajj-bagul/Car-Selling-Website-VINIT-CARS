import React, { useState } from "react";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const { isSignedIn } = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // WhatsApp Message
  const whatsappMessage = encodeURIComponent(
    "Hello Vinit Cars, mujhe ek car ke baare mein information chahiye."
  );

  // Universal Maps Link
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Vinit+Auto+Car+Mall+Malegaon";

  const handleSubmitClick = () => {
    if (!isSignedIn) navigate("/sign-in");
    else navigate("/profile");
  };

  return (
    <div className="shadow-sm p-5 relative bg-white">

      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/">
          <h1
            className="
              text-3xl font-extrabold tracking-wide 
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent animate-gradient-x
            "
          >
            VINIT CARS
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-12 items-center text-[17px]">

          <Link to="/">
            <li className="cursor-pointer transition 
              hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700
              hover:text-white px-3 py-1 rounded-md">
              Home
            </li>
          </Link>

          <Link to="/search">
            <li className="cursor-pointer transition
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700
              hover:text-white px-3 py-1 rounded-md">
              Cars
            </li>
          </Link>

          {/* WHATSAPP */}
          <li
            onClick={() =>
              window.open(
                `https://wa.me/919284438720?text=${whatsappMessage}`,
                "_blank"
              )
            }
            className="cursor-pointer transition
              hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700
              hover:text-white px-3 py-1 rounded-md"
          >
            WhatsApp
          </li>

          {/* CALL */}
          <li
            onClick={() => (window.location.href = "tel:+919284438720")}
            className="cursor-pointer transition
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800
              hover:text-white px-3 py-1 rounded-md"
          >
            Call Dealer
          </li>

          {/* LOCATION */}
          <li
            onClick={() => window.open(mapsLink, "_blank")}
            className="cursor-pointer transition
              hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800
              hover:text-white px-3 py-1 rounded-md"
          >
            Location
          </li>

          {/* REVIEWS */}
          <a
            href="https://youtube-shorts-zeta.vercel.app/"
            className="cursor-pointer transition
              hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600
              hover:text-white px-3 py-1 rounded-md"
          >
            Reviews
          </a>
        </ul>

        {/* DESKTOP SUBMIT BUTTON */}
        <div className="hidden md:block">
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <UserButton />
              <Button onClick={handleSubmitClick}>Submit Listings</Button>
            </div>
          ) : (
            <Button onClick={handleSubmitClick}>Submit Listings</Button>
          )}
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <HiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {openMenu && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-7 z-50">
          <HiX
            className="text-3xl cursor-pointer absolute top-5 right-5"
            onClick={() => setOpenMenu(false)}
          />

          <ul className="flex flex-col gap-6 mt-14 text-lg">

            <Link to="/" onClick={() => setOpenMenu(false)}>
              <li className="cursor-pointer">Home</li>
            </Link>

            <Link to="/search" onClick={() => setOpenMenu(false)}>
              <li className="cursor-pointer">Cars</li>
            </Link>

            {/* WHATSAPP MOBILE */}
            <li
              onClick={() =>
                window.open(
                  `https://wa.me/919284438720?text=${whatsappMessage}`,
                  "_blank"
                )
              }
              className="cursor-pointer text-green-600"
            >
              WhatsApp
            </li>

            {/* CALL MOBILE */}
            <li
              onClick={() => (window.location.href = "tel:+919284438720")}
              className="cursor-pointer text-blue-600"
            >
              Call Dealer
            </li>

            {/* LOCATION MOBILE */}
            <li
              onClick={() => window.open(mapsLink, "_blank")}
              className="cursor-pointer text-purple-600"
            >
              Location
            </li>

            {/* REVIEWS */}
            <a
              href="https://youtube-shorts-zeta.vercel.app"
              onClick={() => setOpenMenu(false)}
            >
              <li className="cursor-pointer">Reviews</li>
            </a>

            {/* MOBILE SUBMIT BUTTON */}
            <Button className="mt-4 w-full" onClick={() => {
              setOpenMenu(false);
              handleSubmitClick();
            }}>
              Submit Listings
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
