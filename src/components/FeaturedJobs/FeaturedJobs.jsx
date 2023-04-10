import React from 'react'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const FeaturedJobs = ({fitem}) => {
  const {id,jobTitle,companyName,companyLogo,jobLocation,salary,jobType,jobType1}=fitem;
  return (
    <div className='f-item border rounded-xl p-10 hover:bg-slate-200 cursor-pointer'>
      <img src={companyLogo} className='w-[25%]'></img>
      <h1 className='text-xl font-bold'>{jobTitle}</h1>
      <p className='text-lg my-3'>{companyName}</p>
      <button className='py-2 px-4 border-2 rounded border-blue-300 text-blue-400 font-bold'>{jobType}</button> <button className='py-2 px-4 border-2 rounded border-blue-300 text-blue-400 font-bold'>{jobType1}</button>
      <p className='my-5 text-lg'><FontAwesomeIcon icon={faLocationDot} /> {jobLocation} <span className='ml-5'><FontAwesomeIcon icon={faDollarSign} /> Salery: {salary}</span></p>
      <button className='main-btn-style'><Link to="details/`${id}`">View Details</Link></button>
    </div> 
  )
}

export default FeaturedJobs