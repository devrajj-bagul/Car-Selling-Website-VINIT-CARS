import React, { useState, useEffect } from "react";

const ImageGallery = ({ carDetail }) => {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (carDetail?.images?.length > 0) {
      setMainImage(carDetail.images[0].imageUrl);
    }
  }, [carDetail]);

  return (
    <div>
      {/* Main Image */}
      <div className="w-full h-[260px] md:h-[500px] overflow-hidden rounded-xl shadow-lg bg-black">
        <img
          src={mainImage}
          alt="Car"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4 overflow-x-auto">
        {carDetail?.images?.map((imgObj, index) => (
          <img
            key={index}
            src={imgObj.imageUrl}
            onClick={() => setMainImage(imgObj.imageUrl)}
            className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2
              ${
                mainImage === imgObj.imageUrl
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
