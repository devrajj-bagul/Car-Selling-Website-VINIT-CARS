import Data from '@/Shared/Data'
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className="mt-16 sm:mt-24 w-full">

      {/* Title */}
      <h2 className="font-bold text-3xl text-center mb-6">
        Browse By Type
      </h2>

      {/* Full Center Wrapper */}
      <div className="flex justify-center w-full">
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 sm:gap-6
            max-w-6xl     /* MATCH CAR SECTION WIDTH */
            w-full
            mx-auto       /* FULL CENTERING */
            px-4
          "
        >
          {Data.Category.map((category, index) => (
            <Link key={index} to={`/search/${category.name}`}>
              <div
                className="
                  border 
                  rounded-xl 
                  p-4 sm:p-5 
                  flex flex-col 
                  items-center 
                  hover:shadow-md 
                  cursor-pointer 
                  transition
                  bg-white
                "
              >
                <img src={category.icon} width={35} height={35} alt="" />
                <h2 className="mt-2 text-sm sm:text-base">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Category
