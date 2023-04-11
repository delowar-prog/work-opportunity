import { getStorageData } from "../utilities/fakedb";

const allAppliedJobs = async() => {
    const getAllJobs= await fetch('data/featured-job.json');
    const allJobs=await getAllJobs.json();
    //get localstorage data 
    const storedJobs = getStorageData();
   
    const saveJob = []
    for(const id in storedJobs) {
        const addedJob=allJobs.find(job=>job.id==id); //data type problem kore so (==)
        if (addedJob) {
            saveJob.push(addedJob);
        }
    }
    return saveJob;
}
export default allAppliedJobs 
