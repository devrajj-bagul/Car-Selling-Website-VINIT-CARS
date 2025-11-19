import React from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

const DetailHeader = ({ carDetail }) => {
  return (
    <div>
      {carDetail?.listingTitle ? (
        <div>
          {/* Title */}
          <h2 className="font-bold text-2xl md:text-3xl">{carDetail?.listingTitle}</h2>
          <p className="text-sm md:text-base">{carDetail?.tagline}</p>

          {/* Feature Chips */}
          <div className="flex flex-wrap gap-2 mt-3">
            
            <div className="flex items-center gap-2 bg-blue-50 rounded-full p-2 px-3">
              <HiCalendarDays className="h-6 w-6 text-blue-800" />
              <h2 className="text-blue-800 text-sm">{carDetail?.year}</h2>
            </div>

            <div className="flex items-center gap-2 bg-blue-50 rounded-full p-2 px-3">
              <IoSpeedometerOutline className="h-6 w-6 text-blue-800" />
              <h2 className="text-blue-800 text-sm">{carDetail?.mileage} Run</h2>
            </div>

            <div className="flex items-center gap-2 bg-blue-50 rounded-full p-2 px-3">
              <GiGearStickPattern className="h-6 w-6 text-blue-800" />
              <h2 className="text-blue-800 text-sm">{carDetail?.transmission}</h2>
            </div>

            <div className="flex items-center gap-2 bg-blue-50 rounded-full p-2 px-3">
              <BsFillFuelPumpDieselFill className="h-6 w-6 text-blue-800" />
              <h2 className="text-blue-800 text-sm">{carDetail?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default DetailHeader;
