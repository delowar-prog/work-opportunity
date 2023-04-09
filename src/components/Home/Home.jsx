import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem';

const Home = () => {
    const jobCategories=useLoaderData();
  return (
    <div className='common-container'>
        <div className='text-center my-10'>
            <h1 className='text-3xl font-bold'>Job Category List</h1>
            <p className='text-lg my-2'>Explore your favorite types of jobs</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-6 my-10'>
        {
            jobCategories.map(category=><CategoryItem category={category} key={category.id}></CategoryItem>)
        }
        </div>

        <div>
        
        </div>
    </div>
  )
}

export default Home