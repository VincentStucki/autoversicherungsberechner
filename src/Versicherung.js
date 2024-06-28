import React, {useState} from 'react';
import Circle from './Circle';

function Versicherung({ data, onDataChange }) {
    // Daten hinzufügem
    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };


    return (
        <div>
            <div className="home content">
                <form>
                    <label>Art der Deckung: </label>
                    <select className="input" id="versicherung" name="versicherung" value={data.versicherung || ''} onChange={handleChange}>
                        <option value="" disabled>Bitte wählen</option>
                        <option value="haftpflichtversicherung">Haftpflichtversicherung</option>
                        <option value="teilkaskoversicherung">Teilkaskoversicherung</option>
                        <option value="vollkaskoversicherung">Vollkaskoversicherung</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default Versicherung;
