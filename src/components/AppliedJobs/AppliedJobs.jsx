import React, { useEffect, useState } from 'react'
import { getStorageData } from '../../utilities/fakedb'
import { useLoaderData } from 'react-router-dom'
import AppliedItem from '../AppliedItem/AppliedItem'

const AppliedJobs = () => {
    const getAllJobs=useLoaderData()
    const[jobs, setJobs]=useState(getAllJobs)
    const handleJobType=(event)=>{
        const val=event.target.value;
        if(val=="Remote"||val=="Onsite"){
          const filterJobs=getAllJobs.filter(job=>job.jobType==val)
          if(filterJobs){
            setJobs(filterJobs)
          }
        }else{
          setJobs(getAllJobs)
        }
        console.log(jobs)
    }
  return (
    <div className='py-28 relative'>
        <div className='w-[20%] absolute top-20 right-6'>
            <select onChange={handleJobType} className='bg-gray-300 py-2 px-3 rounded'>
              <option>Filter By</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
        </div>
        {
          jobs.map(job=><AppliedItem job={job} key={job.id}></AppliedItem>)
        }
    </div>
  )
}

export default AppliedJobs