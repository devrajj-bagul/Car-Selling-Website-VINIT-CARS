import { supabase } from "../../../configs/supabase";
import { storage } from "../../../configs/firebaseConfig";
import { ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { CarImages } from "./../../../configs/schema";
import { db } from "./../../../configs";
import { eq } from "drizzle-orm";

const UploadImages = ({ triggleUploadImages, setLoader, carInfo, mode }) => {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [EditCarImageList, setEditCarImageList] = useState([]);

  useEffect(() => {
    if (mode == "edit") {
      setEditCarImageList([]);
      carInfo?.images.forEach((image) => {
        setEditCarImageList((prev) => [...prev, image?.imageUrl]);
        console.log(image);
      });
    }
  }, [carInfo]);

  useEffect(() => {
    if (triggleUploadImages && selectedFileList.length > 0) {
      UploadImageToServer(selectedFileList);
    }
  }, [triggleUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    const result = await db
      .delete(CarImages)
      .where(eq(CarImages.id, carInfo?.images[index].id))
      .returning({ id: CarImages.id });

    const imageList = EditCarImageList.filter((item) => item != image);
    setEditCarImageList(imageList);
  };

  const UploadImageToServer = async () => {
    setLoader(true);
    for (const file of selectedFileList) {
      // Get file extension
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // 1️⃣ Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("car-marketplace")
        .upload(fileName, file);

      if (error) {
        console.error("Upload failed:", error.message);
        continue;
      }

      // 2️⃣ Get Public URL
      const { data: urlData } = supabase.storage
        .from("car-marketplace")
        .getPublicUrl(fileName);

      const imageUrl = urlData.publicUrl;
      console.log("Uploaded Image URL:", imageUrl);

      // 3️⃣ Save Image URL in Neon DB (Drizzle)
      await db.insert(CarImages).values({
        imageUrl: imageUrl, // correct URL here
        carListingId: triggleUploadImages, // car listing ID from AddListing
      });

      setLoader(false);

      console.log("Image saved in Neon DB");
    }
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {mode == "edit" &&
          EditCarImageList.map((image, index) => (
            <div key={index}>
              <IoMdCloseCircle
                className="absolute m-2 text-lg text-white"
                onClick={() => onImageRemoveFromDB(image, index)}
              />

              <img
                src={image}
                className="w-full h-[130px] object-cover rounded-xl"
                alt=""
              />
            </div>
          ))}

        {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white"
              onClick={() => onImageRemove(image, index)}
            />

            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
              alt=""
            />
          </div>
        ))}
        <label htmlFor="upload-iamges">
          <div className="border rounded-xl border-dotted border-blue-600 bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-red-600">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-iamges"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
};

export default UploadImages;
