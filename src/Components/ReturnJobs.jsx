
import {MdWorkOutline, MdOutlineLocationOn} from "react-icons/md";
export default function ReturnJobs(props){
    return (
        props.jobsArray.map( job => (
        <div className=" flex p-6 flex-col gap-1 justify-center rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-primary"> {job.title}</h3>
                    <h4 className="text-md text-gray-800">{job.company}</h4>
                </div>
                <div>
                    <a className="text-white bg-primary px-5 py-2 text-sm rounded " target="_blank" rel="noreferrer" href={job.apply}>Apply</a>
                </div>
            </div>
            
            <div className="flex justify-between">
                <span className="flex items-center text-sm">
                    <MdWorkOutline  />
                    <h5 className="">{job.experienceLevel}</h5>
                </span>
                <span className="flex items-center text-sm">
                    <MdOutlineLocationOn  />
                    <h5>{job.location}</h5>
                </span>  
            </div>
            <p className="text-sm text-gray-600">{job.description.slice(0,60)}...</p>
            <div className="text-sm">
                <span className="font-semibold">Skills:</span>
                <span className="">{job.skills.join(', ')}</span>
            </div>
        </div>))
        
    );
};