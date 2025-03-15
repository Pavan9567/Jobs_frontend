import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/job/:jobId" element={<JobDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;