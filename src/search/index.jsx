import Service from "@/Shared/Service";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { and, between, eq, gte } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "@/components/Header";
import CarItem from "@/components/CarItem";

const SearchByOption = () => {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);

  const condition = searchParam.get("cars");
  const make = searchParam.get("make");
  const price = searchParam.get("price");

  useEffect(() => {
    GetCarList();
  }, [condition, make, price]);

  const GetCarList = async () => {
    let filterList = [];

    if (condition) filterList.push(eq(CarListing.condition, condition));
    if (make) filterList.push(eq(CarListing.make, make));

    if (price) {
      if (price.includes("-")) {
        let [min, max] = price.split("-");
        filterList.push(between(CarListing.sellingPrice, Number(min), Number(max)));
      } else {
        let min = Number(price.replace("+", ""));
        filterList.push(gte(CarListing.sellingPrice, min));
      }
    }

    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(and(...filterList));

    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  return (
    <div>
      <Header />

      <div className="p-10 md:px-20">

        {/* ⭐ SMALL BACK BUTTON */}
        <Link
          to="/"
          className="
            flex items-center gap-2 text-sm font-medium 
            text-black w-fit cursor-pointer mb-4
            hover:underline hover:opacity-80 transition
          "
        >
          <BiArrowBack className="text-lg" /> Back
        </Link>

        <h2 className="font-bold text-4xl">All Cars Listing</h2>

        {/* Car List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
          {carList?.length > 0
            ? carList.map((item, index) => (
                <div key={index} className="h-full">
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByOption;
