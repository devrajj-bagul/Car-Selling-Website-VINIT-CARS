import Data from '@/Shared/Data'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Category = () => {
  return (
    <div className="mt-16 sm:mt-24 w-full">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold text-3xl text-center mb-6"
      >
        Browse By Type
      </motion.h2>

      {/* Center Wrapper */}
      <div className="flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 sm:gap-6
            max-w-6xl 
            w-full 
            mx-auto 
            px-4
          "
        >
          {Data.Category.map((category, index) => (
            <Link key={index} to={`/search/${category.name}`}>
              
              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative cursor-pointer group"
              >
                {/* 🔥 NEON BLUE ROTATING BORDER */}
                <div
                  className="
                    absolute inset-0 rounded-xl p-[2px]
                    bg-[conic-gradient(#00c6ff,#0072ff,#00c6ff)]
                    animate-spin-slow
                    blur-[1px] opacity-80
                  "
                ></div>

                {/* MAIN CARD */}
                <div
                  className="
                    relative bg-white rounded-xl 
                    p-4 sm:p-5 
                    flex flex-col items-center 
                    z-10
                  "
                >
                  <img src={category.icon} width={35} height={35} alt="" />
                  <h2 className="mt-2 text-sm sm:text-base">
                    {category.name}
                  </h2>
                </div>
              </motion.div>

            </Link>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default Category
