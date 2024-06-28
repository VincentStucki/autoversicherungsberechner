import React, {useState} from 'react';
import Circle from './Circle';
import {useNavigate} from "react-router-dom";

function Region({ data, onDataChange }) {
    const navigate = useNavigate();
    // Daten hinzufügem
    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };
    // Weiter zu Ergebnis
    const handleDone = () => {
        navigate('/Ergebnis');
    };


    return (
        <div>
            <div className="home content">
                <form>
                    <label htmlFor="wohnort">Wohnort (Region)</label>
                    <select className="input" id="wohnort" name="wohnort" value={data.wohnort || ''} onChange={handleChange}>
                        <option value="" disabled>Bitte Wählen</option>
                        <option value="stadt">städtisches Gebiet</option>
                        <option value="land">ländliches Gebiet</option>
                    </select>

                </form>


            </div>
            <button className="button-link done" onClick={handleDone}>Fertig</button>
        </div>
    );
};

export default Region;
