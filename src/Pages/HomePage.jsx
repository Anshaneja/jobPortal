import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import ReturnJobs from "../Components/ReturnJobs";
import JobSkeleton from "../Components/JobSkeleton";

// css
import 'react-loading-skeleton/dist/skeleton.css';

const HomePage = () => {

    const [query , setQuery] = useState("");
    const queryRef = useRef("");
    const [jobs, setJobs] = useState([]);
    const [jobsToShow, setJobsToShow] = useState([])
    const [loading, setLoading] = useState("");


    const [internship, setInternship] = useState(false);
    const [ entry, setEntry] = useState(false);
    const [ experienced, setExperienced] = useState(false);
    const [ bengaluru, setBengaluru] = useState(false);
    const [ hyderabad, setHyderabad] = useState(false);
    const [ gurugram, setGurugram] = useState(false);

    
    // fetch data from api using axios from localhost:3001 in react
    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`https://jobportal-api.vercel.app/jobs?search=${query}`);
        
        setJobs(response.data);
        setJobsToShow(response.data);
        setLoading(true);
    }
    fetchData();
    }, [query]);
    
    useEffect(()=> {
        const data = jobs.filter( job => 
            internship? job.experienceLevel === "Internship": true &&
            entry? job.experienceLevel === "Entry Level": true &&
            experienced? job.experienceLevel === "Experienced": true &&
            bengaluru?job.location === "Bengaluru" :true &&
            hyderabad?job.location === "Hyderabad" : true &&
            gurugram?job.location === "Gurugram" : true 

            
        )
        
        setJobsToShow(data);
        console.log(data);
        console.log(internship);
    }, [jobs,internship, entry, experienced, bengaluru, hyderabad, gurugram])

    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
    };

    function queryHandler(){
        setLoading(false);
        setQuery(queryRef.current.value);
    }
    function searchKeyDownHandler(e){
        if(e.key === 'Enter'){
            queryHandler();
        }
    }

    return (
        <div>
            <div className="p-8 ">
                <h1 className="text-center text-3xl"> <span className="text-primary">Job</span> Portal</h1>
            </div>
            {/* search bar  */}
            <div className="flex justify-center gap-2">
                <div className="w-1/2">
                    <input type="text" onKeyDown={searchKeyDownHandler} ref={queryRef} placeholder="Search for jobs" className="w-full p-4 border border-gray-400 rounded-lg outline-none" />
                </div>
                <button onClick={queryHandler} className="bg-primary px-5 py-2 rounded text-white"> Find jobs</button>
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

            {/* Filter SideBar */}
            <div className="flex ">
                <div className="flex flex-col gap-4 p-8 w-1/5">
                    <h3 className=" text-2xl font-semibold my-5">Filters</h3>

                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold"> Experience</h4>
                        <Checkbox
                            label=" Internship"
                            value={internship}
                            onChange={()=> setInternship(!internship)}
                        />
                        <Checkbox
                            label=" Entry Level"
                            value={entry}
                            onChange={()=> setEntry(!entry)}
                        />
                        <Checkbox
                            label=" Experienced"
                            value={experienced}
                            onChange={()=> setExperienced(!experienced)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold"> Location</h4>
                        <Checkbox
                            label=" Bengaluru"
                            value={bengaluru}
                            onChange={()=> setBengaluru(!bengaluru)}
                        />
                        <Checkbox
                            label=" Hyderabad"
                            value={hyderabad}
                            onChange={()=> setHyderabad(!hyderabad)}
                        />
                        <Checkbox
                            label=" Gurugram"
                            value={gurugram}
                            onChange={()=> setGurugram(!gurugram)}
                        />
                    </div>
                    
                </div>
                {/* Job Cards */}
                <div className="grid w-2/3 mx-auto py-8 justify-center grid-cols-2 gap-x-6 gap-y-3">
                    {loading?<ReturnJobs jobsArray={jobsToShow} /> : <JobSkeleton />}
                </div>
            </div>
            

        </div>

    )
}
export default HomePage;