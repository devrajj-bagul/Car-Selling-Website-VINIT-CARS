import React from "react";
import { Separator } from "./ui/separator";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const CarItem = ({ car }) => {
  //  console.log("Car Data:", car);
  return (
    <Link to={'/listing-details/'+car?.id}>
    <div className="rounded-xl bg-white border hover:shadow-md curser-pointer">
        <h2 className="absolute m-2 bg-blue-500 px-2 rounded-full text-sm text-white">{car?.condition}</h2>
      <img
        src={car?.images[0]?.imageUrl}
        width={"100%"}
        height={250}
        alt=""
        className="rounded-t-xl h-[180px] object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car?.listingTitle}</h2>

        <Separator />

        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <BsFillFuelPumpFill className="text-lg mb-2" />
            <h2>{car?.mileage} Miles</h2>
          </div>

          <div className="flex flex-col items-center">
            <IoSpeedometerOutline className="text-lg mb-2" />
            <h2>{car?.fuelType}</h2>
          </div>

          <div className="flex flex-col items-center">
            <GiGearStick className="text-lg mb-2" />
            <h2>{car?.transmission}</h2>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">₹ {car?.sellingPrice}</h2>
          <h2 className="text-blue-600 text-sm flex gap-2 items-center">
           
               <MdOutlineOpenInNew />
          </h2>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CarItem;
