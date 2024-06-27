 import { useLoaderData } from "react-router-dom";
import  {}  from "./AppliedJobs.jsx";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localstorage.js";
 
const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs)

    const [appliedJobs,setAppliedJobs] =useState([]);

    useEffect( ()=>{
        const storedJobIds= getStoredJobApplication();
        if(jobs.length>0){
            // const jobsApplied =jobs.filter(job=>storedJobIds.includes(job.id))

            const jobsApplied =[];
            for(const id of storedJobIds){
                const job =jobs.find(job=>job.id===id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            
            setAppliedJobs(jobsApplied)

            // console.log(jobs,storedJobIds,jobsApplied)
        }
    },[])

    return (
        <div>
            <h2 className="text-2xl">applied jobs here {appliedJobs.length}</h2>

            <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>All</a></li>
    <li><a>Remote</a></li>
    <li><a>On-site</a></li>
  </ul>
</details>

        <ul>
            {
                appliedJobs.map(job=><li key={job.id}><span>{job.job_title}{job.company_name} {job.remote_or_onsite}
                </span></li>)
            }
        </ul>

        </div>
    );
};

export default AppliedJobs;