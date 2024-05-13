// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage.jsx';
import './App.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;