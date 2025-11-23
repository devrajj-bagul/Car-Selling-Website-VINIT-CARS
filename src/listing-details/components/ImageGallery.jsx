import React, { useState, useEffect, useRef } from "react";

const ImageGallery = ({ carDetail }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Disable swipe on image (mobile)
  const imageRef = useRef(null);

  useEffect(() => {
    if (carDetail?.images?.length > 0) {
      setCurrentIndex(0);
    }
  }, [carDetail]);

  // Slide to next image
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === carDetail.images.length - 1 ? 0 : prev + 1
    );
  };

  // Slide to previous image
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carDetail.images.length - 1 : prev - 1
    );
  };

  // Prevent touch sliding (mobile)
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const preventSwipe = (e) => e.preventDefault();
    img.addEventListener("touchmove", preventSwipe, { passive: false });

    return () => {
      img.removeEventListener("touchmove", preventSwipe);
    };
  }, []);

  const mainImage = carDetail?.images?.[currentIndex]?.imageUrl;

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="w-full h-[260px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-black relative">
        <img
          ref={imageRef}
          src={mainImage}
          alt="Car"
          className="w-full h-full object-contain md:object-cover select-none"
          draggable={false}
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full text-xl hover:bg-black/70"
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full text-xl hover:bg-black/70"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4 overflow-x-auto">
        {carDetail?.images?.map((imgObj, index) => (
          <img
            key={index}
            src={imgObj.imageUrl}
            onClick={() => setCurrentIndex(index)}
            className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2
              ${
                currentIndex === index
                  ? "border-blue-600"
                  : "border-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
