import React, { useState } from "react";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between items-center shadow-sm p-5 relative">
      {/* LOGO */}
      {/* <img src="/vl.png" alt="LOGO" width={150} height={100} /> */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
        Vinit Cars
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-16">
        <Link to="/">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>

        <Link to="/search">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Cars
          </li>
        </Link>

        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <a
            href="https://wa.me/919284438720"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Desktop Buttons */}
      {isSignedIn ? (
        <div className="hidden md:flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listings</Button>
          </Link>
        </div>
      ) : (
        <div className="hidden md:block">
          <Button>Submit Listings</Button>
        </div>
      )}

      {/* MOBILE VIEW STARTS HERE */}

      <div className="md:hidden flex items-center gap-4">
        {/* Cars visible directly in mobile */}
        <Link to="/search">
          <span className="font-medium text-[16px] cursor-pointer">Cars</span>
        </Link>

        {/* Hamburger Menu */}
        <HiMenu
          className="text-3xl cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      </div>

      {/* MOBILE SLIDE MENU */}
      {openMenu && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transition-all duration-300">
          <HiX
            className="text-3xl cursor-pointer absolute top-5 right-5"
            onClick={() => setOpenMenu(false)}
          />

          <ul className="flex flex-col gap-6 mt-12 text-lg">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              <li className="font-medium cursor-pointer">Home</li>
            </Link>

            <Link to="/search" onClick={() => setOpenMenu(false)}>
              <li className="font-medium cursor-pointer">Contact Us</li>
            </Link>

            {isSignedIn ? (
              <Link to={"/profile"} onClick={() => setOpenMenu(false)}>
                <Button className="mt-3 w-full">Submit Listings</Button>
              </Link>
            ) : (
              <Button className="mt-3 w-full">Submit Listings</Button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
