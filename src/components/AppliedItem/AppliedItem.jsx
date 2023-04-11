import React from 'react'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const AppliedItem = ({ job }) => {
    const { id, jobTitle, companyName, companyLogo, jobLocation, salary, jobType, jobType1 } = job;
    return (
        <div className='item flex border border-gray-200 w-[75%] mx-auto rounded-xl my-3 justify-between p-2 items-center'>
            <img src={companyLogo} className='w-[15%]'></img>
            <div className='grow ml-10'>
                <h1 className='text-lg font-bold'>{jobTitle}</h1>
                <p className='text-md'>{companyName}</p>
                <button className='py-1 px-4 border-2 rounded border-blue-300 text-blue-400'>{jobType}</button> <button className='py-1 px-4 border-2 rounded border-blue-300 text-blue-400'>{jobType1}</button>
                <p className='my-2 text-md'><FontAwesomeIcon icon={faLocationDot} /> {jobLocation} <span className='ml-5'><FontAwesomeIcon icon={faDollarSign} /> Salery: {salary}</span></p>
            </div>
            <div>
                <button className='main-btn-style'><Link to={`/${id}`}>View Details</Link></button>
            </div>
        </div>
    )
}

export default AppliedItem