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
import Footer from "@/components/Footer";
import MostSearchedCar from "@/components/MostSearchedCar";

const ListingDetail = () => {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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

        {/* 1️⃣ Car Title Header */}
        <DetailHeader carDetail={carDetail} />

        {/* 📱 MOBILE MODE (FULL SEPARATE ORDER) */}
        <div className="block md:hidden space-y-6 mt-6">

          {/* 2️⃣ Image */}
          <ImageGallery carDetail={carDetail} />

          {/* 3️⃣ Price */}
          <Pricing carDetail={carDetail} />

          {/* 4️⃣ Description */}
          <Description carDetail={carDetail} />

          {/* 5️⃣ Features */}
          <Features features={carDetail?.features} />

          {/* 6️⃣ Specification */}
          <Specification carDetail={carDetail} />

          {/* 7️⃣ Owner */}
          <OwnersDetail carDetail={carDetail} />
        </div>

        {/* 🖥 DESKTOP VIEW (unchanged layout) */}
        <div className="hidden md:grid grid-cols-3 w-full mt-10 gap-5">

          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-5">
            <ImageGallery carDetail={carDetail} />
            <Description carDetail={carDetail} />
            <Features features={carDetail?.features} />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            <Pricing carDetail={carDetail} />
            <Specification carDetail={carDetail} />
            <OwnersDetail carDetail={carDetail} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <MostSearchedCar />
      <Footer />
    </div>
  );
};

export default ListingDetail;
