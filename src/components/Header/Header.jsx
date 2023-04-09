import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from "../../images/banner-img.jpg"
import Lottie from "lottie-react";
import bannerLottieAnimation from "../../assets/41391-we-are-hiring-get-ready-to-work-job-recruitment-isometric-hiring-process.json";

const Header = () => {
    return (
        <div className='bg-slate-700'>
            <div className='common-container header flex justify-between items-center'>
                <h1 className='text-lg md:text-2xl text-amber-500 font-bold'>WorkOpportunity</h1>
                <nav>
                    <ul className='md:flex gap-7 text-gray-300 font-bold'>
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>Statistics</Link></li>
                        <li><Link to=''>Applied Jobs</Link></li>
                        <li><Link to=''>Blog</Link></li>
                    </ul>
                </nav>
                <Link to=''><button className='main-btn-style'>Start Applying</button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 common-container mt-10 md:mt-0'>
                <div className='w-[100%] mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-tight text-white'>We are here for you to get <span className=' text-amber-500'>your dream job</span></h1>
                    <p className='my-8 text-white'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to=''><button className='main-btn-style'>Get Started</button></Link>
                </div>
                <div className='w-[100%]'>
                <Lottie animationData={bannerLottieAnimation} loop={true} />
                </div>
            </div>
        </div>
    )
}

export default Header