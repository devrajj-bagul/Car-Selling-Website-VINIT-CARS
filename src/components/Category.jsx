import Data from '@/Shared/Data'
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>

      {/* Center Wrapper */}
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {Data.Category.map((category, index) => (
            <Link key={index} to={'/search/' + category.name}>
              <div className='border rounded-xl p-5 items-center flex flex-col hover:shadow-md cursor-pointer'>
                <img src={category.icon} width={35} height={35} alt="" />
                <h2 className='mt-2'>{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Category
