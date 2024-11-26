// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage.jsx';
import LandingPage from './containers/LandingPage/LandingPage.jsx';  // Import the new LandingPage
import './App.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
