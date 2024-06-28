import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import Fahrzeug from './Fahrzeug';
import Fahrer from './Fahrer';
import Versicherung from './Versicherung';
import Fahrstrecke from './Fahrstrecke';
import Region from './Region';
import Start from './Start';
import Ergebnis from './Ergebnis';
import CircleNavigation from './CircleNavigation';
import './mvp.css';

function App() {
    const [isLinkVisible, setLinkVisible] = useState(true);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isProgressBarVisible, setProgressBarVisible] = useState(false);
    const [formData, setFormData] = useState({
        fahrzeug: {},
        fahrer: {},
        versicherung: {},
        fahrstrecke: {},
        region: {}
    });
    // Liste alle Seiten
    const pages = [
        { name: "Start", path: "/Start", component: Start },
        { name: "Fahrzeug", path: "/Fahrzeug", component: Fahrzeug },
        { name: "Fahrer", path: "/Fahrer", component: Fahrer },
        { name: "Versicherung", path: "/Versicherung", component: Versicherung },
        { name: "Fahrstrecke", path: "/Fahrstrecke", component: Fahrstrecke },
        { name: "Region", path: "/Region", component: Region }
    ];
    // Um auf die nächste Seite zu kommen
    const handleNext = () => {
        setCurrentPageIndex(prevIndex => Math.min(prevIndex + 1, pages.length - 1));
    };
    // Um auf die vorherige Seite zu kommen
    const handlePrevious = () => {
        setCurrentPageIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };
    // Um die Daten zu speichern für die Berechnung
    const handleFormDataChange = (page, data) => {
        setFormData(prevData => ({
            ...prevData,
            [page]: data
        }));
    };
    // Lösch alle Daten und setzt alles ins Standard ein
    const resetApp = () => {
        setCurrentPageIndex(0);
        setLinkVisible(true);
        setButtonVisible(false);
        setProgressBarVisible(false);
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
            setProgressBarVisible(false);
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => window.removeEventListener("beforeunload", handleUnload);
    }, []);

    function NavigationButtons() {
        const location = useLocation();

        useEffect(() => {
            setButtonVisible(location.pathname !== '/Start' && location.pathname !== '/Ergebnis');
            setProgressBarVisible(location.pathname !== '/Start' && location.pathname !== '/Ergebnis');
        }, [location.pathname]);

        return (
            <nav>
                {isButtonVisible && currentPageIndex > 0 && (
                    <Link to={pages[currentPageIndex - 1].path} className="button-nav zurueck" onClick={handlePrevious}>
                        Zurück
                    </Link>
                )}
                {isButtonVisible && currentPageIndex < pages.length - 1 && (
                    <Link to={pages[currentPageIndex + 1].path} className="button-nav weiter" onClick={handleNext}>
                        Weiter
                    </Link>
                )}
            </nav>
        );
    }

    function StartLink() {
        const location = useLocation();

        useEffect(() => {
            setLinkVisible(location.pathname === '/Start');
        }, [location.pathname]);

        return (
            isLinkVisible && (
                <div className="home">
                    <h1 className="homeText">Willkommen zum Autoversicherungsrechner</h1>
                    <Link to={pages[1].path} className="button-link start" onClick={() => {
                        setLinkVisible(false);
                        setButtonVisible(true);
                        setCurrentPageIndex(1);
                        setProgressBarVisible(true);
                    }}>
                        Start
                    </Link>
                </div>
            )
        );
    }

    return (
        <div className="container">
            <div className="header-container">
                <h1 className="title">Autoversicherung</h1>
            </div>

            <main>
                <Router>
                        <StartLink />
                        { isProgressBarVisible && (
                            <CircleNavigation currentPageIndex={currentPageIndex}/>
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
                    <div className="navigation">
                        <NavigationButtons />
                    </div>
                </Router>
            </main>
        </div>
    );
}

export default App;
