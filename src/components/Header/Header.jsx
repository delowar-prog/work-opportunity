import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='bg-slate-700'>
            <div className='common-container header flex justify-between items-center'>
                <h1 className='text-lg md:text-2xl text-amber-500 font-bold'>WorkOpportunity</h1>
                <nav>
                    <ul className='md:flex gap-7 text-gray-300 font-bold'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to=''>Statistics</Link></li>
                        <li><Link to='/applied-jobs'>Applied Jobs</Link></li>
                        <li><Link to=''>Blog</Link></li>
                    </ul>
                </nav>
                <Link to=''><button className='main-btn-style'>Start Applying</button></Link>
            </div>
        </div>
    )
}

export default Header