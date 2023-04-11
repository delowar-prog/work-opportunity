import React, { useEffect, useState } from 'react'
import { getStorageData } from '../../utilities/fakedb'
import { useLoaderData } from 'react-router-dom'
import AppliedItem from '../AppliedItem/AppliedItem'

const AppliedJobs = () => {
    const getAllJobs=useLoaderData()

  return (
    <div className='common-container'>
        {
            getAllJobs.map(job=><AppliedItem job={job} key={job.id}></AppliedItem>)
        }
    </div>
  )
}

export default AppliedJobs