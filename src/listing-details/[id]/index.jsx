import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetail from "@/components/OwnersDetail";
import FinanacialCalculator from "@/components/FinanacialCalculator";
import Footer from "@/components/Footer";
import MostSearchedCar from "@/components/MostSearchedCar";

const ListingDetail = () => {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  // ⭐ Smooth scroll to top every time car ID changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [id]);

  // ⭐ Fetch new car data on ID change
  useEffect(() => {
    GetCarDetail();
  }, [id]);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    setCarDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      {/* MAIN CONTENT */}
      <div className="p-5 md:p-10 md:px-20">

        {/* Car Title Header */}
        <DetailHeader carDetail={carDetail} />

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">

          {/* LEFT SIDE CONTENT */}
          <div className="md:col-span-2 space-y-5">
            <ImageGallery carDetail={carDetail} />
            <Description carDetail={carDetail} />
            <Features features={carDetail?.features} />
            {/* <FinanacialCalculator carDetail={carDetail} /> */}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-5">
            <Pricing carDetail={carDetail} />
            <Specification carDetail={carDetail} />
            <OwnersDetail carDetail={carDetail} />
          </div>
        </div>
      </div>

      {/* ⭐ Now the component loads after detail section */}
      <MostSearchedCar />

      <Footer />
    </div>
  );
};

export default ListingDetail;
