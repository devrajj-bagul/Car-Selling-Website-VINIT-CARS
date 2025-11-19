import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";

const MostSearchedCar = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);

    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  return (
    <div className="mx-auto px-4 md:px-10 lg:mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Cars
      </h2>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <Carousel>
          <CarouselContent>
            {carList.map((car, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full">
                  <CarItem car={car} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {carList.map((car, index) => (
          <div key={index}>
            <CarItem car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSearchedCar;
