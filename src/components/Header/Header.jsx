import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-slate-700 py-5 md:py-0'>
            <div className='common-container header flex justify-between items-center'>
                <h1 className='text-lg md:text-2xl text-amber-500 font-bold'>WorkOpportunity</h1>
                <nav className='absolute md:static right-10'>
                    <div onClick={() => setOpen(!open)} className='md:hidden'>
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <ul className={`md:flex absolute rounded md:static gap-8 ease-in ease-out text-gray-300 font-bold bg-slate-500 md:bg-slate-700 py-3 px-5 z-40  ${open ? 'top-11 right-1 w-48 md:w-[100%] text-right' : '-top-48'}`}>
                        <li className='mb-1 md:mb-0'>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-violet-500" : ""
                            }>Home</NavLink>
                        </li>
                        <li className='mb-1 md:mb-0'>
                            <NavLink to='/statistics' className={({ isActive }) => isActive ? "text-violet-500" : ""
                            }>Statistics</NavLink>
                        </li>
                        <li className='mb-1 md:mb-0'>
                            <NavLink to='/applied-jobs' className={({ isActive }) => isActive ? "text-violet-500" : ""
                            }>Applied Jobs</NavLink>
                        </li>
                        <li className='mb-1 md:mb-0'>
                            <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-violet-500" : ""
                            }>Blogs</NavLink>
                        </li>
                    </ul>
                </nav>
                <Link to=''><button className='main-btn-style hidden md:block'>Start Applying</button></Link>
            </div>
        </div>
    )
}

export default Header