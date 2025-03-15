import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetail = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch(`https://jobs-backend-g6lz.onrender.com/api/job/${jobId}/`)
            .then(response => response.json())
            .then(data => setJob(data));
    }, [jobId]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
            <div className="space-y-2">
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <a href={job.application_link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Apply Now
                </a>
            </div>
            <Link to="/" className="mt-4 inline-block text-blue-500">Back to Job List</Link>
        </div>
    );
};

export default JobDetail;