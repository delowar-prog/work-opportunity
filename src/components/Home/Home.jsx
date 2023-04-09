import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const jobCategories = useLoaderData();
    return (
        <div className='common-container'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold'>Job Category List</h1>
                <p className='text-lg my-2'>Explore your favorite types of jobs</p>
            </div>
            <div className='card-grid my-10'>
                {
                    jobCategories.map(category => <CategoryItem category={category} key={category.id}></CategoryItem>)
                }
            </div>

            <div className='featured-sec my-20'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Featured Jobs</h1>
                    <p className='text-lg my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='f-item-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 '>
                    <div className='f-item border rounded-xl p-10'>
                        <img src=""></img>
                        <h1 className='text-xl font-bold'>Job Title Here</h1>
                        <p className='text-lg my-1'>Company Name</p>
                        <button className='py-2 px-4 border-2 rounded border-blue-300 text-blue-300 font-bold'>Remote</button> <button className='py-2 px-4 border-2 rounded border-blue-300 text-blue-300 font-bold'>Fulltime</button>
                        <p className='my-3'><FontAwesomeIcon icon={faLocationDot} /> Location, Dhaka, Bangladesh <span className='ml-5'><FontAwesomeIcon icon={faDollarSign} /> Salery: 100K-150K</span></p>
                        <button className='main-btn-style'>Start Applying</button>
                    </div>
                    <div className='f-item border rounded-xl'>
                        <img src=""></img>
                        <h1>Job Title Here</h1>
                        <p >Company Name</p>
                        <button className='py-2 px-4 border-2 rounded border-blue-300'>Remote</button> <button>Fulltime</button>
                        <p> Location, Dhaka, Bangladesh <span>Salery: 100K-150K</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home