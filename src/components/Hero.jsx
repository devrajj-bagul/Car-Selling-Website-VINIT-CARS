import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="w-full bg-[#eef0fc]">

      <div
        className="
          flex flex-col items-center
          w-full 
          px-4 
          py-14 
          gap-6
          sm:px-10 sm:py-20
          sm:gap-6
        "
      >
        {/* HEADING */}
        <h2
          className="
            font-bold text-center leading-tight
            text-[36px]
            sm:text-[60px]   /* DESKTOP SAME SIZE */
          "
        >
          Find your <br className="sm:hidden" /> Dream Car
        </h2>

        {/* SEARCH BOX */}
        <Search />

        {/* TESLA IMAGE */}
        <img
          src="/tesla.png"
          alt="car"
          className="
            mt-4 w-[430px]       /* MOBILE SMALLER */
            sm:w-auto sm:mt-10   /* DESKTOP ORIGINAL IMAGE SIZE */
          "
        />
      </div>

    </div>
  );
};

export default Hero;
