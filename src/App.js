import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import Fahrzeug from './Fahrzeug';
import Fahrer from './Fahrer';
import Versicherung from './Versicherung';
import Fahrstrecke from './Fahrstrecke';
import Region from './Region';
import Start from './Start';
import Ergebnis from './Ergebnis';
import './mvp.css';

function App() {
    const [isLinkVisible, setLinkVisible] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [formData, setFormData] = useState({
        fahrzeug: {},
        fahrer: {},
        versicherung: {},
        fahrstrecke: {},
        region: {}
    });

    const pages = [
        { name: "Start", path: "/Start", component: Start },
        { name: "Fahrzeug", path: "/Fahrzeug", component: Fahrzeug },
        { name: "Fahrer", path: "/Fahrer", component: Fahrer },
        { name: "Versicherung", path: "/Versicherung", component: Versicherung },
        { name: "Fahrstrecke", path: "/Fahrstrecke", component: Fahrstrecke },
        { name: "Region", path: "/Region", component: Region }
    ];

    const handleNext = () => {
        setCurrentPageIndex(prevIndex => Math.min(prevIndex + 1, pages.length - 1));
    };

    const handlePrevious = () => {
        setCurrentPageIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleFormDataChange = (page, data) => {
        setFormData(prevData => ({
            ...prevData,
            [page]: data
        }));
    };

    const resetApp = () => {
        setCurrentPageIndex(0);
        setFormData({
            fahrzeug: {},
            fahrer: {},
            versicherung: {},
            fahrstrecke: {},
            region: {}
        });
    };

    useEffect(() => {
        const handleUnload = (event) => {
            event.preventDefault();
            setLinkVisible(true);
            setButtonVisible(false);
            setCurrentPageIndex(0);
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => window.removeEventListener("beforeunload", handleUnload);
    }, []);

    function NavigationButtons() {
        const location = useLocation();

        useEffect(() => {
            if (location.pathname === '/Ergebnis') {
                setButtonVisible(false);
            } else {
                setButtonVisible(true);
            }
        }, [location.pathname]);

        return (
            <nav>
                {isButtonVisible && currentPageIndex > 0 && (
                    <Link to={pages[currentPageIndex - 1].path} className="button-link zurueck" onClick={handlePrevious}>
                        Zurück
                    </Link>
                )}
                {isButtonVisible && currentPageIndex < pages.length - 1 && (
                    <Link to={pages[currentPageIndex + 1].path} className="button-link weiter" onClick={handleNext}>
                        Weiter
                    </Link>
                )}
            </nav>
        );
    }

    return (
        <div>
            <header>
                <h1>Autoversicherungsrechner</h1>
            </header>
            <main>
                <Router>
                    {isLinkVisible && (
                        <Link to={pages[1].path} className="button-link" onClick={() => {
                            setLinkVisible(false);
                            setButtonVisible(true);
                            setCurrentPageIndex(1);
                        }}>
                            Start
                        </Link>
                    )}
                    <Routes>
                        <Route path="/" element={<Navigate to="/Start" />} />
                        {pages.map((page, index) => (
                            <Route
                                key={index}
                                path={page.path}
                                element={
                                    <page.component
                                        data={formData[page.name.toLowerCase()]}
                                        onDataChange={(data) => handleFormDataChange(page.name.toLowerCase(), data)}
                                    />
                                }
                            />
                        ))}
                        <Route path="/Ergebnis" element={<Ergebnis formData={formData} onRestart={resetApp} />} />
                    </Routes>
                    <NavigationButtons />
                </Router>
            </main>
        </div>
    );
}

export default App;
