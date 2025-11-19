import Service from "@/Shared/Service";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { and, between, eq, gte } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Search from "@/components/Search";
import CarItem from "@/components/CarItem";

const ALLCarsHere = () => {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);

  const condition = searchParam.get("cars"); // new / used
  const make = searchParam.get("make"); // Tata, Maruti, etc.
  const price = searchParam.get("price"); // 0-500000, 500000-1000000, 2000000+

  useEffect(() => {
    GetCarList();
  }, [condition, make, price]);

  const GetCarList = async () => {
    let filterList = [];

    // Filter 1: Condition
    if (condition) {
      filterList.push(eq(CarListing.condition, condition));
    }

    // Filter 2: Make
    if (make) {
      filterList.push(eq(CarListing.make, make));
    }

    // Filter 3: Price
    if (price) {
      if (price.includes("-")) {
        let [min, max] = price.split("-");
        min = Number(min);
        max = Number(max);
        filterList.push(between(CarListing.sellingPrice, min, max));
      } else {
        // Example: price = "2000000+"
        let min = Number(price.replace("+", ""));
        filterList.push(gte(CarListing.sellingPrice, min));
      }
    }

    // Final Query
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
      {/* <Header /> */}

      {/* <div className="p-16 bg-black flex justify-center">
        <Search />
      </div> */}

      <div className=" p-10 md:px-20">
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

export default ALLCarsHere;
