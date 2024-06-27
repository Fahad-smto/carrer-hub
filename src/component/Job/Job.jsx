import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = job;
    return (
        <div className="card   bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="">
    <button className="px-5 mr-4 py-2 font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>

   <div className=" flex ">
   <h1 className="flex mt-2 mr-4">< CiLocationOn className="text-2xl" />{location}</h1>
   <h1 className="flex mt-2"><MdAttachMoney className="text-2xl " />{salary}</h1>
   </div>

    </div>
    <div className="card-actions  ">
     <Link to={`/job/${id}`}>
     <button className="btn btn-primary">Viwe details</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default Job;