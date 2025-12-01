import React from "react";
import Search from "./Search";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full bg-[#eef0fc]">

      <div
        className="
          flex flex-col items-center
          w-full 
          px-4 py-14 gap-6
          sm:px-10 sm:py-20
        "
      >

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            font-bold text-center leading-tight
            text-[36px]
            sm:text-[60px]
          "
        >
          Find your <br className="sm:hidden" /> Dream Car
        </motion.h2>

        {/* SEARCH BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full flex justify-center"
        >
          <Search />
        </motion.div>

        {/* TESLA IMAGE */}
        <motion.img
          src="/tesla.png"
          alt="car"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="
            mt-4 w-[430px]
            sm:w-auto sm:mt-10
          "
        />
      </div>

    </div>
  );
};

export default Hero;
