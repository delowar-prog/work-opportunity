import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div className='py-20'>
            <div className='w-[50%] mx-auto bg-slate-700 flex flex-col justify-center items-center p-20 rounded-xl'>
                <h1 className='text-9xl font-bold text-red-500 my-3'>404</h1>
                <p className='text-6xl text-green-500'>Page Not found</p>
                <p className='text-3xl my-5 text-white'>Please browse a valid url</p>
                <button className='main-btn-style'><Link to="/">Back to home page</Link></button>
            </div>

        </div>
    )
}

export default ErrorPage