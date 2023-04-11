import React from 'react'
import {Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className='bg-slate-700'>
            <div className='common-container header flex justify-between items-center'>
                <h1 className='text-lg md:text-2xl text-amber-500 font-bold'>WorkOpportunity</h1>
                <nav>
                    <ul className='md:flex gap-7 text-gray-300 font-bold'>
                        <li><NavLink to='/' className={({ isActive}) =>isActive? "text-violet-500": ""
                      }>Home</NavLink></li>
                        <li><NavLink to='/statistics' className={({ isActive}) =>isActive? "text-violet-500": ""
                    }>Statistics</NavLink></li>
                        <li><NavLink to='/applied-jobs' className={({ isActive}) =>isActive? "text-violet-500": ""
                    }>Applied Jobs</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive}) =>isActive? "text-violet-500": ""
                    }>Blogs</NavLink></li>
                    </ul>
                </nav>
                <Link to=''><button className='main-btn-style'>Start Applying</button></Link>
            </div>
        </div>
    )
}

export default Header