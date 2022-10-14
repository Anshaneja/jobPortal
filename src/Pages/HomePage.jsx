import React from "react";
import { useState, useRef } from "react";
import {MdWorkOutline, MdOutlineLocationOn} from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const HomePage = () => {

    const [query , setQuery] = useState("");
    const queryRef = useRef("");
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState("")
    
    // fetch data from api using axios from localhost:3001 in react
    
   

    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/jobs?search=${query}`);
        setJobs(response.data);
        console.log(response.data);
        setLoading(true);
    }
    fetchData();
    }, [query]);

    function ReturnJobs(props){
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
    }

    function JobSkeleton(){
        return [...Array(10)].map( () => 
                <div className=" flex p-6 flex-col gap-1 justify-center rounded-lg shadow-lg hover:shadow-xl">
                    <h3 className="text-xl font-bold text-primary"> <Skeleton width={140}/></h3>
                    <h4 className="text-md text-gray-800"> <Skeleton width={80}/> </h4>
                    <div className="flex justify-between">
                        <span className="flex items-center text-sm">
                            <h5 className=""> <Skeleton width={70} /> </h5>
                        </span>
                        <span className="flex items-center text-sm">
                            <h5> <Skeleton width={100} /> </h5>
                        </span>  
                    </div>
                    <Skeleton /> 
                    <Skeleton /> 
                </div> 
        )
    }

    
    return (
        <div>
            <div className="p-8 ">
                <h1 className="text-center text-3xl"> <span className="text-primary">Job</span> Portal</h1>
            </div>
            {/* search bar  */}
            <div className="flex justify-center gap-2">
                <div className="w-1/2">
                    <input type="text" ref={queryRef} placeholder="Search for jobs" className="w-full p-4 border border-gray-400 rounded-lg outline-none" />
                </div>
                <button onClick={() => setQuery(queryRef.current.value)} className="bg-primary px-5 py-2 rounded text-white"> Find jobs</button>
            </div>

            {/* Search Filters */}
            {/* <div className="flex justify-center gap-3 mt-8">
                <div className="w-1/4">
                    <select className="w-full p-2 border border-gray-400 rounded-lg outline-none">
                        <option value="all">All</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>
                <div className="w-1/4">
                    <select className="w-full p-2 border border-gray-400 rounded-lg outline-none">
                        <option value="">Departments</option>
                        <option value="all">All</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>
                <div className="w-1/4">
                    <select className="w-full p-2 border border-gray-400 rounded-lg outline-none">
                        <option value="all">All</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>
            </div> */}

            {/* Job Cards */}
            <div className="grid w-2/3 mx-auto pt-8 justify-center grid-cols-2 gap-x-6 gap-y-3">
                {loading?<ReturnJobs jobsArray={jobs} /> : <JobSkeleton />}
            </div>

        </div>

    )
}
export default HomePage;