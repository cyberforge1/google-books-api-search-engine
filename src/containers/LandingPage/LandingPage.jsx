// LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomTerm } from '../../utils/randomTerms';  // Assuming you have this utility
import './LandingPage.scss';  // Make sure the path is correct based on your file structure

function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const randomQuery = getRandomTerm();  // Get a random term for the initial search
        navigate('/main', { state: { query: randomQuery } });
    };

    return (
        <div className="landing-container">
            <button
                onClick={handleNavigate}
                className="landing-button"
            >
                Start BookQuest
            </button>
        </div>
    );
}

export default LandingPage;
