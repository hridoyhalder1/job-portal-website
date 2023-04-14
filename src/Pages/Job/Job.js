import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import JobCard from './JobCard';

const Job = () => {
    const [jobs, setJobs] = useState([]);
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    if (loading) {
        return <div className=' text-center mt-48 mb-24'>
            <progress className="progress w-56 mx-auto bg-white"></progress>
        </div>
    }

    return (
        <div className='my-[100px]'>
            <div className='text-center'>
                <h1 className='text-4xl text-center font-bold'>Popular Jobs</h1>
                <p className='text-center mx-5 text-[16px] py-3 text-[#8c8d8e]'>Search all the open positions on the web. Get your own personalized salary<br></br> estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-8'>
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
            </div>

        </div>
    );
};

export default Job;