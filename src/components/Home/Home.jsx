import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Banner from '../Banner/Banner';
const Home = () => {
    const featuredJobs = useLoaderData();
    const featuredDefaultItems = featuredJobs.slice(0, 4)
    const [featureds, setFeatureds] = useState(featuredDefaultItems)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('data/job-category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (

        <div className='home-container'>
            <Banner></Banner>
            <div className='common-container'>
                <div className='text-center my-10'>
                    <h1 className='text-3xl font-bold'>Job Category List</h1>
                    <p className='text-lg my-2'>Explore your favorite types of jobs</p>
                </div>
                <div className='card-grid my-10'>
                    {
                        categories.map(category => <CategoryItem category={category} key={category.id}></CategoryItem>)
                    }
                </div>

                <div className='featured-sec my-20'>
                    <div className='text-center mb-14'>
                        <h1 className='text-3xl font-bold'>Featured Jobs</h1>
                        <p className='text-lg my-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='f-item-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 '>
                        {
                            featureds.map(fitem => <FeaturedJobs fitem={fitem} key={fitem.id}></FeaturedJobs>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home