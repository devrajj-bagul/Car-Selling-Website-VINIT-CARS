import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const ImageGallery = ({ carDetail }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <div className="w-full">

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}

      {/* Main Slider */}
      <Swiper
        modules={[Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        className="rounded-xl shadow-lg w-full h-[260px] md:h-[500px]"
      >
        {carDetail?.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.imageUrl}
              className="w-full h-full object-contain md:object-cover rounded-xl cursor-pointer"
              alt="Car"
              onClick={() => setFullscreenImg(img.imageUrl)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mt-4"
      >
        {carDetail?.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.imageUrl}
              className="w-full h-20 object-cover rounded-lg border cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
