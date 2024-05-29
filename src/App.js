import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Fahrzeug from './Fahrzeug';
import Fahrer from './Fahrer';
import Versicherung from './Versicherung'
import Fahrstrecke from './Fahrstrecke'
import Region from './Region'
import './mvp.css';

import './mvp.css';

function App() {
    const [isLinkVisible, setLinkVisible] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isButtonVisible, setButtonVisible] = useState(false);

    const pages = [
        { name: "Fahrzeug", path: "/Fahrzeug" },
        { name: "Fahrer", path: "/Fahrer" },
        { name: "Versicherung", path: "/Versicherung" },
        { name: "Fahrstrecke", path: "/Fahrstrecke" },
        { name: "Region", path: "/Region" }
    ];

    const handleNext = () => {
        if (currentPageIndex < pages.length) {
            setCurrentPageIndex(currentPageIndex + 1);
            console.log(currentPageIndex)

        }
    };

    const handlePrevious = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
            console.log(currentPageIndex)
        }
    };

    return (
        <div>
            <header>
                <h1>Autoversicherungsrechner</h1>
            </header>
            <main>
                <Router>
                    {isLinkVisible && (
                        <Link to={pages[0].path} className="button-link" onClick={() =>
                        {
                            setLinkVisible(false)
                            setButtonVisible(true)
                            setCurrentPageIndex(0)
                        }}>
                            Start
                        </Link>
                    )}
                    <Routes>
                        <Route path={pages[0].path} element={<Fahrzeug />} />
                        <Route path={pages[1].path} element={<Fahrer />} />
                        <Route path={pages[2].path} element={<Versicherung />} />
                        <Route path={pages[3].path} element={<Fahrstrecke />} />
                        <Route path={pages[4].path} element={<Region />} />
                    </Routes>
                    <nav>
                        {isButtonVisible && (
                            <Link to={pages[currentPageIndex].path} className="button-link zurueck" onClick={handlePrevious}>
                                Zurück
                            </Link>
                        )}
                        {isButtonVisible && (
                            <Link to={pages[currentPageIndex].path} className="button-link weiter" onClick={handleNext}>
                                Weiter
                            </Link>
                        )}
                    </nav>
                </Router>
            </main>
        </div>
    );
}

export default App;
