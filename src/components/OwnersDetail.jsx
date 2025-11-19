import React from "react";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

const OwnersDetail = ({ carDetail }) => {
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl mb-3">Owner / Dealer</h2>
      <img
        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zNHczTkVRYlZRVjdoSmJsUVJVU0NSMTdRS3YifQ?width=128"
        className="w-[70px] h-[70px] rounded-full"
        alt=""
      />

      <h2 className="mt-2 font-bold text-xl">Devraj Bagul</h2>
      <h2 className="mt-2 text-gray-500 ">+91 9284438720</h2>

      <Button
        className="w-full mt-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white"
        onClick={() => window.open("https://wa.me/9284438720", "_blank")}
      >
        <FaWhatsapp  className="text-bold text-black"/> Message Owner
      </Button>
    </div>
  );
};

export default OwnersDetail;
