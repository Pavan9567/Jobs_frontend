import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchJobs = (query = '') => {
        const url = query ? `https://jobs-backend-g6lz.onrender.com/api/search-jobs/?query=${query}` : 'https://jobs-backend-g6lz.onrender.com/api/fetch-jobs/';
        fetch(url)
            .then(response => response.json())
            .then(data => setJobs(data.jobs));
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchJobs(searchQuery);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search job titles..."
                    className="px-4 py-2 border rounded"
                />
                <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Search
                </button>
            </form>
            <div className="space-y-4">
                {jobs.map((job, index) => (
                    <div key={index} className="p-4 border rounded">
                        <h2 className="text-xl font-semibold">
                            <Link to={`https://jobs-backend-g6lz.onrender.com/job/${job.id}`} className="text-blue-500 hover:underline">
                                {job.title}
                            </Link>
                        </h2>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                        <a href={job.application_link}target='_blank' rel='noopener noreferrer' className='inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded'>Apply Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;