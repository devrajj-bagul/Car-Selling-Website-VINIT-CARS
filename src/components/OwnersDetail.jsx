import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const OwnersDetail = ({ carDetail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-10 border rounded-xl shadow-md mt-7 bg-white"
    >
      <h2 className="font-medium text-2xl mb-3">Owner / Dealer</h2>

      {/* Profile */}
      <img
        src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zNHczTkVRYlZRVjdoSmJsUVJVU0NSMTdRS3YifQ?width=128"
        className="w-[70px] h-[70px] rounded-full"
        alt=""
      />

      <h2 className="mt-2 font-bold text-xl">Devraj Bagul</h2>
      <h2 className="mt-1 text-gray-600 text-lg">+91 9284438720</h2>

      {/* 📞 Call Button */}
      <Button
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 py-5"
        onClick={() => (window.location.href = "tel:+919284438720")}
      >
        <FaPhoneAlt className="text-white text-lg" />
        Call Owner
      </Button>

      {/* 💬 WhatsApp Button */}
      <Button
        className="w-full mt-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold flex items-center gap-2 py-5"
        onClick={() => window.open("https://wa.me/919284438720", "_blank")}
      >
        <FaWhatsapp className="text-white text-lg" />
        WhatsApp Owner
      </Button>
    </motion.div>
  );
};

export default OwnersDetail;
