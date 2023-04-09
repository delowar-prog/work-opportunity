import React from 'react'

const CategoryItem = ({category}) => {
    const {id, categoryName, vacancy, icon}=category;
  return (
        <div className='item border rounded-xl bg-slate-700 p-5 cursor-pointer'>
           <div className='w-[50%] mx-auto bg-gray-400 p-3 rounded-xl'>
           <img src={icon} className='w-[100%] h-24'></img>
           </div>
            <h2 className='text-amber-500 text-lg md:text-2xl text-center my-1'>{categoryName}</h2>
            <p className='text-white text-lg text-center'>{vacancy}+ jobs available </p>
        </div>
  )
}

export default CategoryItem