import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './jobDetails.css'
import { faLocationDot, faDollarSign, faBookBookmark, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addToDb, getStorageData } from '../../utilities/fakedb'
import { toast } from 'react-toastify'

const JobDetails = () => {
    const {jobId}=useParams();
    const [singleJob, setSingleJob]=useState({})
    
    useEffect(()=>{
      fetch('data/featured-job.json').then(res=>res.json()).then(data=>{
       const detailsJob= data.find(job=>job.id==jobId)
       setSingleJob(detailsJob)
      })
      
    },[])
  //Add to localstorage
  const handleApply=(id)=>{
    const getDbData=getStorageData()
    if(getDbData[id]){
      toast("Sorry you have already applied")
    }else{
      addToDb(id)
      toast("Applied Successfully")
    }
    
  }
    // const singleJob=loadedData.find(job=>job.id==jobId)

const {id,jobTitle,companyName,jobLocation,companyEmail,salary,jobDescription,jobResponsibility,educationalRequirements,experience,jobType,jobType1}=singleJob

  return (
    <div className='job-details p-20 text-xl text-gray-600'>
        <div className='job-description'>
        <p><strong>Job Description : </strong> {jobDescription}</p>
        <p><strong>Job Responsibility : </strong>{jobResponsibility}</p>
        <p><strong>Educational Requirements : </strong>{educationalRequirements}</p>
        <p><strong>Job Experience : </strong>{experience}</p>
        </div>
        <div className='contact-information bg-gray-100 p-5'>
          <p><strong>Job Details</strong></p><hr></hr>
          <p><FontAwesomeIcon className='border border-indigo-500 p-1 rounded-full text-xs text-indigo-500' icon={faBookBookmark} /><strong>Job Title : </strong>{jobTitle}</p>
          <p><FontAwesomeIcon className='border border-indigo-500 p-1 rounded-full text-xs text-indigo-500' icon={faDollarSign} /> <strong>Salery : </strong>{salary}</p> <br></br>
          <p><strong>Contact Information :</strong></p><hr></hr>
          <p><FontAwesomeIcon className='text-sm text-indigo-500' icon={faMessage} /> <strong>Email : </strong>{companyEmail}</p>
          <p><FontAwesomeIcon className='text-sm text-indigo-500' icon={faLocationDot} /> <strong>Location : </strong>{jobLocation}</p> <br></br>
          <button className='main-btn-style' onClick={()=>handleApply(id)}>Apply Now</button>
        </div>
    </div>
  )
}

export default JobDetails