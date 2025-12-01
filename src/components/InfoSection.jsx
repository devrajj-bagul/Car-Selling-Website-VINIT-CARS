import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-8 md:p-12 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 md:text-3xl"
            >
              Vinit Auto Consultants — Aapki Perfect Car, Aapke Budget Mein!
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="hidden text-gray-600 md:mt-4 md:block leading-relaxed"
            >
              Vinit Auto Consultants — aapka trusted place for verified
              second-hand cars. Yahan aapko Maruti, Hyundai, Tata, Mahindra,
              Honda, Toyota jaise top Indian brands best condition mein aur
              transparent pricing ke saath milte hain. Hum provide karte hain
              clean history, smooth paperwork aur tension-free buying 
              experience—taaki aapko mile right car, right price.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-4 md:mt-8"
            >
              <motion.a
                href="https://wa.me/919284438720"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="inline-block rounded-sm bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg hover:bg-blue-700"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          initial={{ opacity: 0, x: 40, scale: 1.05 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          alt=""
          src="https://i.pinimg.com/736x/03/08/50/030850f43dbabf1f590f3507dd9a69c4.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default InfoSection;
