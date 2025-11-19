import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const InfoSection = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Vinit Auto Consultants — Aapki Perfect Car, Aapke Budget Mein!
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Vinit Auto Consultants — aapka trusted place for verified
              second-hand cars. Yahan aapko Maruti, Hyundai, Tata, Mahindra,
              Honda, Toyota jaise top Indian brands best condition mein aur
              transparent pricing ke saath milte hain. Hum provide karte hain
              clean history, smooth paperwork aur tension-free buying
              experience—taaki aapko mile right car, right price.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="https://wa.me/919284438720"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://i.pinimg.com/736x/03/08/50/030850f43dbabf1f590f3507dd9a69c4.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default InfoSection;
